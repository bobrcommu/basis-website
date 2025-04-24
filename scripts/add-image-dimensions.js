const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sizeOf = require('image-size');

// Find all image files in the public directory
const imageFiles = glob.sync(path.join(__dirname, '..', 'public', '**/*.{jpg,jpeg,png,webp,avif,gif}'));

// Create a mapping of image paths to dimensions
const imageDimensions = {};

// Process each image to get its dimensions
imageFiles.forEach(imageFile => {
  try {
    const dimensions = sizeOf(imageFile);
    const relativePath = '/' + path.relative(path.join(__dirname, '..', 'public'), imageFile).replace(/\\/g, '/');
    imageDimensions[relativePath] = dimensions;
    
    // Also store without extension to help with matching
    const pathWithoutExt = relativePath.substring(0, relativePath.lastIndexOf('.'));
    imageDimensions[pathWithoutExt] = dimensions;
  } catch (error) {
    console.error(`Error processing ${imageFile}:`, error.message);
  }
});

// Find all TSX/JSX files that might contain Next.js Image components
const reactFiles = glob.sync(path.join(__dirname, '..', 'src', '**/*.{tsx,jsx}'));

// Function to process a file and add dimensions to Image components
function processFile(filePath) {
  let fileContent = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check for Next.js Image components without width/height but with src
  const regex = /<Image\s+([^>]*)\s*\/>/g;
  const newContent = fileContent.replace(regex, (match, attributes) => {
    // If already has width and height, leave it alone
    if (attributes.includes('width=') && attributes.includes('height=')) {
      return match;
    }
    
    // Extract the src attribute
    const srcMatch = attributes.match(/src=["']([^"']+)["']/);
    if (!srcMatch) return match;
    
    const src = srcMatch[1];
    let imagePath = src;
    
    // Handle dynamic paths that start with /
    if (src.startsWith('/')) {
      imagePath = src;
    }
    
    // Check if we have dimensions for this image
    if (imageDimensions[imagePath]) {
      const { width, height } = imageDimensions[imagePath];
      
      // If the component already has fill, don't add dimensions
      if (attributes.includes('fill')) {
        return match;
      }
      
      // Add width and height attributes
      modified = true;
      return `<Image ${attributes} width={${width}} height={${height}} />`;
    }
    
    return match;
  });
  
  // Save the modified file if changes were made
  if (modified && fileContent !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

// Process all files
reactFiles.forEach(processFile);

console.log('Done adding dimensions to images!'); 