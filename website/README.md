# Dynamic Marketing Tools Website

A retro minimalist website showcasing the curated collection of dynamic marketing tools.

## 🚀 Getting Started

### Prerequisites

- Node.js 22+ (recommended) or Node.js 18.20.8+
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

**Option 1: Using the script (recommended)**
```bash
./start-dev.sh
```

**Option 2: Manual execution**
```bash
# Make sure you're using Node 22 (if you have nvm)
nvm use 22

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321` (or the port shown in the terminal).

**To stop the server:** Press `Ctrl+C` in the terminal where it's running.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Features

- **Retro Minimalist Design**: Clean, monospace typography with intentional retro aesthetics
- **Emoji Integration**: Category and tool emojis displayed throughout
- **Responsive**: Works on all screen sizes
- **Fast**: Built with Astro for optimal performance

## 📁 Project Structure

```
website/
├── src/
│   ├── components/     # Reusable components
│   │   ├── CategorySection.astro
│   │   └── ToolCard.astro
│   ├── data/           # Data files
│   │   └── tools.ts    # Tools and categories data
│   └── pages/          # Pages
│       └── index.astro # Main page
├── public/             # Static assets
└── package.json
```

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- TypeScript - Type safety
- CSS Variables - Theming

## 📝 Adding New Tools

### Option 1: Update README.md (Recommended)

1. Edit the main `README.md` file in the root directory
2. Run the sync script to update the website:
   ```bash
   npm run sync
   ```
3. The website will automatically reload if the dev server is running

### Option 2: Direct Edit

Edit `src/data/tools.ts` directly to add new tools or categories. The data structure is self-explanatory and follows the format from the main README.

**Note:** If you edit `tools.ts` directly, remember to also update the main `README.md` to keep them in sync.
