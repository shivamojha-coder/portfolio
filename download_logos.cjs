const https = require('https');
const fs = require('fs');
const path = require('path');

const tools = [
  { name: 'HTML', bg: 'E34F26', fg: 'fff' },
  { name: 'CSS', bg: '1572B6', fg: 'fff' },
  { name: 'Tailwind', bg: '06B6D4', fg: 'fff' },
  { name: 'n8n', bg: 'FF6D5A', fg: 'fff' },
  { name: 'Clerk', bg: '6C47FF', fg: 'fff' },
  { name: 'ThreeJS', bg: 'ffffff', fg: '000' },
  { name: 'Flask', bg: 'ffffff', fg: '000' },
];

const downloadDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

async function downloadIcons() {
  for (const tool of tools) {
    const filename = tool.name.toLowerCase() + '.png';
    const filePath = path.join(downloadDir, filename);
    const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=${tool.bg}&color=${tool.fg}&size=512&font-size=0.33`;

    await new Promise((resolve, reject) => {
      https.get(url, (response) => {
        if (response.statusCode === 200) {
          const file = fs.createWriteStream(filePath);
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
            resolve();
          });
        } else {
          console.error(`Failed to download ${filename}, status code: ${response.statusCode}`);
          resolve(); // Resolve anyway to continue
        }
      }).on('error', (err) => {
        console.error(`Error downloading ${filename}: ${err.message}`);
        resolve(); // Resolve anyway to continue
      });
    });
  }
}

downloadIcons();
