# SPEED RUSH company site (speedrusheg.com)

Static company website for SPEED RUSH LLC, in Arabic (`ar/`, RTL) and English (`en/`, LTR). Plain HTML and CSS plus one small local script (`assets/motion.js`) for animations. No build step, no external requests.

## Structure

```
index.html            redirects to ar/index.html, with links to both languages
ar/  en/              index, products, contact, privacy, terms
assets/style.css      shared styles (logical properties, one file for RTL and LTR)
assets/motion.js      scroll reveals and header state; the site still works without it
CNAME                 custom domain for GitHub Pages
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 5310 --directory .
```

## Hosting

Served by GitHub Pages from the `main` branch root, on the custom domain `speedrusheg.com`. DNS is managed at Hostinger.
