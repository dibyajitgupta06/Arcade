# Hridika & Dibya’s Arcade

A small browser-game world made for Hridika and Dibya. The home page welcomes both players; **Let’s Start** opens the game picker. Choose a mini-game there to enter it.

## Games
- **Catch My Love** (`catch-my-love.html`) — a cooperative platform adventure with three levels, three difficulty settings, online room codes, phone controls, and one-device play.
- **Love from Above** (`heart-catcher.html`) — catch the hearts before Hridika gets angry.
- **Riverboat Race: Crocodile Dash** (`boat-race.html`) — paddle down the river and dodge crocodiles.
- **Pillow Fight: Dibya vs Hridika** (`pillow-fight.html`) — a 2D pillow fight with online rooms and local controls.

## Play online from two phones
Open the same public HTTPS game URL on both phones. In a game that supports online play, one player creates a room and shares the code or invite link; the other opens the same game and joins. PeerJS Cloud brokers the browser connection. Online play needs WebRTC and an internet connection; some restrictive networks may need a TURN relay.

## Run locally
Open `index.html` in a browser or serve the repository folder with a static server, for example `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Deployment
GitHub Pages publishes the repository root from `feat/catch-my-love-prototype` over HTTPS. Configure **Settings → Pages → Deploy from a branch → feat/catch-my-love-prototype → /(root)**. Open the site on both phones to play online.

The welcome page shows Dibya and Hridika cuddled on a couch with controllers. In the mini-games, Dibya is drawn at his 5 ft 10 in height and Hridika at her 5 ft 5 in height.
