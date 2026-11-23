(() => {
  'use strict';

  const timedOutConnections = new WeakSet();
  const iceServers = [
    { urls: 'stun:stun.l.google.com:19302' },
    {
      urls: [
        'turn:eu-0.turn.peerjs.com:3478',
        'turn:eu-0.turn.peerjs.com:3478?transport=tcp',
        'turn:us-0.turn.peerjs.com:3478',
        'turn:us-0.turn.peerjs.com:3478?transport=tcp'
      ],
      username: 'peerjs',
      credential: 'peerjsp'
    }
  ];

  window.ArcadeNetwork = {
    createPeer() {
      return new Peer(undefined, {
        debug: 1,
        config: {
          iceServers,
          iceTransportPolicy: 'all',
          sdpSemantics: 'unified-plan'
        }
      });
    },
    watchConnection(connection, onTimeout, timeoutMs = 45000) {
      let settled = false;
      const clear = () => {
        settled = true;
        window.clearTimeout(timer);
      };
      const timer = window.setTimeout(() => {
        if (settled || connection.open) return;
        timedOutConnections.add(connection);
        onTimeout();
        connection.close();
      }, timeoutMs);
      connection.on('open', clear);
      connection.on('close', clear);
    },
    didConnectionTimeOut(connection) {
      return timedOutConnections.has(connection);
    }
  };
})();
