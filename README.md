# Daily Tree

**Watch your life grow in rings.**

A personal forest of your daily entries. Every day you write one thought, one moment worth remembering. Each year becomes a tree. Each entry adds growth. Over time, a living forest forms — a map of your time and thoughts.

**[Open App →](https://zhuxinyao99-jpg.github.io/daily-tree/app/)**
&nbsp;&middot;&nbsp;
**[Live Demo (Landing)](https://zhuxinyao99-jpg.github.io/daily-tree/)**
&nbsp;&middot;&nbsp;
**[GitHub →](https://github.com/zhuxinyao99-jpg/daily-tree)**

---

## What it does

- **One entry per day** — Forces you to find the single most important thing worth remembering
- **Years as trees** — 2025 is a tree. 2024 is a tree. Each tree grows taller with every entry
- **Living forest** — Trees breathe, pulse, and glow when active. They go dormant after 14 days of silence. Archives after 30
- **No social feed** — Your forest is yours. Data lives in LocalStorage, never leaves your device
- **WebGL visualization** — Three.js renders a procedural forest. Hover a tree to see the year and entry count. Click to read that year's entries

---

## How it works

```
Daily Tree/
├── app/
│   ├── index.html      # The app
│   ├── style.css       # All styles
│   ├── app.js          # Core logic + LocalStorage
│   └── webgl/
│       ├── scene.js    # Three.js scene
│       └── tree.js     # Procedural tree generation
└── index.html          # Landing page
```

**Tech stack:** Three.js · WebGL · Vanilla JS · LocalStorage · CSS Animations

No backend. No database. Everything lives in your browser.

---

## Quick start

```bash
# No installation needed — open in browser
open https://zhuxinyao99-jpg.github.io/daily-tree/app/

# Or run locally with any static server
npx serve .
# then open http://localhost:3000/app/
```

---

## Philosophy

Most journaling apps are about writing. This one is about **remembering**.

The constraint is intentional: one entry, one moment, per day. It forces distillation — finding the single thing that mattered most. Over years, a forest accumulates that tells a different kind of story than a diary ever could.

The trees are not decorative. They are **visual memory**. The height of a tree encodes how present you were. The state of the canopy (living, dormant, archived) tells you at a glance which years you were most engaged.

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `Ctrl+N` / `Cmd+N` | New entry |
| `Ctrl+Enter` / `Cmd+Enter` | Submit entry |
| `Esc` | Close modal |

---

## License

MIT · [View on GitHub](https://github.com/zhuxinyao99-jpg/daily-tree)
