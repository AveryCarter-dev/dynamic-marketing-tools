# 🧠 Awesome Dynamic Marketing Tools

A curated collection of tools and APIs that allow you to **update, personalize, or track marketing elements dynamically**.

> 🎯 From dynamic QR codes to smart links and personalized landing pages.

🌐 **View the website:** [Live Site](https://AveryCarter-dev.github.io/dynamic-marketing-tools)

---

## 📚 Categories

### 🔳 Dynamic QR Codes
Tools that let you update QR destinations or data without regenerating the code.

- **[QRNow](https://qrnow.com)** — Dynamic QR code generator with built-in tracking (SaaS).  
  🧠 Update target URLs and analyze scans in real time.  
  ⚠️ *Embedded code is license-restricted. Use their API or embed link only with permission.*

- **[goqr.me](https://goqr.me)** — Free static QR generator (web-based).

- **[qrcodejs (npm)](https://www.npmjs.com/package/qrcode)** — Open-source JavaScript library for generating QR codes (see example in `/qr-dinamicos/qrcodejs.md`).

---

### 🔗 Dynamic Links
- **[Rebrandly](https://rebrandly.com)** — Editable, trackable branded links.  
- **[Bitly](https://bitly.com)** — Link shortener with analytics and dynamic redirection.  
- **[Branch](https://branch.io)** — Deep linking and advanced mobile attribution.

---

### 🧱 Dynamic Landing Pages
- **[Unbounce](https://unbounce.com)** — Landing pages with dynamic text replacement and personalized content.  
- **[Instapage](https://instapage.com)** — Automatic variations and A/B testing via API.

---

### 📈 Tracking & Analytics
- **[Mixpanel](https://mixpanel.com)** — Event-based analytics.  
- **[Amplitude](https://amplitude.com)** — Dynamic segmentation and funnel analysis.  
- **[GA4](https://marketingplatform.google.com/about/analytics/)** — Google Analytics 4, real-time data streams.

---

### 🤖 Automation & Dynamic Triggers
- **[Zapier](https://zapier.com)** — Connect apps and automate actions in real time.  
- **[Make (formerly Integromat)](https://www.make.com)** — Visual flows and advanced automation.  
- **[Customer.io](https://customer.io)** — Dynamic messaging based on user behavior.

---

## ⚔️ Comparisons

| Category | Tool | Type | Dynamic | Base Price | Open Source |
|-----------|------|------|----------|-------------|--------------|
| QR | QRNow | SaaS | ✅ | from $ | ❌ |
| QR | goqr.me | Web | ❌ | Free | ❌ |
| QR | qrcodejs | Library | ✅ | Free | ✅ |
| Links | Bitly | SaaS | ✅ | Freemium | ❌ |
| Links | Rebrandly | SaaS | ✅ | Freemium | ❌ |
| Links | Branch | SaaS | ✅ | Enterprise | ❌ |

---

## 🧠 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for detailed instructions.

**Quick start:**
1. Fork this repository  
2. Create a folder with the tool's name in the `tools/` directory
3. Include: description, link, license, type of dynamic feature (QR, link, API, automation), example of use, and date of review  
4. Update this README.md with your tool
5. Run `cd website && npm run sync` to update the website
6. Submit a pull request 🚀

---

## 📜 License
MIT 

Do not include third-party source code without permission — instead, link to APIs or use documented public examples.
