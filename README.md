# Cyberflix Website

A Netflix-inspired streaming interface built as a frontend-only website prototype for the Cyberflix MVP.

## What this website does

- Shows a cinematic landing screen with hero banner and branding
- Displays trending, top picks, and catalogue sections
- Lets users search titles and filter by genre
- Includes movie detail modal with synopsis and metadata
- Supports a personal watchlist experience with add/remove interactions
- Includes a simple sign in/sign up modal for app flow mockups
- Uses a polished dark streaming UI inspired by modern OTT platforms

## Project structure

- `index.html` — main page structure and modals
- `assets/css/styles.css` — Netflix-inspired styling and responsive layout
- `assets/js/app.js` — movie data, catalogue rendering, filters, modal logic, auth interactions
- `README.md` — repo overview and feature summary

## Design direction

The interface is designed to feel like a lightweight streaming platform: dark full-bleed hero sections, soft overlays, bold typography, rounded poster cards, and clean category-driven browsing. The visual language aims to feel premium and familiar without depending on a backend or heavy framework.

## Suggested next upgrades

- Add dedicated HTML pages for Home, Catalogue, Movie, Login, and My List
- Swap the mocked remote images for local assets or production media
- Connect the frontend to a Flask API or backend for real data
- Add autoplay trailers and carousel interactions
- Support user accounts and persistent watchlists with localStorage or API storage

## Run locally

Open `index.html` directly in a browser, or serve it locally with a lightweight static server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## App review

This website gives Cyberflix a strong product identity for a streaming MVP. It communicates the concept clearly: discovery, curation, and personal watchlists. It is a great front-end foundation for a future SaaS-style streaming app and can easily evolve into a full-stack product with real user authentication, movie management, and playback.
