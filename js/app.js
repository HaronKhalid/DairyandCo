(() => {
  "use strict";
  const config = window.DAIRY_CONFIG;
  if (!config) return;

  const translations = {
    en: {
      skip:"Skip to content", announcement:"Your neighbourhood dairy in Tench Bhatta, Rawalpindi", brandSub:"FRESHNESS YOU CAN TRUST", navLabel:"Main navigation", navProducts:"Our Products", navStory:"Our Story", navHours:"Opening Hours", navContact:"Contact", languageLabel:"Choose language", openCart:"Open order basket", basket:"Basket", heroEyebrow:"YOUR LOCAL DAIRY · RAWALPINDI", heroTitle:"Fresh Milk & Yogurt, Every Day.", heroBody:"Discover Dairy & Co — your local destination for fresh milk and delicious yogurt in Tench Bhatta, Rawalpindi.", orderWhatsApp:"Order on WhatsApp", exploreProducts:"Explore our products", trust1:"Fresh dairy products", trust2:"Convenient local delivery", trust3:"Customer-focused service", heroPlaceholderAlt:"Illustrated, replaceable Dairy & Co hero image placeholder", artCaption:"A little freshness for every day", replaceHero:"Replace with your Dairy & Co photo", promiseOne:"Freshness You Can Trust.", promiseTwo:"Made for everyday moments.", catalogEyebrow:"THE DAILY ESSENTIALS", productsTitle:"Our Fresh Dairy Selection", productsAside:"Simple favourites for the table, with clear prices and easy WhatsApp ordering.", priceNote:"Prices are subject to change. Please confirm current prices when ordering.", deliveryEyebrow:"FROM OUR SHOP TO YOUR HOME", deliveryTitle:"Fresh Dairy, Delivered to Your Door", deliveryBody:"Enjoy the convenience of ordering dairy products from Dairy & Co. Contact us on WhatsApp to check delivery availability in your area.", deliveryFine:"Please confirm your delivery area and any charges before ordering.", checkDelivery:"Check delivery", storyPlaceholderAlt:"Replaceable photo placeholder for Dairy & Co shop and products", storyArtLabel:"A place for your shop & dairy photos", storyArtReplace:"Replace with an approved brand image", storyEyebrow:"ROOTED IN TENCH BHATTA", storyTitle:"Your Local Dairy Brand", storyBody:"Dairy & Co is a local dairy brand based in Tench Bhatta, Rawalpindi, offering buffalo milk, cow milk, and yogurt for everyday needs. We aim to make ordering dairy products simple and convenient for our customers through friendly service, clear pricing, and convenient local delivery.", talkToUs:"Talk to our team", storySignoff:"Your neighbourhood dairy, close at hand.", hoursEyebrow:"COME BY WHEN IT SUITS", hoursTitle:"Our Opening Hours", hoursIntro:"Open in two daily sessions. We pause for an afternoon break.", hoursCaption:"Dairy & Co shop opening hours in Pakistan Standard Time", todayNote:"Today’s hours · Pakistan Standard Time", locationEyebrow:"COME SAY ASSALAM-O-ALAIKUM", locationTitle:"Find your local dairy", getDirections:"Get directions", socialEyebrow:"A LITTLE MORE DAIRY & CO", socialTitle:"Follow Dairy & Co", socialBody:"Find us on your favourite social channels. We look forward to seeing you there.", reviewEyebrow:"A NOTE FROM OUR NEIGHBOURS", reviewTitle:"What Our Customers Say", reviewBody:"Have you ordered from Dairy & Co? Contact us and share your feedback.", shareFeedback:"Share feedback", faqEyebrow:"HERE TO MAKE IT EASY", faqTitle:"A few good questions", faqAside:"Everything you need to know before placing your order.", faqQ1:"What products are available at Dairy & Co?", faqA1:"Buffalo milk, cow milk, and yogurt.", faqQ2:"How can I place an order?", faqA2:"Contact us through WhatsApp to confirm your products and order details.", faqQ3:"Do you offer home delivery?", faqA3:"Contact us to confirm delivery availability in your area.", faqQ4:"What are your opening hours?", faqA4:"We are open daily in two sessions, with different morning hours on Friday. See the Opening Hours section for the full schedule.", faqQ5:"Where is Dairy & Co located?", faqA5:"Raja Market (Merhbhan Market), Tench Bhatta, Rawalpindi, Pakistan.", faqQ6:"How can I confirm product prices?", faqA6:"View the listed prices on our website or contact us on WhatsApp for confirmation.", contactEyebrow:"WE’RE JUST A MESSAGE AWAY", contactTitle:"Get in Touch", contactBody:"Questions about today’s selection or local delivery? Send us a note on WhatsApp and we’ll help you confirm.", contactAddressLabel:"FIND THE SHOP", contactPhoneLabel:"CALL OR WHATSAPP", contactWebsiteLabel:"ONLINE", chatWhatsApp:"Chat on WhatsApp", callNow:"Call now", formTitle:"Send us a message", formIntro:"We’ll open WhatsApp with your note ready to send.", nameLabel:"Your name", namePlaceholder:"e.g. Ayesha Khan", phoneLabel:"Phone number", phonePlaceholder:"Your WhatsApp number", messageLabel:"Message", messagePlaceholder:"How can we help?", sendWhatsApp:"Continue to WhatsApp", formNote:"Your message is sent only when you choose to send it in WhatsApp.", footerBlurb:"Your local source for milk and yogurt in Tench Bhatta, Rawalpindi.", footerExplore:"EXPLORE", footerVisit:"VISIT & CONTACT", footerFollow:"FOLLOW ALONG", copyright:"All rights reserved.", privacyLink:"Privacy Policy", termsLink:"Terms & Conditions", backTop:"Back to top ↑", floatingWhatsApp:"Chat with Dairy & Co on WhatsApp", chatLabel:"Chat with us", basketEyebrow:"YOUR SELECTION", closeBasket:"Close basket", emptyBasket:"Your basket is waiting for a little something.", browseProducts:"Browse products", estimate:"Estimated total", cartDisclaimer:"Estimate excludes any delivery charges. Please confirm availability, your area and charges with Dairy & Co.", addressLabel:"Delivery address", addressPlaceholder:"Your address in Rawalpindi", sendOrder:"Send order request on WhatsApp", orderPending:"Your request is not confirmed until Dairy & Co accepts it. No online payment is taken on this website.", addBasket:"Add to basket", quickOrder:"Order on WhatsApp", productPlaceholder:"PACKAGING PHOTO PLACEHOLDER", remove:"Remove", subtotal:"Estimated total", morningBreak:"Afternoon break", nowOpen:"Open now", nowClosed:"Closed now", requiredMessage:"Please add at least one item to your basket.", priceCaption:"Price per selected unit", orderPrompt:"Please confirm product availability, delivery area and charges.", newTabNote:"Opens in a new tab"
    },
    ur: {
      skip:"مواد پر جائیں", announcement:"ٹینچ بھاٹہ، راولپنڈی میں آپ کی مقامی ڈیری", brandSub:"تازگی جس پر آپ بھروسا کریں", navLabel:"مرکزی نیویگیشن", navProducts:"ہماری مصنوعات", navStory:"ہمارا تعارف", navHours:"اوقاتِ کار", navContact:"رابطہ", languageLabel:"زبان منتخب کریں", openCart:"آرڈر کی ٹوکری کھولیں", basket:"ٹوکری", heroEyebrow:"آپ کی مقامی ڈیری · راولپنڈی", heroTitle:"تازہ دودھ اور دہی، ہر روز۔", heroBody:"ڈیری اینڈ کو دریافت کریں — ٹینچ بھاٹہ، راولپنڈی میں تازہ دودھ اور مزیدار دہی کے لیے آپ کی مقامی جگہ۔", orderWhatsApp:"واٹس ایپ پر آرڈر کریں", exploreProducts:"ہماری مصنوعات دیکھیں", trust1:"تازہ ڈیری مصنوعات", trust2:"آسان مقامی ڈیلیوری", trust3:"خوشگوار خدمت", heroPlaceholderAlt:"ڈیری اینڈ کو کی تبدیل کی جا سکنے والی مرکزی تصویر کا خاکہ", artCaption:"ہر دن کے لیے تھوڑی سی تازگی", replaceHero:"اپنی ڈیری اینڈ کو تصویر یہاں لگائیں", promiseOne:"تازگی جس پر آپ بھروسا کریں۔", promiseTwo:"ہر روز کے اچھے لمحوں کے لیے۔", catalogEyebrow:"روزمرہ کی ضروریات", productsTitle:"ہماری تازہ ڈیری مصنوعات", productsAside:"روزانہ کے پسندیدہ انتخاب، واضح قیمتوں اور آسان واٹس ایپ آرڈر کے ساتھ۔", priceNote:"قیمتیں تبدیل ہو سکتی ہیں۔ آرڈر سے پہلے موجودہ قیمت کی تصدیق کریں۔", deliveryEyebrow:"ہماری دکان سے آپ کے گھر تک", deliveryTitle:"تازہ ڈیری، آپ کے دروازے تک", deliveryBody:"ڈیری اینڈ کو سے دودھ اور دہی منگوانے کی سہولت حاصل کریں۔ اپنے علاقے میں ڈیلیوری کی دستیابی معلوم کرنے کے لیے واٹس ایپ پر رابطہ کریں۔", deliveryFine:"آرڈر سے پہلے اپنے علاقے اور کسی بھی ڈیلیوری چارج کی تصدیق کریں۔", checkDelivery:"ڈیلیوری معلوم کریں", storyPlaceholderAlt:"ڈیری اینڈ کو کی دکان اور مصنوعات کی تبدیل کی جا سکنے والی تصویر کا خانہ", storyArtLabel:"دکان اور ڈیری کی تصاویر کے لیے جگہ", storyArtReplace:"منظور شدہ برانڈ تصویر یہاں لگائیں", storyEyebrow:"ٹینچ بھاٹہ سے وابستہ", storyTitle:"آپ کی مقامی ڈیری", storyBody:"ڈیری اینڈ کو ٹینچ بھاٹہ، راولپنڈی کا ایک مقامی ڈیری برانڈ ہے، جو روزمرہ ضرورت کے لیے بھینس کا دودھ، گائے کا دودھ اور دہی پیش کرتا ہے۔ ہم دوستانہ خدمت، واضح قیمتوں اور آسان مقامی ڈیلیوری کے ذریعے ڈیری مصنوعات کا آرڈر آسان بنانے کی کوشش کرتے ہیں۔", talkToUs:"ہماری ٹیم سے بات کریں", storySignoff:"آپ کی محلے کی ڈیری، آپ کے قریب۔", hoursEyebrow:"اپنی سہولت سے تشریف لائیں", hoursTitle:"ہمارے اوقاتِ کار", hoursIntro:"روزانہ دو اوقات میں کھلے ہیں۔ دوپہر میں وقفہ ہوتا ہے۔", hoursCaption:"پاکستانی معیاری وقت کے مطابق ڈیری اینڈ کو کے اوقاتِ کار", todayNote:"آج کے اوقات · پاکستانی معیاری وقت", locationEyebrow:"سلام کہنے ضرور آئیں", locationTitle:"اپنی مقامی ڈیری تلاش کریں", getDirections:"راستہ دیکھیں", socialEyebrow:"ڈیری اینڈ کو کے ساتھ مزید", socialTitle:"ڈیری اینڈ کو کو فالو کریں", socialBody:"اپنے پسندیدہ سوشل میڈیا پر ہمیں تلاش کریں۔ آپ سے وہاں مل کر خوشی ہوگی۔", reviewEyebrow:"ہمارے پڑوسیوں کی رائے", reviewTitle:"ہمارے گاہک کیا کہتے ہیں", reviewBody:"کیا آپ نے ڈیری اینڈ کو سے آرڈر کیا ہے؟ ہم سے رابطہ کریں اور اپنی رائے دیں۔", shareFeedback:"اپنی رائے دیں", faqEyebrow:"آپ کی آسانی کے لیے", faqTitle:"اکثر پوچھے جانے والے سوالات", faqAside:"آرڈر سے پہلے جاننے کے لیے ضروری معلومات۔", faqQ1:"ڈیری اینڈ کو میں کون سی مصنوعات دستیاب ہیں؟", faqA1:"بھینس کا دودھ، گائے کا دودھ اور دہی۔", faqQ2:"میں آرڈر کیسے دے سکتا ہوں؟", faqA2:"مصنوعات اور آرڈر کی تفصیل کی تصدیق کے لیے واٹس ایپ پر رابطہ کریں۔", faqQ3:"کیا گھر پر ڈیلیوری دستیاب ہے؟", faqA3:"اپنے علاقے میں ڈیلیوری کی دستیابی معلوم کرنے کے لیے رابطہ کریں۔", faqQ4:"دکان کے اوقاتِ کار کیا ہیں؟", faqA4:"ہم روزانہ دو اوقات میں کھلے ہیں، جبکہ جمعہ کی صبح کے اوقات مختلف ہیں۔ مکمل شیڈول اوقاتِ کار والے حصے میں دیکھیں۔", faqQ5:"ڈیری اینڈ کو کہاں واقع ہے؟", faqA5:"راجہ مارکیٹ (مہربان مارکیٹ)، ٹینچ بھاٹہ، راولپنڈی، پاکستان۔", faqQ6:"مصنوعات کی قیمت کی تصدیق کیسے کروں؟", faqA6:"ویب سائٹ پر درج قیمت دیکھیں یا واٹس ایپ پر تصدیق کے لیے رابطہ کریں۔", contactEyebrow:"ہم سے رابطہ کرنا آسان ہے", contactTitle:"رابطہ کریں", contactBody:"آج کی مصنوعات یا مقامی ڈیلیوری کے بارے میں سوال ہے؟ واٹس ایپ پر پیغام بھیجیں، ہم معلومات کی تصدیق میں مدد کریں گے۔", contactAddressLabel:"دکان کا پتا", contactPhoneLabel:"کال یا واٹس ایپ", contactWebsiteLabel:"ویب سائٹ", chatWhatsApp:"واٹس ایپ پر بات کریں", callNow:"ابھی کال کریں", formTitle:"ہمیں پیغام بھیجیں", formIntro:"آپ کا پیغام واٹس ایپ میں تیار کھل جائے گا۔", nameLabel:"آپ کا نام", namePlaceholder:"مثلاً عائشہ خان", phoneLabel:"فون نمبر", phonePlaceholder:"آپ کا واٹس ایپ نمبر", messageLabel:"پیغام", messagePlaceholder:"ہم آپ کی کیا مدد کر سکتے ہیں؟", sendWhatsApp:"واٹس ایپ پر جائیں", formNote:"پیغام صرف اسی وقت بھیجا جائے گا جب آپ واٹس ایپ میں بھیجنے کا انتخاب کریں گے۔", footerBlurb:"ٹینچ بھاٹہ، راولپنڈی میں دودھ اور دہی کے لیے آپ کی مقامی دکان۔", footerExplore:"دیکھیں", footerVisit:"پتا اور رابطہ", footerFollow:"سوشل میڈیا", copyright:"تمام حقوق محفوظ ہیں۔", privacyLink:"رازداری کی پالیسی", termsLink:"شرائط و ضوابط", backTop:"اوپر جائیں ↑", floatingWhatsApp:"ڈیری اینڈ کو سے واٹس ایپ پر بات کریں", chatLabel:"ہمیں پیغام دیں", basketEyebrow:"آپ کا انتخاب", closeBasket:"ٹوکری بند کریں", emptyBasket:"آپ کی ٹوکری میں ابھی کچھ نہیں ہے۔", browseProducts:"مصنوعات دیکھیں", estimate:"تخمینی کل رقم", cartDisclaimer:"تخمینے میں ڈیلیوری چارج شامل نہیں۔ دستیابی، علاقے اور چارج کی تصدیق ڈیری اینڈ کو سے کریں۔", addressLabel:"ڈیلیوری کا پتا", addressPlaceholder:"راولپنڈی میں اپنا پتا لکھیں", sendOrder:"آرڈر کی درخواست واٹس ایپ پر بھیجیں", orderPending:"آپ کی درخواست ڈیری اینڈ کو کی منظوری تک کنفرم نہیں ہوتی۔ اس ویب سائٹ پر آن لائن ادائیگی نہیں ہوتی۔", addBasket:"ٹوکری میں ڈالیں", quickOrder:"واٹس ایپ آرڈر", productPlaceholder:"پیکجنگ تصویر کا عارضی خانہ", remove:"ہٹائیں", subtotal:"تخمینی کل رقم", morningBreak:"دوپہر کا وقفہ", nowOpen:"ابھی کھلا ہے", nowClosed:"ابھی بند ہے", requiredMessage:"براہِ کرم پہلے ٹوکری میں کوئی چیز شامل کریں۔", priceCaption:"منتخب یونٹ کی قیمت", orderPrompt:"براہِ کرم مصنوعات کی دستیابی، ڈیلیوری کے علاقے اور چارج کی تصدیق کریں۔", newTabNote:"نئے ٹیب میں کھلے گا"
    }
  };

  const state = { language: "en", cart: readCart() };
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayNamesUr = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
  const weekOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dialog = document.querySelector("[data-cart-dialog]");
  const cartItems = document.querySelector("[data-cart-items]");
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const cartCheckout = document.querySelector("[data-cart-checkout]");
  const liveRegion = document.querySelector("[data-live-region]");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }
  function readCart() {
    try {
      const saved = JSON.parse(localStorage.getItem("dairy-co-cart-v1") || "{}");
      return saved && typeof saved === "object" ? saved : {};
    } catch { return {}; }
  }
  function persistCart() {
    try { localStorage.setItem("dairy-co-cart-v1", JSON.stringify(state.cart)); } catch { /* Storage may be disabled; basket still works for this page. */ }
  }
  function money(value) { return `Rs. ${Number(value).toLocaleString("en-PK")}`; }
  function getProduct(id) { return config.products.find((product) => product.id === id); }
  function getVariant(productId, variantId) { return getProduct(productId)?.variants.find((variant) => variant.id === variantId); }
  function preferredName(product) { return state.language === "ur" ? product.nameUr : product.name; }
  function preferredVariant(variant) { return state.language === "ur" ? variant.labelUr : variant.label; }
  function preferredUnit(unit) {
    if (state.language !== "ur") return unit;
    return ({ "liter": "لیٹر", "half liter": "آدھا لیٹر", "kilogram": "کلوگرام", "half kilogram": "آدھا کلوگرام" })[unit] || unit;
  }
  function productArt(kind) {
    if (kind.includes("yogurt")) return `<div class="product-visual"><span class="cow-mark" aria-hidden="true">✳</span><div class="yogurt-package" aria-hidden="true"></div><span class="milk-drop-shape" aria-hidden="true">◌</span></div>`;
    return `<div class="product-visual"><span class="cow-mark" aria-hidden="true">${kind.includes("cow") ? "✧" : "✳"}</span><div class="bottle product-bottle" aria-hidden="true"><span class="bottle-cap"></span><span class="bottle-neck"></span><span class="bottle-body"><span class="bottle-label"><b>D&amp;Co</b><small>${kind.includes("cow") ? "COW MILK" : "MILK"}</small></span></span></div><span class="milk-drop-shape" aria-hidden="true">◌</span></div>`;
  }
  function productMedia(product) {
    const badgeText = state.language === "ur" ? (product.badgeUr || "خالص تازگی") : (product.badge || "Fresh Daily");
    if (product.image) {
      return `<div class="product-media"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(preferredName(product))}" class="product-photo" loading="lazy"><span class="product-badge"><span aria-hidden="true">✦</span>${escapeHtml(badgeText)}</span></div>`;
    }
    return `<div class="product-media" role="img" aria-label="${escapeHtml(translations[state.language].productPlaceholder)}">${productArt(product.kind)}<span class="packaging-placeholder"><span aria-hidden="true">＋</span>${escapeHtml(translations[state.language].productPlaceholder)}</span></div>`;
  }
  function renderProducts() {
    const host = document.querySelector("[data-product-grid]");
    if (!host) return;
    host.innerHTML = config.products.map((product) => {
      const first = product.variants[0];
      const options = product.variants.map((variant) => `<option value="${escapeHtml(variant.id)}">${escapeHtml(preferredVariant(variant))}</option>`).join("");
      return `<article class="product-card" data-product="${escapeHtml(product.id)}">
        ${productMedia(product)}
        <div class="product-info"><div class="product-title-row"><div><h3 class="product-title">${escapeHtml(preferredName(product))}</h3>${state.language === "en" ? `<span class="product-urdu" lang="ur" dir="rtl">${escapeHtml(product.nameUr)}</span>` : `<span class="product-urdu" lang="en">${escapeHtml(product.name)}</span>`}</div><span class="product-price" data-product-price>${money(first.price)}</span></div>
        <p class="product-description">${escapeHtml(state.language === "ur" ? product.descriptionUr : product.description)}</p>
        <div class="product-controls"><label class="product-unit-label" for="variant-${escapeHtml(product.id)}"><span class="control-caption">${state.language === "ur" ? "سائز منتخب کریں" : "Choose size"}</span><select id="variant-${escapeHtml(product.id)}" data-variant-select="${escapeHtml(product.id)}">${options}</select></label><label class="product-qty-label"><span class="control-caption">${state.language === "ur" ? "تعداد" : "Qty"}</span><input type="number" min="1" max="99" step="1" inputmode="numeric" value="1" data-card-quantity aria-label="${state.language === "ur" ? "تعداد منتخب کریں" : "Choose quantity"}"></label><div class="product-price-caption">${escapeHtml(translations[state.language].priceCaption)}</div></div>
        <div class="product-order-actions"><button class="add-cart" type="button" data-add="${escapeHtml(product.id)}"><span aria-hidden="true">＋</span><span>${escapeHtml(translations[state.language].addBasket)}</span></button><button class="quick-order" type="button" data-quick-order="${escapeHtml(product.id)}"><span>${escapeHtml(translations[state.language].quickOrder)}</span><span aria-hidden="true">↗</span></button></div></div></article>`;
    }).join("");
  }
  function setLanguage(language) {
    state.language = language === "ur" ? "ur" : "en";
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ur" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = translations[state.language][node.dataset.i18n];
      if (value !== undefined) node.textContent = value;
    });
    const heroTitle = document.querySelector("#hero-title");
    if (heroTitle) heroTitle.innerHTML = state.language === "ur" ? "تازہ دودھ اور دہی،<br><em>ہر روز۔</em>" : "Fresh Milk &amp; Yogurt,<br><em>Every Day.</em>";
    const menuToggle = document.querySelector("[data-menu-toggle]");
    if (menuToggle) menuToggle.setAttribute("aria-label", state.language === "ur" ? "مینو کھولیں" : "Open menu");
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      const value = translations[state.language][node.dataset.i18nAria];
      if (value !== undefined) node.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const value = translations[state.language][node.dataset.i18nPlaceholder];
      if (value !== undefined) node.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === state.language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderProducts();
    renderHours();
    renderCart();
  }
  function getSelectedVariant(productId) {
    const select = document.querySelector(`[data-variant-select="${CSS.escape(productId)}"]`);
    return getVariant(productId, select?.value || getProduct(productId).variants[0].id);
  }
  function buildWhatsAppUrl(message) {
    return `https://wa.me/${config.brand.whatsapp}?text=${encodeURIComponent(message)}`;
  }
  function openWhatsApp(message) {
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }
  function updateBadge() {
    const count = Object.values(state.cart).reduce((sum, quantity) => sum + Number(quantity || 0), 0);
    document.querySelectorAll("[data-cart-count]").forEach((node) => { node.textContent = String(count); });
  }
  function renderCart() {
    const rows = Object.entries(state.cart).map(([key, quantity]) => {
      const [productId, variantId] = key.split("::");
      const product = getProduct(productId);
      const variant = getVariant(productId, variantId);
      if (!product || !variant || Number(quantity) < 1) return "";
      return `<div class="cart-line" data-cart-key="${escapeHtml(key)}"><div><span class="cart-line-name">${escapeHtml(preferredName(product))}</span><span class="cart-line-variant">${escapeHtml(preferredVariant(variant))}</span></div><strong class="cart-line-price">${money(variant.price * quantity)}</strong><div class="cart-line-controls"><span class="quantity-control"><button type="button" data-quantity="minus" aria-label="${state.language === "ur" ? "مقدار کم کریں" : "Decrease quantity"}">−</button><output>${Number(quantity)}</output><button type="button" data-quantity="plus" aria-label="${state.language === "ur" ? "مقدار بڑھائیں" : "Increase quantity"}">+</button></span><button class="remove-item" type="button" data-remove>${escapeHtml(translations[state.language].remove)}</button></div></div>`;
    }).filter(Boolean);
    cartItems.innerHTML = rows.join("");
    const hasItems = rows.length > 0;
    cartEmpty.hidden = hasItems;
    cartCheckout.hidden = !hasItems;
    const total = Object.entries(state.cart).reduce((sum, [key, quantity]) => {
      const [productId, variantId] = key.split("::");
      return sum + (getVariant(productId, variantId)?.price || 0) * Number(quantity || 0);
    }, 0);
    document.querySelectorAll("[data-cart-total]").forEach((node) => { node.textContent = money(total); });
    updateBadge();
  }
  function addToCart(productId, variantId, quantity = 1) {
    const key = `${productId}::${variantId}`;
    state.cart[key] = (Number(state.cart[key]) || 0) + quantity;
    persistCart();
    renderCart();
    liveRegion.textContent = state.language === "ur" ? "ٹوکری میں شامل کر دیا گیا۔" : "Added to your basket.";
  }
  function renderHours() {
    const tableBody = document.querySelector("[data-hours-list]");
    if (!tableBody) return;
    let currentDay = "";
    try { currentDay = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Karachi", weekday: "long" }).format(new Date()); } catch { currentDay = ""; }
    const dayName = (day) => state.language === "ur" ? dayNamesUr[dayNames.indexOf(day)] : day;
    tableBody.innerHTML = weekOrder.map((day) => {
      const isToday = day === currentDay;
      const hours = config.hours[day];
      const readableHours = state.language === "ur" ? (day === "Friday" ? "صبح ۶ بجے – دوپہر ۱۲ بجے" : "صبح ۶ بجے – دوپہر ۲ بجے") + " | " + "دوپہر ۳ بجے – رات ۱۰ بجے" : hours.join(" | ");
      return `<tr class="${isToday ? "is-today " : ""}${day === "Friday" ? "is-friday" : ""}"${isToday ? ' aria-current="date"' : ""}><td>${escapeHtml(dayName(day))}${isToday ? `<span class="visually-hidden"> · ${escapeHtml(state.language === "ur" ? "آج" : "today")}</span>` : ""}</td><td>${escapeHtml(readableHours)}</td></tr>`;
    }).join("");
  }
  function openCart() {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    renderCart();
  }
  function closeCart() { if (typeof dialog.close === "function") dialog.close(); else dialog.removeAttribute("open"); }
  function orderOne(productId, quantity = 1) {
    const product = getProduct(productId);
    const variant = getSelectedVariant(productId);
    if (!product || !variant) return;
    const message = state.language === "ur"
      ? `السلام علیکم ڈیری اینڈ کو! مجھے ${quantity} عدد ${preferredName(product)} ${preferredVariant(variant)} آرڈر کرنا ہے۔ براہِ کرم دستیابی اور ڈیلیوری کی تفصیل کی تصدیق کریں۔`
      : `Assalam-o-Alaikum Dairy & Co! I would like to order ${quantity} × ${variant.label} of ${product.name.toLowerCase()}. Please confirm availability and delivery details.`;
    openWhatsApp(message);
  }
  function submitCartOrder() {
    const entries = Object.entries(state.cart).filter(([, quantity]) => Number(quantity) > 0);
    if (!entries.length) { liveRegion.textContent = translations[state.language].requiredMessage; return; }
    const name = document.querySelector("#order-name").value.trim();
    const address = document.querySelector("#order-address").value.trim();
    const rows = entries.map(([key, quantity]) => {
      const [productId, variantId] = key.split("::");
      const product = getProduct(productId);
      const variant = getVariant(productId, variantId);
      return { product, variant, quantity: Number(quantity) };
    }).filter((row) => row.product && row.variant);
    const total = rows.reduce((sum, row) => sum + row.variant.price * row.quantity, 0);
    const lines = rows.map((row) => `• ${row.product.name} — ${row.quantity} × ${row.variant.label} (${money(row.variant.price * row.quantity)})`);
    const message = [
      "Assalam-o-Alaikum Dairy & Co! I would like to request this order:",
      ...lines,
      `Estimated total (delivery not included): ${money(total)}`,
      name ? `Customer name: ${name}` : "",
      address ? `Delivery address: ${address}` : "",
      "Please confirm availability, delivery area and charges. I understand this order is not confirmed until Dairy & Co accepts it."
    ].filter(Boolean).join("\n");
    openWhatsApp(message);
  }
  function submitContact(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const message = `Assalam-o-Alaikum Dairy & Co!\nMy name is ${formData.get("name").trim()}.\nMy phone number is ${formData.get("phone").trim()}.\nMessage: ${formData.get("message").trim()}`;
    openWhatsApp(message);
  }

  dialog?.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeCart();
  });
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  document.querySelectorAll("[data-cart-open]").forEach((button) => button.addEventListener("click", openCart));
  document.querySelectorAll("[data-cart-close]").forEach((button) => button.addEventListener("click", closeCart));
  document.querySelector("[data-cart-continue]")?.addEventListener("click", () => { closeCart(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); });
  document.querySelector("[data-submit-order]")?.addEventListener("click", submitCartOrder);
  document.querySelector("[data-contact-form]")?.addEventListener("submit", submitContact);
  document.querySelector("[data-menu-toggle]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    const nav = document.querySelector("#primary-nav");
    nav.classList.toggle("is-open", !isOpen);
    button.setAttribute("aria-label", !isOpen ? (state.language === "ur" ? "مینو بند کریں" : "Close menu") : (state.language === "ur" ? "مینو کھولیں" : "Open menu"));
  });
  document.querySelectorAll("#primary-nav a").forEach((link) => link.addEventListener("click", () => {
    document.querySelector("#primary-nav")?.classList.remove("is-open");
    document.querySelector("[data-menu-toggle]")?.setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    if (addButton) { const productId = addButton.dataset.add; const variant = getSelectedVariant(productId); const card = addButton.closest(".product-card"); const quantity = Math.max(1, Math.min(99, Number(card.querySelector("[data-card-quantity]").value) || 1)); if (variant) addToCart(productId, variant.id, quantity); return; }
    const quickOrder = event.target.closest("[data-quick-order]");
    if (quickOrder) { const card = quickOrder.closest(".product-card"); const quantity = Math.max(1, Math.min(99, Number(card.querySelector("[data-card-quantity]").value) || 1)); orderOne(quickOrder.dataset.quickOrder, quantity); return; }
    const quantityButton = event.target.closest("[data-quantity]");
    if (quantityButton) {
      const row = quantityButton.closest("[data-cart-key]");
      const key = row.dataset.cartKey;
      state.cart[key] = Math.max(0, Number(state.cart[key]) + (quantityButton.dataset.quantity === "plus" ? 1 : -1));
      if (!state.cart[key]) delete state.cart[key];
      persistCart(); renderCart(); return;
    }
    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) { delete state.cart[removeButton.closest("[data-cart-key]").dataset.cartKey]; persistCart(); renderCart(); }
  });
  document.addEventListener("change", (event) => {
    const cardQuantity = event.target.closest("[data-card-quantity]");
    if (cardQuantity) { cardQuantity.value = String(Math.max(1, Math.min(99, Number(cardQuantity.value) || 1))); return; }
    const select = event.target.closest("[data-variant-select]");
    if (!select) return;
    const variant = getVariant(select.dataset.variantSelect, select.value);
    const card = select.closest(".product-card");
    if (variant && card) card.querySelector("[data-product-price]").textContent = money(variant.price);
  });

  setLanguage("en");
})();
