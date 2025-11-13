#!/usr/bin/env node
/**
 * Script to sync tools data from README.md to src/data/tools.ts
 * Run this script whenever you update the README.md
 * 
 * Usage: node scripts/sync-from-readme.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');
const readmePath = path.join(rootDir, 'README.md');
const outputPath = path.join(__dirname, '../src/data/tools.ts');

// Category mapping
const categoryMap = {
  '🔳 Dynamic QR Codes': {
    id: 'qr-codes',
    name: 'Dynamic QR Codes',
    emoji: '🔳',
    description: 'Tools that let you update QR destinations or data without regenerating the code.'
  },
  '🔗 Dynamic Links': {
    id: 'links',
    name: 'Dynamic Links',
    emoji: '🔗',
    description: 'Editable, trackable branded links and link shorteners.'
  },
  '🧱 Dynamic Landing Pages': {
    id: 'landing-pages',
    name: 'Dynamic Landing Pages',
    emoji: '🧱',
    description: 'Landing pages with dynamic content and personalization.'
  },
  '📈 Tracking & Analytics': {
    id: 'analytics',
    name: 'Tracking & Analytics',
    emoji: '📈',
    description: 'Analytics and tracking tools with dynamic capabilities.'
  },
  '🤖 Automation & Dynamic Triggers': {
    id: 'automation',
    name: 'Automation & Dynamic Triggers',
    emoji: '🤖',
    description: 'Automation platforms and dynamic trigger systems.'
  }
};

function parseReadme() {
  const readmeContent = fs.readFileSync(readmePath, 'utf-8');
  const lines = readmeContent.split('\n');
  
  const categories = [];
  let currentCategory = null;
  let currentDescription = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check for category header (### 🔳 Dynamic QR Codes)
    const categoryMatch = line.match(/^###\s+(.+)$/);
    if (categoryMatch) {
      const categoryTitle = categoryMatch[1];
      if (categoryMap[categoryTitle]) {
        // Save previous category if exists
        if (currentCategory) {
          categories.push({ ...currentCategory, description: currentDescription });
        }
        
        currentCategory = {
          ...categoryMap[categoryTitle],
          tools: []
        };
        currentDescription = '';
      }
    }
    
    // Check for category description (line after category header)
    if (currentCategory && line && !line.startsWith('-') && !line.startsWith('|') && !line.startsWith('#') && !line.startsWith('>')) {
      if (!currentDescription && line.length > 0) {
        currentDescription = line;
      }
    }
    
    // Check for tool entry (- **[Name](url)** — description)
    const toolMatch = line.match(/^-\s+\*\*\[(.+?)\]\((.+?)\)\*\*\s+—\s+(.+)$/);
    if (toolMatch && currentCategory) {
      const [, name, url, description] = toolMatch;
      
      // Check for emoji and warning in following lines (until next tool or empty line)
      let emoji = '';
      let warning = '';
      
      // Look ahead up to 3 lines for emoji and warning
      for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
        const nextLine = lines[j].trim();
        
        // Stop if we hit another tool entry or empty line
        if (nextLine.startsWith('-') || nextLine === '') {
          break;
        }
        
        // Check for emoji line (🎨 Create branded...)
        const emojiMatch = nextLine.match(/^([🧠🔳🔗🧱📈🤖⚠️🎯🎨]+)\s+(.+)$/);
        if (emojiMatch && !emoji) {
          emoji = emojiMatch[1];
        }
        
        // Check for warning line (⚠️ *text*)
        if (nextLine.includes('⚠️')) {
          const warningMatch = nextLine.match(/\*([^*]+)\*/);
          if (warningMatch && !warning) {
            warning = warningMatch[1];
          }
        }
      }
      
      currentCategory.tools.push({
        name,
        url,
        description: description.trim(),
        emoji: emoji || '',
        category: currentCategory.name,
        categoryEmoji: currentCategory.emoji,
        ...(warning && { warning })
      });
    }
  }
  
  // Add last category
  if (currentCategory) {
    categories.push({ ...currentCategory, description: currentDescription });
  }
  
  return categories;
}

function generateToolsFile(categories) {
  const header = `export interface Tool {
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

export const categories: Category[] = `;

  const categoriesJson = JSON.stringify(categories, null, 2)
    .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
    .replace(/:\s*"([^"]*)"/g, ': "$1"') // Keep quotes for string values
    .replace(/:\s*(\d+)/g, ': $1') // Remove quotes from numbers
    .replace(/:\s*(true|false|null)/g, ': $1'); // Remove quotes from booleans/null

  return header + categoriesJson + ';\n';
}

try {
  console.log('📖 Reading README.md...');
  const categories = parseReadme();
  
  console.log(`✅ Found ${categories.length} categories with ${categories.reduce((sum, cat) => sum + cat.tools.length, 0)} tools`);
  
  console.log('📝 Generating tools.ts...');
  const content = generateToolsFile(categories);
  
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`✅ Successfully generated ${outputPath}`);
  console.log('\n💡 Tip: The website will automatically reload if the dev server is running.');
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}

