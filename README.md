# SPEED RUSH company site (speedrusheg.com)

Static company website for SPEED RUSH LLC, in Arabic (site root, RTL) and English (`en/`, LTR). Plain HTML and CSS plus one small local script (`assets/motion.js`) for animations. No build step, no external requests.

## Structure

```
index.html products.html contact.html privacy.html terms.html   Arabic pages (served at /, /products, ...)
en/                   English pages (served at /en/, /en/products, ...)
ar/                   redirects from the old /ar/ URLs to the root pages
assets/style.css      shared styles (logical properties, one file for RTL and LTR)
assets/motion.js      scroll reveals and header state; the site still works without it
CNAME                 custom domain for GitHub Pages
```

## Run locally

Links use clean, root-relative URLs (`/`, `/products`, `/en/products`), which GitHub Pages resolves to the `.html` files. Opening the files straight from disk will not follow them; serve the folder with a server that maps extensionless paths to `.html`, for example:

```
npx serve .
```

## Hosting

Served by GitHub Pages from the `main` branch root, on the custom domain `speedrusheg.com`. DNS is managed at Hostinger.
