// ═══════════════════════════════════════════════════════════════
//  TREVIO CONFIG — редагуй тільки цей файл
//  Після змін — заміни config.js на сервері (Netlify)
// ═══════════════════════════════════════════════════════════════

const SITE_TITLE = "Trevio — Our Work";
const SITE_LINE1 = "One photo.";
const SITE_LINE2 = "Infinite visuals.";
const SITE_DESC  = "We transform a single product image into high-quality AI-generated visuals — any model, location, lighting, or style.";

// ── КЕЙСИ ───────────────────────────────────────────────────────
//
//  ПОЛЯ:
//  title        — назва кейсу
//  tag          — категорія (стає вкладкою автоматично)
//  before       — фото товару (ліворуч)
//  after        — головний AI результат (праворуч)
//  results      — (необов'язково) додаткові AI фото. Показує "+N more" на картці.
//                 В lightbox можна гортати крапками або стрілками ‹ ›
//  focusBefore  — обрізка лівого фото:  "top" | "center" | "bottom"
//  focusAfter   — обрізка правого фото: "top" | "center" | "bottom"
//
//  ПРИКЛАД З ОДНИМ РЕЗУЛЬТАТОМ:
//  {
//    title:  "Jacket",
//    tag:    "Clothing",
//    before: "photos/before.jpg",
//    after:  "photos/after.jpg",
//  }
//
//  ПРИКЛАД З КІЛЬКОМА РЕЗУЛЬТАТАМИ:
//  {
//    title:   "Jacket",
//    tag:     "Clothing",
//    before:  "photos/before.jpg",
//    after:   "photos/after-1.jpg",
//    results: ["photos/after-2.jpg", "photos/after-3.jpg"],
//  }
//

const CASES = [

  // ── CLOTHING ──────────────────────────────────────────────────
  {
    title:       "Jacket — Street Style",
    tag:         "Clothing",
    before:      "1_до.jpeg",
    after:       "1_після.jpeg",
	results: ["1_після.jpeg","1_після.jpeg"],
    focusBefore: "center",
    focusAfter:  "top",
      // розкоментуй щоб додати варіанти
  },
  {
    title:       "Dress — Summer Editorial",
    tag:         "Clothing",
    before:      "2_до.jpeg",
    after:       "2_після.jpeg",
    focusBefore: "center",
    focusAfter:  "top",
  },
  {
    title:       "Jacket — Street Style",
    tag:         "Clothing",
    before:      "1_до.jpeg",
    after:       "1_після.jpeg",
    focusBefore: "center",
    focusAfter:  "top",
      // розкоментуй щоб додати варіанти
  },

  // ── FOOTWEAR ──────────────────────────────────────────────────
  {
    title:       "Sneakers — Urban Look",
    tag:         "Footwear",
    before:      "photos/sneakers-before.jpg",
    after:       "photos/sneakers-after.jpg",
    focusBefore: "center",
    focusAfter:  "center",
  },
  {
    title:       "Loafers — Minimal",
    tag:         "Footwear",
    before:      "photos/loafers-before.jpg",
    after:       "photos/loafers-after.jpg",
    focusBefore: "center",
    focusAfter:  "center",
	results: ["1_після.jpeg","1_після.jpeg"],
  },

  // ── WATCHES ───────────────────────────────────────────────────
  {
    title:       "Watch — Lifestyle",
    tag:         "Watches",
    before:      "photos/watch-before.jpg",
    after:       "photos/watch-after.jpg",
    focusBefore: "center",
    focusAfter:  "center",
  },

  // ── COSMETICS ─────────────────────────────────────────────────
  {
    title:       "Serum — Clean Beauty",
    tag:         "Cosmetics",
    before:      "photos/serum-before.jpg",
    after:       "photos/serum-after.jpg",
    focusBefore: "center",
    focusAfter:  "top",
  },

  // ── PARFUMES ──────────────────────────────────────────────────
  {
    title:       "Parfume — Chloe",
    tag:         "Parfumes",
    before:      "photos/parfumes/1_до.png",
    after:       "photos/parfumes/1_4_після.webp",
	results:     ["photos/parfumes/1_2_після.webp", "photos/parfumes/1_3_після.webp","photos/parfumes/1_1_після.webp"],
    focusBefore: "center",
    focusAfter:  "top",
  },

  {
    title:       "Parfume — Valentino",
    tag:         "Parfumes",
    before:      "photos/parfumes/2_до.png",
    after:       "photos/parfumes/2_1_після.webp",
	results:     ["photos/parfumes/2_2_після.webp", "photos/parfumes/2_3_після.webp"],
    focusBefore: "center",
    focusAfter:  "top",
  },

  {
    title:       "Parfume — Armaf",
    tag:         "Parfumes",
    before:      "photos/parfumes/3_до.png",
    after:       "photos/parfumes/3_1_після.webp",
	results:     ["photos/parfumes/3_2_після.webp", "photos/parfumes/3_3_після.webp"],
    focusBefore: "center",
    focusAfter:  "top",
  },
  {
    title:       "Parfume — Armani",
    tag:         "Parfumes",
    before:      "photos/parfumes/4_до.png",
    after:       "photos/parfumes/4_1_після.webp",
	results:     ["photos/parfumes/4_2_після.webp", "photos/parfumes/4_3_після.webp"],
    focusBefore: "center",
    focusAfter:  "top",
  },
  {
    title:       "Parfume — Zadig & Voltaire",
    tag:         "Parfumes",
    before:      "photos/parfumes/5_до.png",
    after:       "photos/parfumes/5_1_після.webp",
	results:     ["photos/parfumes/5_2_після.webp"],
    focusBefore: "center",
    focusAfter:  "top",
  },

  // Додай свій кейс нижче:
  // {
  //   title:       "Назва",
  //   tag:         "Категорія",
  //   before:      "photos/before.jpg",
  //   after:       "photos/after-1.jpg",
  //   results:     ["photos/after-2.jpg", "photos/after-3.jpg"],
  //   focusBefore: "center",
  //   focusAfter:  "top",
  // },

];
