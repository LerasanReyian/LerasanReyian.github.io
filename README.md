# LerasanReyian.github.io

Personal portfolio of **Reyian Lerasan** — BSIT student at the University of The Immaculate Conception. Built entirely with **HTML5 + CSS3, zero JavaScript**, and deployed on GitHub Pages.

---

## What this repository is

A three-page personal portfolio site showcasing my journey, achievements, coursework, and projects. Everything on the front end is hand-rolled HTML and CSS — the interactive pieces (mobile nav, image carousels, fullscreen photo modals) are driven by CSS selectors (`:checked`, `:target`) with no JavaScript at all.

### Pages

| File | What it shows |
|---|---|
| `index.html` | One-page home — hero intro, achievements overview, course activities, projects & skills. Styled with a purple/magenta gradient theme and "liquid glass" card hovers. |
| `achievements.html` | Detail page — sidebar-layout breakdown of senior high school, 1st year college, and awards. Each row opens a fullscreen photo modal via CSS `:target`. |
| `projects.html` | Detail page — sidebar-layout cards for academic paperworks, phone repair work, and this portfolio itself. Same fullscreen modal pattern. |
| `style.css` | Shared stylesheet for all three pages. Index rules at the top; a scoped `.shell` section at the bottom drives the two detail pages. |
| `Activity/` | Codecademy course activities (Fashion Blog, Wine Festival, Davies Burger) linked from the home page. |

## How to view it

**Live site:** <https://lerasanreyian.github.io>

No build step, no dependencies — plain HTML/CSS served straight from this repo through GitHub Pages.

To run it locally, just open `index.html` in a browser, or serve the folder with any static server (e.g. `npx serve`).

## How it's built

### Layout techniques

- **CSS Grid** — the card grids on `index.html` (`repeat(auto-fit, minmax(280px, 1fr))`), and the two-column sidebar + content shells on the detail pages (`320px 1fr`).
- **Flexbox** — the header pill, hero row, badge/skill chip rows, social icon groups, and modal centering.
- **Media queries** — breakpoints at 991px, 768px (index) and 900px (detail pages) collapse multi-column layouts, swap the pill header for a burger drawer, and adapt aspect ratios on smaller screens.
- **CSS custom properties** — design tokens (`--accent`, `--bg`, `--text`, …) let the whole site re-theme from one block; the detail-page shell overrides them locally.

### No-JavaScript patterns

- **Mobile drawer** — a hidden `<input type="checkbox">` + `<label>` burger toggles a sibling drawer with `#drawer-toggle:checked ~ .sidebar`.
- **Carousels** (index only) — hidden `<input type="radio">` buttons track the active slide; each slide is a `<label>` that advances to the next one.
- **Fullscreen modals** (detail pages) — items link to `#zoom-something`; the matching `.modal` catches `:target`, fades in, and its backdrop/close link to `#_` to dismiss.

### Accessibility

- Semantic tags throughout: `<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<footer>`.
- `:focus-visible` outlines and `@media (prefers-reduced-motion: reduce)` — users who prefer minimal animation get an instant-transition version of the site.
- ARIA labels on nav toggles, modals (`role="dialog"`, `aria-modal="true"`), and icon-only links.

## Editing guide (for me)

- **Add another SHS / college photo:** open `achievements.html`, copy an `<li class="xp-item">` block, give it a unique `id` (e.g. `shs-2`), point its `<a class="xp-link" href="#zoom-YOUR-ID">`, then add a matching `<div class="modal" id="zoom-YOUR-ID">` at the bottom with the new image.
- **Add an award / experience / paperwork / project:** same pattern on `achievements.html` or `projects.html` — a row or card, plus one matching modal.
- **Change the brand color:** edit `--accent` in the `:root` block at the top of `style.css` for index, and in the `.shell` block further down for the detail pages.
- **Swap the profile photo:** replace `system/profile.jpg`.
- **Add a new project / activity card on the home page:** copy a `<article class="card">` block inside the relevant `.card-grid` in `index.html`.

---

© 2026 Reyian Lerasan · HTML5 + CSS3 · Deployed on GitHub Pages
