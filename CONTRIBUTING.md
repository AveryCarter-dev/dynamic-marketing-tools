# 🧠 Contributing Guide

Thank you for your interest in contributing to **Awesome Dynamic Marketing Tools**! 🎉

This guide will help you understand how you can contribute to the project and maintain the quality of this curated collection of dynamic marketing tools.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Types of Contributions](#-types-of-contributions)
- [Contribution Process](#-contribution-process)
- [Project Structure](#-project-structure)
- [Documentation Format](#-documentation-format)
- [Quality Standards](#-quality-standards)
- [Frequently Asked Questions](#-frequently-asked-questions)

---

## 🤝 Code of Conduct

By participating in this project, you commit to maintaining a respectful and collaborative environment. Contributions should be constructive and follow open source community best practices.

---

## 💡 How Can I Contribute?

There are many ways to contribute:

- ✅ **Add new tools** to the collection
- ✅ **Improve existing documentation**
- ✅ **Fix errors** or outdated information
- ✅ **Suggest improvements** to structure or format
- ✅ **Translate** content to other languages
- ✅ **Report issues** or broken tools

---

## 🎯 Types of Contributions

### 1. Add a New Tool

If you know of a tool that allows you to update, personalize, or track marketing elements dynamically, add it!

**Accepted categories:**
- 🔳 **Dynamic QR Codes** — QR codes that can be updated without regenerating
- 🔗 **Dynamic Links** — Editable and trackable shortened links
- 🧱 **Dynamic Landing Pages** — Customizable landing pages
- 📈 **Tracking & Analytics** — Analytics and tracking tools
- 🤖 **Automation & Dynamic Triggers** — Automation and dynamic triggers
- 🆕 **Other categories** — If you have a relevant new category, suggest it!

### 2. Improve Existing Documentation

- Update outdated information
- Fix broken links
- Improve descriptions or examples
- Add more details about features

### 3. Report Issues

If you find:
- Broken links
- Incorrect information
- Tools that are no longer available
- Typographical errors

Open an issue describing the problem.

---

## 🚀 Contribution Process

### Step 1: Fork the Repository

1. Fork this repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/dynamic-marketing-tools.git
   cd dynamic-marketing-tools
   ```

### Step 2: Create a Branch

Create a branch for your contribution:

```bash
git checkout -b feature/tool-name
# or
git checkout -b fix/description-of-fix
```

**Branch naming convention:**
- `feature/tool-name` — For new tools
- `fix/description` — For fixes
- `docs/description` — For documentation improvements
- `update/tool-name` — For updates

### Step 3: Create File Structure

If you're adding a new tool:

1. **Create a folder** inside the `tools/` directory with the tool's name (lowercase, with hyphens):
   ```bash
   mkdir tools/tool-name
   cd tools/tool-name
   ```

2. **Create a README.md file** inside the folder with the following structure:

   ```markdown
   # Tool Name

   ## Description
   Brief description of what the tool does and how it enables dynamic personalization.

   ## Link
   [Official URL](https://example.com)

   ## Type
   - SaaS / Web / Library / API / etc.

   ## Dynamic Functionality
   - QR / Link / Landing Page / Analytics / Automation

   ## Key Features
   - Feature 1
   - Feature 2
   - Feature 3

   ## Pricing
   - Free plan: Yes/No
   - Paid plan: From $X/month
   - Enterprise plan: Contact

   ## License
   - Proprietary / Open Source / MIT / etc.

   ## Usage Example
   (Optional) Include a practical example or code sample if relevant.

   ## Review Date
   Last updated: MM/DD/YYYY

   ## Notes
   (Optional) Warnings, limitations, or other relevant information.
   ```

### Step 4: Update Main README

Add the tool to the corresponding section in the main `README.md`:

```markdown
- **[Tool Name](https://url.com)** — Brief description.  
  🧠 Main dynamic feature.  
  ⚠️ *Important notes if any.*
```

And update the comparison table if applicable:

```markdown
| QR | Tool Name | Type | ✅/❌ | Price | ✅/❌ |
```

### Step 5: Sync the Website

If you want to test the website locally:

```bash
cd website
npm install
npm run sync  # This updates the website data from README.md
npm run dev   # Start development server
```

### Step 6: Commit and Push

```bash
git add .
git commit -m "feat: add Tool Name to category X"
git push origin feature/tool-name
```

**Commit convention:**
- `feat:` — New tool or functionality
- `fix:` — Bug fixes
- `docs:` — Documentation changes
- `update:` — Updates to existing information
- `refactor:` — Structure improvements without functional changes

### Step 7: Create Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch and describe your changes:
   - **Clear title**: `feat: Add Tool Name`
   - **Description**: Explain what you're adding and why it's relevant
   - **Category**: Indicate which category it belongs to
4. Wait for review and feedback

---

## 📁 Project Structure

```
dynamic-marketing-tools/
├── README.md                 # Main file with complete list
├── CONTRIBUTING.md           # This guide
├── .github/                  # GitHub Actions workflows
│   └── workflows/
│       ├── deploy.yml        # Deploy to GitHub Pages
│       └── sync-and-build.yml # Sync on README changes
├── tools/                    # All tools organized here
│   ├── tool-name-1/          # Folder per tool
│   │   └── README.md
│   ├── tool-name-2/
│   │   └── README.md
│   └── ...
└── website/                  # Astro website
    ├── src/
    │   ├── data/tools.ts     # Auto-generated from README
    │   ├── components/
    │   └── pages/
    └── scripts/
        └── sync-from-readme.js
```

---

## ✍️ Documentation Format

### Writing Style

- **Clear and concise**: Be direct in descriptions
- **Consistent**: Use the same format as existing entries
- **Objective**: Avoid excessive promotional language
- **Complete**: Include all relevant information

### Emojis and Format

Use emojis consistently:
- 🔳 For QR Codes
- 🔗 For Links
- 🧱 For Landing Pages
- 📈 For Analytics
- 🤖 For Automation
- 🧠 For dynamic features
- ⚠️ For important warnings

### Links

- Always use HTTPS links when possible
- Verify that links work before committing
- Use standard markdown format: `[Text](URL)`

---

## ✅ Quality Standards

### Acceptance Criteria

For a tool to be accepted, it must:

1. ✅ **Be relevant**: Allow dynamic personalization or updating of marketing elements
2. ✅ **Be available**: The service must be active and accessible
3. ✅ **Have documentation**: Include complete and accurate information
4. ✅ **Follow format**: Comply with the established structure
5. ✅ **Be verifiable**: Links and information must be correct

### Required Information

- ✅ Tool name
- ✅ Official link
- ✅ Type (SaaS, Web, Library, API, etc.)
- ✅ Dynamic functionality category
- ✅ Pricing information (if applicable)
- ✅ License
- ✅ Review date

### Optional but Recommended Information

- Usage examples
- Key features
- Known limitations
- Alternatives or related tools

---

## 🔍 Pull Request Review

### Review Process

1. **Automatic review**: We check format and basic structure
2. **Manual review**: We evaluate relevance and content quality
3. **Feedback**: We'll provide constructive comments if needed
4. **Approval**: Once approved, it will be merged into the main repository

### Response Time

- We try to review PRs within 2-3 business days
- If your PR needs changes, we'll let you know clearly
- If you don't receive a response within a week, feel free to follow up

---

## ⚖️ Licenses and Permissions

### ⚠️ Important: Third-Party Code

**DO NOT include third-party source code without explicit permission.**

Instead:
- ✅ Link to official documentation or API
- ✅ Use documented public examples
- ✅ Cite the original source
- ✅ Respect licenses and terms of service

### Project License

This project is licensed under MIT. By contributing, you agree that your contributions will be licensed under the same license.

---

## ❓ Frequently Asked Questions

### Can I add my own tool?

Yes! As long as it meets the relevance and quality criteria. Be objective in the description.

### What happens if a tool is no longer available?

If you find a tool that no longer works, open an issue or PR to mark it as discontinued or remove it.

### Can I add tools in other languages?

For now, we maintain content in English and Spanish. If you want to add support for other languages, discuss it first in an issue.

### How do I update information for an existing tool?

Create a branch `update/tool-name`, update the information in both the tool's README and the main README, run `npm run sync` in the website folder, and create a PR describing the changes.

### Can I suggest changes to the project structure?

Absolutely! Open an issue to discuss structural improvements before implementing them.

---

## 🎉 Thank You!

Your contribution helps make this repository a better source of information about dynamic marketing tools. We appreciate your time and effort!

If you have questions, feel free to open an issue or contact the maintainers.

---

**Last updated**: November 2024
