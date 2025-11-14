export interface Tool {
  name: string;
  url: string;
  description: string;
  emoji: string;
  category: string;
  categoryEmoji: string;
  notes?: string;
  warning?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  tools: Tool[];
}

export const categories: Category[] = [
  {
    id: "qr-codes",
    name: "Dynamic QR Codes",
    emoji: "🔳",
    description: "Tools that let you update QR destinations or data without regenerating the code.",
    tools: [
      {
        name: "QRNow",
        url: "https://www.qrnow.com",
        description: "Dynamic QR code generator with built-in tracking (SaaS).",
        emoji: "🧠",
        category: "Dynamic QR Codes",
        categoryEmoji: "🔳",
        warning: "Embedded code is license-restricted. Use their API or embed link only with permission."
      },
      {
        name: "goqr.me",
        url: "https://goqr.me",
        description: "Free static QR generator (web-based).",
        emoji: "",
        category: "Dynamic QR Codes",
        categoryEmoji: "🔳"
      },
      {
        name: "goqwwwwwwwwr.me",
        url: "https://goqr.me",
        description: "Free static QR generator (web-based)wwwwww.",
        emoji: "",
        category: "Dynamic QR Codes",
        categoryEmoji: "🔳"
      },
      {
        name: "qrcodejs (npm)",
        url: "https://www.npmjs.com/package/qrcode",
        description: "Open-source JavaScript library for generating QR codes (see example in `/qr-dinamicos/qrcodejs.md`).",
        emoji: "",
        category: "Dynamic QR Codes",
        categoryEmoji: "🔳"
      }
    ]
  },
  {
    id: "links",
    name: "Dynamic Links",
    emoji: "🔗",
    description: "",
    tools: [
      {
        name: "Rebrandly",
        url: "https://rebrandly.com",
        description: "Editable, trackable branded links.",
        emoji: "",
        category: "Dynamic Links",
        categoryEmoji: "🔗"
      },
      {
        name: "Bitly",
        url: "https://bitly.com",
        description: "Link shortener with analytics and dynamic redirection.",
        emoji: "",
        category: "Dynamic Links",
        categoryEmoji: "🔗"
      },
      {
        name: "Branch",
        url: "https://branch.io",
        description: "Deep linking and advanced mobile attribution.",
        emoji: "",
        category: "Dynamic Links",
        categoryEmoji: "🔗"
      }
    ]
  },
  {
    id: "landing-pages",
    name: "Dynamic Landing Pages",
    emoji: "🧱",
    description: "",
    tools: [
      {
        name: "Unbounce",
        url: "https://unbounce.com",
        description: "Landing pages with dynamic text replacement and personalized content.",
        emoji: "",
        category: "Dynamic Landing Pages",
        categoryEmoji: "🧱"
      },
      {
        name: "Instapage",
        url: "https://instapage.com",
        description: "Automatic variations and A/B testing via API.",
        emoji: "",
        category: "Dynamic Landing Pages",
        categoryEmoji: "🧱"
      }
    ]
  },
  {
    id: "analytics",
    name: "Tracking & Analytics",
    emoji: "📈",
    description: "",
    tools: [
      {
        name: "Mixpanel",
        url: "https://mixpanel.com",
        description: "Event-based analytics.",
        emoji: "",
        category: "Tracking & Analytics",
        categoryEmoji: "📈"
      },
      {
        name: "Amplitude",
        url: "https://amplitude.com",
        description: "Dynamic segmentation and funnel analysis.",
        emoji: "",
        category: "Tracking & Analytics",
        categoryEmoji: "📈"
      },
      {
        name: "GA4",
        url: "https://marketingplatform.google.com/about/analytics/",
        description: "Google Analytics 4, real-time data streams.",
        emoji: "",
        category: "Tracking & Analytics",
        categoryEmoji: "📈"
      }
    ]
  },
  {
    id: "automation",
    name: "Automation & Dynamic Triggers",
    emoji: "🤖",
    description: "We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for detailed instructions.",
    tools: [
      {
        name: "Zapier",
        url: "https://zapier.com",
        description: "Connect apps and automate actions in real time.",
        emoji: "",
        category: "Automation & Dynamic Triggers",
        categoryEmoji: "🤖"
      },
      {
        name: "Make (formerly Integromat)",
        url: "https://www.make.com",
        description: "Visual flows and advanced automation.",
        emoji: "",
        category: "Automation & Dynamic Triggers",
        categoryEmoji: "🤖"
      },
      {
        name: "Customer.io",
        url: "https://customer.io",
        description: "Dynamic messaging based on user behavior.",
        emoji: "",
        category: "Automation & Dynamic Triggers",
        categoryEmoji: "🤖"
      }
    ]
  }
];
