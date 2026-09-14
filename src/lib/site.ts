export const site = {
  name: "Studio Collective",
  tagline: "TURN UP YOUR CREATIVITY",
  description:
    "Studio Collective builds native apps and creative tools that keep focus intact — for Mac, iPhone, iPad, and sound.",
  url: "https://studiocollective.dev",
  email: "hello@studiocollective.dev",
  social: {
    instagram: "https://instagram.com/studiocollective",
    linkedin: "https://linkedin.com/company/studio-collective",
    x: "https://x.com/studiocollective",
  },
  work: [
    {
      title: "HealthyMac",
      role: "Native macOS app",
      summary:
        "A native macOS utility that scores your Mac's health and helps you reclaim space. It scans storage, processes, unused apps, leftovers, caches, and startup items — then guides safe cleanups with clear review vs safe choices, a menu bar status, and a desktop widget.",
    },
    {
      title: "ClearBar",
      role: "Native macOS app",
      summary:
        "A native macOS glance strip that sits at the top of the screen (notch-aware) and quietly surfaces what's next—music, weather, and upcoming calendar events—without interrupting your flow. Built in Swift/SwiftUI with companion WidgetKit widgets.",
    },
    {
      title: "SetFlow",
      role: "Native iOS & iPadOS app",
      summary:
        "SetFlow is a native iOS and iPadOS app for songwriters and performing musicians. It combines smart chord composition, a searchable chord library with custom voicings, and stage-ready setlists (flows) with swipe navigation. On stage it includes a guitar tuner, a BPM metronome, and lyric auto-scroll tied to the song's tempo — so writing, rehearsal, and live performance stay in one continuous flow.",
    },
    {
      title: "After Dark",
      role: "Audio instrument",
      summary:
        "After Dark is a space ambience instrument from Studio Collective. Layer crowd, city, nature, weather, and noise into evolving beds — dark, spatial, and ready for film, games, and late-night production.",
    },
  ],
} as const;
