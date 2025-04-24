const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'optimized');
const MAX_WIDTH = 1920; // Maximum width for large images
const QUALITY = {
  jpg: 80,
  webp: 75,
  avif: 60
};

// Check if optimized directory exists, create if not
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all image files
const imageFiles = glob.sync(path.join(PUBLIC_DIR, '**/*.{jpg,jpeg,png,gif,webp}'), {
  ignore: path.join(PUBLIC_DIR, 'optimized', '**')
});

console.log(`Found ${imageFiles.length} images to process...`);

// Process each image
(async () => {
  for (const file of imageFiles) {
    try {
      const filename = path.basename(file);
      const fileExt = path.extname(file).slice(1).toLowerCase();
      const baseName = path.basename(file, path.extname(file));
      
      console.log(`Processing: ${filename}`);
      
      // Get image metadata
      const metadata = await sharp(file).metadata();
      
      // Skip already optimized images
      if (metadata.width <= MAX_WIDTH) {
        console.log(`Skipping ${filename} - already at target size or smaller`);
        continue;
      }
      
      // Target width (either MAX_WIDTH or original width if smaller)
      const targetWidth = Math.min(metadata.width, MAX_WIDTH);
      const pipeline = sharp(file).resize(targetWidth);
      
      // Create WebP version (always)
      await pipeline
        .webp({ quality: QUALITY.webp })
        .toFile(path.join(OUTPUT_DIR, `${baseName}.webp`));
        
      // Create AVIF version (always)
      await pipeline
        .avif({ quality: QUALITY.avif })
        .toFile(path.join(OUTPUT_DIR, `${baseName}.avif`));
      
      // Create optimized original format (jpeg/png)
      if (fileExt === 'jpg' || fileExt === 'jpeg') {
        await pipeline
          .jpeg({ quality: QUALITY.jpg, mozjpeg: true })
          .toFile(path.join(OUTPUT_DIR, `${baseName}.jpg`));
      } else if (fileExt === 'png') {
        await pipeline
          .png({ quality: QUALITY.jpg, compressionLevel: 9 })
          .toFile(path.join(OUTPUT_DIR, `${baseName}.png`));
      }

      console.log(`Optimized: ${filename}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
  
  console.log('Image optimization complete!');
})();

// Create a helper file with the list of optimized images
const createManifest = () => {
  const optimizedFiles = glob.sync(path.join(OUTPUT_DIR, '**/*'));
  const manifest = optimizedFiles.map(file => ({
    original: path.relative(PUBLIC_DIR, file.replace('optimized/', '')).replace(/\\/g, '/'),
    optimized: path.relative(PUBLIC_DIR, file).replace(/\\/g, '/'),
    width: 0,
    height: 0,
    size: 0
  }));
  
  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'lib', 'optimized-images.json'),
    JSON.stringify(manifest, null, 2)
  );
};

// Add to package.json: "optimize-images": "node scripts/optimize-images.js" 