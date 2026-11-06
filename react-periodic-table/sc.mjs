// extract-sources-from-map.mjs
// Usage: node extract-sources-from-map.mjs path/to/main.chunk.js.map [output-dir]

import fs from "fs";
import path from "path";
import url from "url";

const [,, mapPath, outDirArg] = process.argv;

if (!mapPath) {
  console.error("❌ Usage: node extract-sources-from-map.mjs path/to/file.js.map [output-dir]");
  process.exit(1);
}

const outputDir = outDirArg || "recovered-src";

// Resolve relative paths
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const mapFullPath = path.resolve(__dirname, mapPath);
const outFullPath = path.resolve(__dirname, outputDir);

// Read and parse the source map
const raw = JSON.parse(fs.readFileSync(mapFullPath, "utf8"));
const sources = raw.sources || [];
const contents = raw.sourcesContent || [];

if (!contents.length) {
  console.error("⚠️  No 'sourcesContent' found in this .map file — cannot recover inline source code.");
  console.error("   The map may reference external source files instead.");
  process.exit(1);
}

fs.mkdirSync(outFullPath, { recursive: true });

sources.forEach((src, i) => {
  const content = contents[i];
  if (!content) return;
  
  // Clean up path (some sources have like 'webpack:///src/App.js')
  const cleanPath = src
    .replace(/^webpack:\/\/\/?/, "")
    .replace(/^\.?\//, "");
    
  const outPath = path.join(outFullPath, cleanPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content, "utf8");
  console.log(`✅ Saved: ${cleanPath}`);
});

console.log(`\n✨ Done! Extracted ${sources.length} files to '${outFullPath}/'`);
