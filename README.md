# Catch My Love — Dibya & Hridika

A cooperative two-player pixel-art browser platform game. Play together from separate phones over the internet, or share one device. The static game has no build step.

The opening screen also links to **Catch the Love**, a second mini-game: Hridika sends hearts down from the balcony, and Dibya catches them from below. It supports keyboard and phone touch controls; three missed hearts make Hridika angry.

## Play online from two phones
1. Both players open the same public HTTPS game URL on their phones.
2. Dibya chooses a level and difficulty, taps **Create online room**, and shares the room code or copied invite link.
3. Hridika opens the invite (or enters the code and taps **Join room**).
4. Each phone controls its own character. The host's level and difficulty apply to both players.

PeerJS Cloud brokers the WebRTC connection. Once connected, the browser game state is sent directly between the two devices. It needs an internet connection and a browser that supports WebRTC. Some restrictive networks may block direct peer connections; those networks need a TURN relay.

## Levels
- **Sunset Garden:** warm hills, gentle starter platforms, and a short route.
- **Moon Bazaar:** longer rooftops and more moving moon slimes.
- **Cloud Bridge:** the longest route, with high floating platforms.

Each stage has 12 hearts and its own shared timer and lives. Collect every heart, then bring both characters to the moon gate. Clear a level to continue to the next one; the last level ends with the joint victory screen.

## Difficulty
- **Easy:** 150 seconds and 5 shared lives; slower slimes.
- **Normal:** 110 seconds and 3 shared lives.
- **Hard:** 80 seconds and 2 shared lives; faster slimes.

## Controls
- **Dibya / room host:** left touch pad or A / D + W / Space.
- **Hridika / room guest:** right touch pad or arrow keys + Enter.
- Either player can request pause or restart; the host synchronizes that action.

## Run locally
Open `index.html` in a modern browser, or serve the folder with any static web server (for example, `python3 -m http.server 8000`) and visit `http://localhost:8000`.

## Deploy
Publish the repository as an HTTPS static site. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `feat/catch-my-love-prototype` and `/(root)`. GitHub will show the HTTPS URL on that Settings page. Use that URL on both phones; a local `localhost` preview only works on the device running the server.

## Character art
`assets/dibya.svg` and `assets/hridika.svg` are hand-authored crisp pixel sprite sheets. The opening screen shows a single portrait frame for both characters. The original photos were not present in the connected conversation attachments or project files when these first-pass sprites were prepared, so they follow the written descriptions and can be refined against the photos when the source images are available.


**Riverboat Race** is the third game: Dibya and Hridika race down parallel rivers, paddle for speed, and dodge crocodiles. Race together from two phones with a room code, or play locally on one device. First boat to 1000 m wins.

**Pillow Fight** is a photo-inspired 2D versus mini-game in the shared selector. It has swinging pose art, guard, jump, pillow-hit sounds, comic impact bursts, confetti, two-round matches, phone room codes, and local controls. Dibya wears a red panjabi with white pajama trousers.