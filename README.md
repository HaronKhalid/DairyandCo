# Dairy & Co — Storefront

Dairy & Co is a neighborhood dairy storefront based in Tench Bhatta, Rawalpindi. This website is a **100% static, fast, responsive, and SEO-optimized web application** featuring WhatsApp-based ordering, bilingual (English & Urdu) support, and live Google Maps integration.

---

## 🚀 GitHub Pages Deployment

This site is built with pure HTML, CSS, and client-side JavaScript. It requires **no server, no Python, and no Node.js** to deploy or run.

### Quick Setup:
1. Initialize git in this directory and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Dairy & Co storefront"
   ```
2. Link your GitHub repository and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository:
   * Go to **Settings** → **Pages**.
   * Under **Build and deployment**:
     * **Source**: `Deploy from a branch`
     * **Branch**: `main` / `/ (root)`
   * Click **Save**.

---

## 🌐 Custom Domain (`dairyandco.com`)

The repository already includes the required `CNAME` file configured for `dairyandco.com`.

### DNS Configuration:
At your domain registrar (e.g. GoDaddy, Namecheap, Cloudflare, Google Domains), configure the following DNS records:

1. **Apex Domain (`@`) — Add 4 GitHub Pages `A` records:**
   * `185.199.108.153`
   * `185.199.109.153`
   * `185.199.110.153`
   * `185.199.111.153`

2. **Subdomain (`www`) — Add a `CNAME` record:**
   * Host: `www`
   * Target: `<your-username>.github.io`

3. In GitHub repository **Settings** → **Pages**:
   * Verify **Custom domain** displays `dairyandco.com`.
   * Check **Enforce HTTPS** once the SSL certificate has provisioned.

---

## 💻 Local Preview (Optional)

You can preview the site locally anytime without any build step:
* **Option A**: Double-click `index.html` to open directly in any browser.
* **Option B**: Using Python's built-in simple server (no installation required):
  ```bash
  python -m http.server 3000
  ```
  Then open `http://localhost:3000`.

---

## 📁 Repository Structure

```
Dairy & Co/
├── .gitignore            # Ignores OS, IDE, and temporary files
├── .nojekyll             # Tells GitHub Pages to serve static files directly
├── 404.html              # Custom branded 404 error page with auto-redirect
├── CNAME                 # Custom domain file (dairyandco.com)
├── README.md             # Project documentation and setup guide
├── index.html            # Primary storefront page with Google Maps embed
├── privacy.html          # Privacy Policy
├── terms.html            # Terms & Conditions
├── robots.txt            # Search engine crawler instructions
├── sitemap.xml           # XML sitemap for SEO
├── styles.css            # Responsive styles and design tokens
├── js/
│   ├── app.js            # Client-side cart, Urdu/English toggle, & WhatsApp builder
│   └── products.js       # Product catalog, PKR pricing, and business settings
└── assets/
    ├── brand-logo-transparent.png
    ├── brand-logo-white.png
    ├── hero-showcase.jpg
    ├── story-shop.jpg
    ├── product-buffalo-milk.jpg
    ├── product-cow-milk.jpg
    ├── product-fresh-yogurt.jpg
    ├── share-card.svg
    ├── favicon.png
    └── favicon.svg
```

---

## 📝 Updating Store Information

* **Products & Prices**: Edit catalog details, PKR prices, WhatsApp number, and store hours in [`js/products.js`](js/products.js).
* **Text & Urdu Translations**: Edit page copy and bilingual strings in the `translations` object inside [`js/app.js`](js/app.js).
