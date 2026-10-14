/* Editable Dairy & Co business and price configuration.
   Keep the supplied catalog units and prices in PKR. */
window.DAIRY_CONFIG = {
  brand: {
    name: "Dairy & Co",
    website: "https://dairyandco.com",
    whatsapp: "923199446974",
    phoneDisplay: "+92 319 9446974",
    address: "Raja Market (Merhbhan Market), Tench Bhatta, Rawalpindi, Pakistan.",
    directions: "https://maps.app.goo.gl/4SAoBDi3jdb2F4UU9",
    instagram: "https://www.instagram.com/dairyandco/",
    facebook: "https://www.facebook.com/dairyandco/",
    tiktok: "https://www.tiktok.com/@dairyandco"
  },
  currency: "PKR",
  products: [
    {
      id: "buffalo-milk",
      name: "Buffalo Milk",
      nameUr: "بھینس کا دودھ",
      description: "Enjoy buffalo milk from Dairy & Co, available for your daily dairy needs.",
      descriptionUr: "روزمرہ ضرورت کے لیے ڈیری اینڈ کو کا بھینس کا دودھ۔",
      kind: "milk",
      image: "assets/product-buffalo-milk.jpg",
      badge: "Pure Buffalo Milk",
      badgeUr: "خالص بھینس کا دودھ",
      variants: [
        { id: "liter", label: "1 liter", labelUr: "ایک لیٹر", price: 240, unit: "liter" },
        { id: "half-liter", label: "Half liter", labelUr: "آدھا لیٹر", price: 120, unit: "half liter" }
      ]
    },
    {
      id: "cow-milk",
      name: "Cow Milk",
      nameUr: "گائے کا دودھ",
      description: "Discover cow milk from Dairy & Co for your everyday dairy routine.",
      descriptionUr: "روزمرہ استعمال کے لیے ڈیری اینڈ کو کا گائے کا دودھ۔",
      kind: "milk cow",
      image: "assets/product-cow-milk.jpg",
      badge: "Farm Fresh Cow Milk",
      badgeUr: "تازہ گائے کا دودھ",
      variants: [
        { id: "liter", label: "1 liter", labelUr: "ایک لیٹر", price: 220, unit: "liter" },
        { id: "half-liter", label: "Half liter", labelUr: "آدھا لیٹر", price: 110, unit: "half liter" }
      ]
    },
    {
      id: "fresh-yogurt",
      name: "Fresh Yogurt",
      nameUr: "تازہ دہی",
      description: "Enjoy yogurt from Dairy & Co as part of your daily meals.",
      descriptionUr: "روزمرہ کھانوں کے ساتھ ڈیری اینڈ کو کا دہی۔",
      kind: "yogurt",
      image: "assets/product-fresh-yogurt.jpg",
      badge: "Traditional Fresh Dahi",
      badgeUr: "روایتی مٹکا دہی",
      variants: [
        { id: "kilogram", label: "1 kilogram", labelUr: "ایک کلوگرام", price: 260, unit: "kilogram" },
        { id: "half-kilogram", label: "Half kilogram", labelUr: "آدھا کلوگرام", price: 130, unit: "half kilogram" }
      ]
    }
  ],
  hours: {
    Monday: ["6:00 AM – 2:00 PM", "3:00 PM – 10:00 PM"],
    Tuesday: ["6:00 AM – 2:00 PM", "3:00 PM – 10:00 PM"],
    Wednesday: ["6:00 AM – 2:00 PM", "3:00 PM – 10:00 PM"],
    Thursday: ["6:00 AM – 2:00 PM", "3:00 PM – 10:00 PM"],
    Friday: ["6:00 AM – 12:00 PM", "3:00 PM – 10:00 PM"],
    Saturday: ["6:00 AM – 2:00 PM", "3:00 PM – 10:00 PM"],
    Sunday: ["6:00 AM – 2:00 PM", "3:00 PM – 10:00 PM"]
  }
};
