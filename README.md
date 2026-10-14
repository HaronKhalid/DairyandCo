# Dairy & Co — Fresh Milk & Yogurt Storefront

> **Freshness You Can Trust** — Your local neighborhood dairy storefront in Tench Bhatta, Rawalpindi.

[![Website](https://img.shields.io/badge/Website-dairyandco.com-013090?style=flat-square&logo=google-chrome&logoColor=white)](https://dairyandco.com)
[![Hosting](https://img.shields.io/badge/Hosting-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)](https://haronkhalid.github.io/DairyandCo/)
[![Tech](https://img.shields.io/badge/Stack-HTML5_|_Vanilla_CSS_|_JavaScript-F05032?style=flat-square)](https://dairyandco.com)
[![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)]()

---

## 📖 Overview

**Dairy & Co** is a fast, responsive, and privacy-focused digital storefront built for a local dairy business in Tench Bhatta, Rawalpindi. 

The site is designed for immediate client engagement through direct **WhatsApp order composition**, live **Google Maps location**, and dynamic **Pakistan Standard Time opening hours**, all without requiring expensive servers, databases, or third-party checkout commissions.

---

## ✨ Features

- **🥛 Fresh Product Catalog**: Clear PKR pricing and size selection for:
  - **Buffalo Milk** (*بھینس کا دودھ*) — Rs. 240 / liter · Rs. 120 / half-liter
  - **Cow Milk** (*گائے کا دودھ*) — Rs. 220 / liter · Rs. 110 / half-liter
  - **Fresh Yogurt** (*تازہ دہی*) — Rs. 260 / kg · Rs. 130 / half-kg
- **💬 Direct WhatsApp Ordering**: Generates clean, prefilled WhatsApp order requests with selected quantities, price estimates, customer name, and delivery address.
- **🌐 Bilingual Support (English & Urdu)**: Instant language switcher with right-to-left (RTL) layout and authentic *Noto Nastaliq Urdu* typography.
- **📍 Live Interactive Google Map**: Embedded Google Map showcasing **Dairy&Co Milk Shop** in Raja Market (Merhbhan Market), Tench Bhatta with one-tap directions ([Google Maps Link](https://maps.app.goo.gl/4SAoBDi3jdb2F4UU9)).
- **🕒 Dynamic Business Hours**: Daily morning and evening schedule with automatic current-day highlighting (Pakistan Standard Time / Asia:Karachi).
- **🛒 Client-Side Basket**: Lightweight `localStorage` cart with real-time item counter and total calculations.
- **⚡ 100% Static & Lightweight**: Zero frameworks, zero build steps, and instant load times.
- **📱 Fully Responsive**: Tailored fluid typography and touch-optimized UI for mobile, tablet, and desktop devices.
- **🔒 Privacy First**: No server tracking, no cookies, no personal data stored remotely.

---

## 📁 Repository Structure

```
DairyandCo/
├── .gitignore            # Git exclusion rules (OS, IDE, temporary files)
├── .nojekyll             # Ensures GitHub Pages serves static files directly
├── 404.html              # Custom branded 404 page with clean URL redirect
├── CNAME                 # Custom domain configuration (dairyandco.com)
├── README.md             # Project documentation
├── index.html            # Main landing page with live Google Maps embed
├── privacy.html          # Starter Privacy Policy
├── terms.html            # Starter Terms & Conditions
├── robots.txt            # Search engine crawling rules
├── sitemap.xml           # XML sitemap for search engines
├── styles.css            # Custom responsive styles & typography design tokens
├── js/
│   ├── app.js            # Basket management, language switcher, WhatsApp message builder
│   └── products.js       # Product catalog, PKR pricing, store hours & Google Maps URL
└── assets/
    ├── brand-logo-transparent.png  # Brand logo (transparent background)
    ├── brand-logo-white.png        # Brand logo (footer light variant)
    ├── hero-showcase.jpg           # Hero section showcase photo
    ├── story-shop.jpg              # Shop atmosphere photo
    ├── product-buffalo-milk.jpg    # Buffalo milk showcase photo
    ├── product-cow-milk.jpg        # Cow milk showcase photo
    ├── product-fresh-yogurt.jpg    # Fresh yogurt showcase photo
    ├── share-card.svg              # Social share card (Open Graph)
    ├── favicon.png                 # Browser favicon (PNG)
    └── favicon.svg                 # Browser favicon (SVG)
```

---

## 🛠️ Configuration & Customization

All business data and prices can be customized directly without touching HTML templates:

| Setting | Location | Description |
| :--- | :--- | :--- |
| **Products & Prices** | [`js/products.js`](js/products.js) | Edit variants, PKR rates, names, and descriptions |
| **Opening Hours** | [`js/products.js`](js/products.js) | Configure session timings for each day of the week |
| **Phone & WhatsApp** | [`js/products.js`](js/products.js) | Update WhatsApp contact number |
| **Google Maps Link** | [`js/products.js`](js/products.js) | Update directions link and shop location |
| **Urdu / English Copy** | [`js/app.js`](js/app.js) | Modify translations in the `translations` object |

---

## 💻 Local Preview

You can run and test the website locally in two ways:

1. **Directly**: Double-click `index.html` to open it in any web browser.
2. **Local HTTP Server** (Python built-in):
   ```bash
   python -m http.server 3000
   ```
   Open `http://localhost:3000` in your browser.

---

## 📍 Store & Contact Details

- **Store**: Dairy & Co Milk Shop
- **Location**: Raja Market (Merhbhan Market), Tench Bhatta, Rawalpindi, Pakistan
- **Phone / WhatsApp**: [+92 319 9446974](https://wa.me/923199446974)
- **Website**: [dairyandco.com](https://dairyandco.com)
- **Directions**: [Google Maps](https://maps.app.goo.gl/4SAoBDi3jdb2F4UU9)

---

## 📄 License & Rights

© 2026 Dairy & Co. All rights reserved.
