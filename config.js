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
    focusBefore: "center",
    focusAfter:  "top",
    results: ["1_після.jpeg","1_після.jpeg"],  // розкоментуй щоб додати варіанти
  },
  {
    title:       "Dress — Summer Editorial",
    tag:         "Clothing",
    before:      "2_до.jpeg",
    after:       "2_після.jpeg",
    focusBefore: "center",
    focusAfter:  "top",
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
    before:      "2_до.jpeg",
    after:       "2_після.png",
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
