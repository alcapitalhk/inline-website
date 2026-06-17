# Inline Group Limited — Website

A single-page marketing website for Inline Group Limited, built from the company
introduction deck. Design is inspired by firmus.co: minimal, large grotesque
typography, generous whitespace, and smooth scroll-reveal animations — themed in the
brand's gold (#D1A683) and navy (#1A2C56) from the Inline logo.

Trilingual: English / 简体中文 / 繁體中文 via the EN · 简 · 繁 switcher in the nav
(remembers your choice in localStorage).

## Structure
```
inline-website/
├── index.html        # Page content (text marked with data-i18n keys)
├── css/styles.css    # Theme + layout (brand gold + navy)
├── js/i18n.js        # All copy in EN / Simplified / Traditional Chinese
├── js/main.js        # Language switch, scroll reveals, counters, nav, menu
├── images/           # Logo, cargo/logistics photos, industry shots
└── README.md
```

## Editing copy
Each translatable element has `data-i18n="key"`; the text for every language lives in
`js/i18n.js`. Edit all three languages there. Colours are CSS variables at the top of
`css/styles.css` (`--accent` = gold, `--bg` = navy).

## View locally
Just open `index.html` in any browser (double-click it). No build step required.
Fonts load from Google Fonts, so an internet connection gives the intended look.

## Sections
Hero · Who We Are · What We Do · Industries · Clients · Sourcing Strength ·
Why Partner With Us · Contact / Let's Build Together · Footer

## Edit content
All copy lives in `index.html`. Colours and spacing are CSS variables at the top
of `css/styles.css` (`--accent` is the teal highlight; change it to rebrand).

## Deploy
Drag the folder onto Netlify, push to GitHub Pages, or upload to any static host —
it's plain HTML/CSS/JS with no dependencies.

## Notes
- Contact details from the deck: admin@inline.com.hk · +852 2663 0105
- Placeholders you may want to replace later: real client logos, product photography,
  and an "About"/team section if desired.
