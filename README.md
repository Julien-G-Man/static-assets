# Static Assets Library

This repository is a **centralized, reusable static asset library** designed to serve assets across multiple projects, organizations, and platforms.

It is intentionally **project-agnostic** and functions as a lightweight **public CDN** when deployed.

---

## Purpose

- Provide stable, public URLs for images and icons
- Avoid duplicating the same assets across multiple projects
- Support usage in:
  - Transactional and marketing emails
  - Web applications
  - Landing pages
  - Internal tools

This repository is infrastructure, not a single-project dependency.

---

## How It Works

- All publicly accessible assets live inside the `public/` directory
- Assets inside `public/` are served directly by the hosting platform
- A simple HTML interface at `/` allows humans to browse and copy asset URLs

---

## Directory Structure

static-assets/

├── index.html # Asset browser UI
├── styles.css # UI styles
├── script.js # Optional helper logic
│
├── public/
│ ├── logos/
│ │ ├── enactus/
│ │ └── personal/
│ │
│ ├── icons/
│ │ ├── social/
│ │ └── ui/
│ │
│ └── personal/
│
└── README.md


---

## Public Asset Access

Any file placed inside `public/` is accessible via a direct URL.

Example:

```text
https://staticassets.netlify.app/icons/social/instagram.png

Accessible at https://staticassets.netlify.app