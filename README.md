# Catch My Love — Dibya & Hridika

A cooperative two-player pixel-art browser platform game. Play together from separate phones over the internet, or share one device. The static game has no build step.

## Play online from two phones
1. Publish the repository as an HTTPS static site (GitHub Pages instructions below).
2. Both players open the same game URL on their phones.
3. Dibya taps **Create online room** and shares the room code or copied invite link.
4. Hridika opens the invite (or enters the code and taps **Join room**).
5. Dibya controls the left character; Hridika controls the right character. Each phone gets its own touch pad.

PeerJS Cloud brokers the WebRTC connection. Once connected, the browser game state is sent directly between the two devices. It needs an internet connection and a browser that supports WebRTC. Some restrictive networks may block direct peer connections; those networks need a TURN relay.

## Run locally
Open `index.html` in a modern browser, or serve the folder with any static web server (for example, `python3 -m http.server 8000`) and visit `http://localhost:8000`.

## Play on one device
- **Dibya:** A / D to move, W or Space to jump.
- **Hridika:** Left / Right arrows to move, Up or Enter to jump.

## Online controls
- **Dibya / room host:** left touch pad or A / D + W / Space.
- **Hridika / room guest:** right touch pad or arrow keys + Enter.
- Collect all 12 hearts and bring both players to the gate before time runs out. You share three lives. Avoid moon slimes. Either player can ask to pause or restart the shared game.

## Preview / deploy
Enable GitHub Pages in **Settings → Pages**, choose **Deploy from a branch**, select `feat/catch-my-love-prototype` and `/(root)`. GitHub will show the HTTPS URL on that Settings page. Use that URL on both phones; local `localhost` previews are only reachable on the device running the server.

## Character art
`assets/dibya.svg` and `assets/hridika.svg` are hand-authored crisp pixel sprite sheets. Each is arranged as four frames across and four animation rows: idle, run, jump, and celebration. The reference conversation describes Dibya in a red/magenta kurta with glasses and facial hair and Hridika in a purple sari with a bindi and jewellery. The original photos were not present in the connected conversation attachments or project files when these first-pass sprites were prepared, so they follow those written descriptions and should be refined against the photos when the source images are available.
