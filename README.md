# Romantic Birthday Website ❤️

A cinematic, emotional, luxury birthday experience built with pure HTML, CSS, and JavaScript. No backend, no frameworks. Just open `index.html` (or run the dev server).

## How to personalize

**Everything is editable in `js/script.js` at the top `CONFIG` object:**

| Field | What it does |
|-------|--------------|
| `letterText` | The love letter shown with typewriter animation |
| `letterSign` | Signature under the letter |
| `photos` | Array of `{ src, caption }` — add unlimited photos |
| `timeline` | Array of `{ date, title, text }` — memory timeline |
| `reasons` | Array of 12 (or more) reasons |
| `notes` | Love notes inside floating bottles |
| `wishes` | Sticky notes on the wish wall |
| `finalSignature` | Final signature text |
| `secretMessage` | Shown after clicking 5 floating hearts |
| `musicUrl` | Path to background music |
| `heartRainMusicUrl` | Optional music change in heart-rain section |

## Adding your own assets

- **Photos:** Drop images in `assets/photos/` and reference them as `/assets/photos/your.jpg` in `CONFIG.photos`. Or use any URL.
- **Music:** Add a track to `assets/music/song.mp3` (already the default path), or set `CONFIG.musicUrl` to any URL.
- **Fonts:** Add custom fonts to `assets/fonts/` and update `@font-face` in `css/style.css`.
- **Lottie animations:** Add JSON to `assets/animations/` and load with lottie-web if desired.

## Run

```bash
npm install
npm run dev      # development
npm run build    # production build → dist/
npm run preview  # preview production build
```

Or simply open `index.html` in a browser (CDN libs require internet).

## Features

13 story sections, glassmorphism, aurora gradient, floating particles, GSAP + Lenis smooth scroll, canvas confetti, microphone candle blowing, custom cursor, ripple clicks, easter eggs (teddy, moon, secret heart message), parallax, custom scrollbar, fully responsive.

## Notes

- Microphone permission is requested only in the cake section.
- All animations respect `prefers-reduced-motion`.
- No data is sent anywhere — everything runs locally in the browser.
