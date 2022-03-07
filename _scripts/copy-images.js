const fs = require('fs');
const path = require('path');

const destDir = './assets/images/';

/**
 * This will remove existing images directory and create `assets/`
 * if it doesn't exist yet.
 */
function cleanup() {
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, {force: true, recursive: true});
  }

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, {recursive: true});
  }

  console.info('Cleanup done');
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to);
  }
  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

function copyAssetsImages() {
  console.info('Copying images from assets…');
  copyFolderSync('./_assets/images/', destDir);
}

function copyCommonImages() {
  const images = [
    'kobotoolbox_logo_default_for-light-bg.svg',
    'kobotoolbox_logo_mono_white.svg',
  ];

  console.info('Copying images from kobo-common…');

  if (!fs.existsSync(destDir + 'common/')) {
    fs.mkdirSync(destDir + 'common/', {recursive: true});
  }

  images.forEach((filename) => {
    fs.copyFileSync(
      `node_modules/kobo-common/src/images/kobo-logo/${filename}`,
      `${destDir}/common/${filename}`
    );
  });
}

// FYI: this order is important:
cleanup();
copyAssetsImages();
copyCommonImages();
