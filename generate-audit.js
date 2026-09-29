const fs = require('fs');
const path = require('path');

const dirsToScan = ['components', 'app'];
const regex = /\b(m[tbyxlr]-\d+|space-[xy]-\d+)\b/g;

let output = '# Enterprise Spacing Architecture Audit\n\n';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      const matches = [];
      
      lines.forEach((line, i) => {
        if (line.match(regex) && line.includes('className=')) {
          matches.push({ line: i + 1, content: line.trim() });
        }
      });
      
      if (matches.length > 0) {
        output += `## ${fullPath.replace(/\\/g, '/')}\n\n`;
        matches.forEach(m => {
          output += `- Line ${m.line}: \`${m.content}\`\n`;
        });
        output += '\n';
      }
    }
  }
}

dirsToScan.forEach(dir => walkDir(dir));

const outPath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c2c4db8d-8b2d-4f80-b783-b94193f1c65b\\spacing-audit.md';
const outDir = path.dirname(outPath);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(outPath, output);
console.log('Audit complete.');
