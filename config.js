// ═══════════════════════════════════════════════════════════════
//  TREVIO CONFIG — edit only this file
//  After changes — replace config.js on Netlify
// ═══════════════════════════════════════════════════════════════

// ── BRAND ────────────────────────────────────────────────────────
const BRAND_NAME = "Trevio";

// Set a path to your logo image to display it in the header instead of the brand name text.
// Leave as empty string "" to use the text logo.
// Example: const LOGO = "photos/logo.svg";
const LOGO = "";

// ── HEADER & FOOTER ──────────────────────────────────────────────
const FOOTER_EMAIL      = "trevioagency@gmail.com";
const FOOTER_COPY       = "©2025 Trevio";
const FOOTER_BRAND_DESC = "Next-level product visuals powered by AI.";

// Footer link columns — add/remove columns and links freely
const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "AI Product Visuals", href: "#" },
      { label: "Brand Photography",  href: "#" },
      { label: "Content Creation",   href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",  href: "about.html"                    },
      { label: "Portfolio", href: "index.html"                    },
      { label: "Contact",   href: "mailto:trevioagency@gmail.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use",   href: "#" },
    ],
  },
];

// Social icons in footer — set href to your real URL, icon to any short text/emoji
const FOOTER_SOCIALS = [
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "Telegram",  href: "#", icon: "TG" },
];

// ── TYPOGRAPHY ───────────────────────────────────────────────────
// Font families (use any Google Fonts name already loaded, or a system stack)
const FONT_HEADING = "'Cormorant Garamond', serif";
const FONT_BODY    = "'DM Mono', monospace";

// Font sizes (any valid CSS value: px, rem, clamp(), etc.)
const FONT_SIZE_BODY    = "13px";
const FONT_SIZE_HERO    = "clamp(3rem,6vw,5.5rem)";
const FONT_SIZE_SECTION = "clamp(2rem,4vw,3.2rem)";

// Font weight for large headings (100–900)
const FONT_WEIGHT_HEADING   = "300";
// Letter-spacing for large headings
const LETTER_SPACING_HEADING = "-.02em";

// ── INDEX PAGE — HERO SECTION ────────────────────────────────────
const SITE_TITLE = "Trevio — Our Work";
const SITE_LINE1 = "One photo.";
const SITE_LINE2 = "Infinite visuals.";
const SITE_DESC  = "We transform a single product image into high-quality AI-generated visuals — any model, location, lighting, or style.";

// ── ABOUT PAGE ───────────────────────────────────────────────────
const ABOUT_PAGE_TITLE = "Trevio — About Us";

// About page hero (shown at the very top — different from the section content below)
const ABOUT_HERO_TITLE = "About<br><em>Trevio</em>";
const ABOUT_HERO_DESC  = "A creative AI studio built for modern brands — combining generative intelligence with sharp editorial vision.";

// Who We Are section
const ABOUT_WHO_TITLE = "Who We Are";
const ABOUT_WHO_TEXT  = "Trevio is a creative AI studio built for modern brands. We combine cutting-edge generative AI with a sharp editorial eye to produce product visuals that stop the scroll — without a studio, a model, or a lengthy production cycle.";

// What We Do section
const ABOUT_WHAT_TITLE = "What We Do";
const ABOUT_WHAT_TEXT  = "We take a single product photo and transform it into a full suite of high-quality AI-generated visuals. Any background, any model, any location, any mood. Whatever your brand needs — we produce it at scale.";

// Our Value section
const ABOUT_VALUE_TITLE = "Our Value";
const ABOUT_VALUE_HEADLINE = "One photo. Infinite visuals.";
const ABOUT_VALUE_TEXT = "Traditional product photography is expensive, slow, and hard to scale. We eliminate those constraints entirely. Our clients get more creative output, faster, at a fraction of the cost.";

// Why Work With Us section
const ABOUT_WHY_TITLE = "Why Work With Us";
const ABOUT_WHY_ITEMS = [
  "Lightning-fast turnaround — results in hours, not weeks",
  "Consistent quality at any scale",
  "No studio, no model, no hassle — just your product",
  "Fully custom styles, moods, locations, and lighting",
  "Dedicated team with a sharp eye for brand aesthetics",
];

// Our Process section
const ABOUT_PROCESS_TITLE = "Our Process";
const ABOUT_PROCESS_STEPS = [
  {
    label: "01",
    title: "You send us one photo",
    desc:  "Any background, any lighting. Just a clear shot of your product.",
  },
  {
    label: "02",
    title: "We choose the right approach",
    desc:  "Our team identifies the best AI models, prompts, and creative direction for your brand.",
  },
  {
    label: "03",
    title: "AI generates the visuals",
    desc:  "We produce multiple high-quality images — different styles, scenes, and moods.",
  },
  {
    label: "04",
    title: "You receive the full set",
    desc:  "Final images delivered ready-to-use for social media, ads, e-commerce, and beyond.",
  },
];

// About page CTA button
const ABOUT_CTA_TEXT = "View Our Portfolio";
const ABOUT_CTA_LINK = "index.html";

// ── CASES ────────────────────────────────────────────────────────
//
//  FIELDS:
//  title        — case title
//  tag          — category (automatically becomes a tab)
//  before       — product photo (left side)
//  after        — main AI result (right side)
//  results      — (optional) additional AI photos. Shows "+N more" on the card.
//                 In lightbox, navigate with dots or ‹ › arrows.
//  focusBefore  — crop of left photo:  "top" | "center" | "bottom"
//  focusAfter   — crop of right photo: "top" | "center" | "bottom"
//
//  EXAMPLE — single result:
//  {
//    title:  "Jacket",
//    tag:    "Clothing",
//    before: "photos/before.jpg",
//    after:  "photos/after.jpg",
//  }
//
//  EXAMPLE — multiple results:
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

  // Add your case below:
  // {
  //   title:       "Title",
  //   tag:         "Category",
  //   before:      "photos/before.jpg",
  //   after:       "photos/after-1.jpg",
  //   results:     ["photos/after-2.jpg", "photos/after-3.jpg"],
  //   focusBefore: "center",
  //   focusAfter:  "top",
  // },

];
