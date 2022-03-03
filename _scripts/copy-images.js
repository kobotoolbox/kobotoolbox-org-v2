const fs = require('fs');

const destDir = './assets/images/';
const images = [
  'kobotoolbox_logo_default_for-light-bg.svg',
  'kobotoolbox_logo_mono_white.svg',
];

function copyImages() {
  console.info('Copying images from kobo-common…');
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, {force: true, recursive: true});
  }
  fs.mkdirSync(destDir);
  console.info('Cleanup done');
  images.forEach((filename) => {
    fs.copyFileSync(
      `node_modules/kobo-common/src/images/kobo-logo/${filename}`,
      `${destDir}${filename}`
    );
  });
  console.info('All images copied');
}

copyImages();
