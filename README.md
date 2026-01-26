# Static Assets Repository

This repository serves as a **centralized, reusable static asset store** for use across multiple projects, organizations, and platforms.

It is intentionally **not tied to any single project**. The goal is to avoid duplication, ensure consistency, and provide stable public URLs for assets used in web apps, emails, documents, and other digital products.

---

## Purpose

- Centralize commonly used assets (icons, logos, UI elements)
- Provide stable, CDN-hosted URLs for production use
- Avoid re-uploading the same assets across different projects
- Support usage in **emails**, **web applications**, and **landing pages**

This repository functions as a lightweight **asset CDN** when deployed on platforms like **Vercel** or **Netlify**.

---

## Directory Structure

The repository is organized by **asset type**, not by project.

static-assets/

├── logos/
│ ├── enactus/
│
├── icons/
│ ├── social/
│ └── ui/
│
├── email/
│ └── buttons/
│
├── personal/
└── README.md


### Folder Intent

#### `logos/`
Brand or identity-related assets.
- Logos are namespaced by organization or owner
- Used in emails, websites, and documents

#### `icons/social/`
Reusable social media icons.
- Platform-specific icons (Instagram, LinkedIn, Facebook, X, TikTok, etc.)
- Icons may use official brand colors or neutral variants depending on context

#### `icons/ui/`
Generic UI icons used across applications.
- Examples: arrows, checkmarks, indicators

#### `email/`
Assets specifically optimized for **email clients**.
- Buttons and images tested for Gmail, Outlook, and mobile clients
- Simple formats (PNG/JPG), lightweight, no SVGs

---

## Asset Guidelines

To ensure compatibility and longevity:

- **Formats:** PNG or JPG only  
- **No SVGs** for email usage  
- **Public access required** (no auth-gated hosting)
- **Optimized file sizes**
- Explicit dimensions where possible

Icons may exist in:
- Official brand colors (for web)
- Neutral or monochrome variants (recommended for email)

---

## Hosting & Usage

This repository is intended to be deployed as a **static site**.

Typical deployment:
- Vercel
- Netlify

Example usage after deployment:

```html
<img src="https://static-assets.vercel.app/icons/social/instagram.png" />
