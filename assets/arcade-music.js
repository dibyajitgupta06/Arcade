(() => {
  'use strict';

  const tracks = {
    welcome: {
      beat: 0.48,
      melody: [72, 76, 79, 76, 74, 77, 81, 77, 72, 76, 79, 84, 74, 79, 83, 79],
      roots: [60, 57, 53, 55]
    },
    catch: {
      beat: 0.43,
      melody: [72, 76, 79, 84, 79, 76, 74, 77, 81, 86, 81, 77, 72, 76, 79, 84],
      roots: [60, 53, 55, 57]
    },
    heart: {
      beat: 0.38,
      melody: [74, 77, 81, 86, 81, 77, 72, 76, 79, 84, 79, 76, 74, 77, 81, 86],
      roots: [62, 57, 55, 60]
    },
    river: {
      beat: 0.52,
      melody: [69, 72, 76, 81, 76, 72, 67, 71, 74, 79, 74, 71, 69, 72, 76, 81],
      roots: [57, 53, 55, 52]
    },
    pillow: {
      beat: 0.34,
      melody: [72, 79, 84, 88, 86, 84, 79, 76, 81, 84, 88, 91, 88, 84, 79, 76],
      roots: [60, 57, 53, 55]
    }
  };

  const track = tracks[document.body.dataset.arcadeTrack] || tracks.catch;
  const storageKey = 'dibya-hridika-arcade-music-muted';
  const controls = [...document.querySelectorAll('[data-music-toggle]')];
  let muted = false;
  let prepared = false;
  let wantsMusic = false;
  let context = null;
  let master = null;
  let timer = null;
  let stepIndex = 0;

  try {
    muted = localStorage.getItem(storageKey) === 'true';
  } catch {}

  function renderControls() {
    controls.forEach((button) => {
      button.textContent = muted ? '♫ OFF' : '♫ ON';
      button.setAttribute('aria-pressed', String(muted));
      button.setAttribute('aria-label', muted ? 'Turn background music on' : 'Mute background music');
      button.title = muted ? 'Turn background music on' : 'Mute background music';
    });
  }

  function ensureAudio() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return Promise.resolve(false);
    if (!context) {
      context = new AudioContextClass();
      master = context.createGain();
      master.gain.value = 0.0001;
      master.connect(context.destination);
    }
    if (context.state === 'suspended') {
      return context.resume().then(() => true).catch(() => false);
    }
    return Promise.resolve(true);
  }

  function playTone(midi, type, volume, duration, startAt) {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(440 * Math.pow(2, (midi - 69) / 12), startAt);
    envelope.gain.setValueAtTime(0.0001, startAt);
    envelope.gain.exponentialRampToValueAtTime(volume, startAt + 0.025);
    envelope.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(startAt);
    oscillator.stop(startAt + duration + 0.03);
  }

  function playStep() {
    if (!context || muted || !wantsMusic) return;
    const startAt = context.currentTime + 0.025;
    const beat = track.beat;
    const chordIndex = Math.floor(stepIndex / 4) % track.roots.length;
    const root = track.roots[chordIndex];
    const melodyNote = track.melody[stepIndex % track.melody.length];
    playTone(melodyNote, 'triangle', 0.042, beat * 0.72, startAt);
    if (stepIndex % 4 === 0) {
      playTone(root - 12, 'sine', 0.026, beat * 3.5, startAt);
      playTone(root, 'sine', 0.009, beat * 3.4, startAt);
      playTone(root + 4, 'sine', 0.006, beat * 3.4, startAt);
      playTone(root + 7, 'sine', 0.006, beat * 3.4, startAt);
    }
    stepIndex += 1;
  }

  async function prepare() {
    if (prepared) return;
    prepared = true;
    await ensureAudio();
  }

  async function play() {
    wantsMusic = true;
    if (!await ensureAudio() || muted) return;
    master.gain.setTargetAtTime(0.55, context.currentTime, 0.35);
    if (timer === null) {
      stepIndex = 0;
      playStep();
      timer = window.setInterval(playStep, track.beat * 1000);
    }
  }

  function setMuted(nextMuted) {
    muted = Boolean(nextMuted);
    try {
      localStorage.setItem(storageKey, String(muted));
    } catch {}
    renderControls();
    if (muted) {
      if (context && master) master.gain.setTargetAtTime(0.0001, context.currentTime, 0.04);
      if (timer !== null) window.clearInterval(timer);
      timer = null;
    } else if (wantsMusic) {
      play();
    }
  }

  controls.forEach((button) => button.addEventListener('click', () => setMuted(!muted)));
  document.addEventListener('pointerdown', prepare, { capture: true, once: true });
  document.addEventListener('keydown', prepare, { capture: true, once: true });
  renderControls();
  window.arcadeMusic = { prepare, play, toggle: () => setMuted(!muted), setMuted };
})();
