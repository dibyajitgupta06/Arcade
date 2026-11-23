# Catch My Love — Dibya & Hridika

A cooperative two-player pixel-art browser platform game. No build step or dependencies are required.

## Run locally
Open `index.html` in a modern browser, or serve this folder with any static web server (for example, `python3 -m http.server 8000`) and visit `http://localhost:8000`.

## Play
- **Dibya:** A / D to move, W or Space to jump.
- **Hridika:** Left / Right arrows to move, Up or Enter to jump.
- **Mobile:** two separate on-screen touch pads.
- Collect all 12 hearts and bring both players to the gate before time runs out. Share three lives, avoid moon slimes, pause with P, or restart from the game bar.

## Character art
`assets/dibya.svg` and `assets/hridika.svg` are hand-authored crisp pixel sprite sheets. Each is arranged as four frames across and four animation rows: idle, run, jump, and celebration. The browser prototype animates idle, run, and jump. The reference conversation describes Dibya in a red/magenta kurta with glasses and facial hair and Hridika in a purple sari with a bindi and jewellery. The original photos were not present in the connected conversation attachments or project files when this prototype was prepared, so these first-pass sprites use those written descriptions. Replacing/refining them against the photos is straightforward when the source images are available.

## Preview / deploy
This is a static site. Enable GitHub Pages for the feature branch (Settings → Pages → Deploy from a branch, select `feat/catch-my-love-prototype` and `/ (root)`) to get a shareable browser URL. Alternatively, import the repository into Netlify or Vercel with no build command and the repository root as the publish directory.
