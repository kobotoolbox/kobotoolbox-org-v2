/**
 * This script copies `_assets/images` and `_assets/videos` to `assets`
 * directory, which is being used also by parcel and is not stored in git.
 */

const fs = require('fs');
const path = require('path');

const destImagesDir = './assets/images/';
const destVideosDir = './assets/videos/';

/**
 * This will remove existing images directory and create `assets/`
 * if it doesn't exist yet.
 */
function cleanup() {
  // Wipe and create images directory
  if (fs.existsSync(destImagesDir)) {
    fs.rmSync(destImagesDir, {force: true, recursive: true});
  }
  if (!fs.existsSync(destImagesDir)) {
    fs.mkdirSync(destImagesDir, {recursive: true});
  }

  // Wipe and create videos directory
  if (fs.existsSync(destVideosDir)) {
    fs.rmSync(destVideosDir, {force: true, recursive: true});
  }
  if (!fs.existsSync(destVideosDir)) {
    fs.mkdirSync(destVideosDir, {recursive: true});
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

function copyAssetsVideos() {
  console.info('Copying videos from assets…');
  copyFolderSync('./_assets/videos/', destVideosDir);
}

function copyAssetsImages() {
  console.info('Copying images from assets…');
  copyFolderSync('./_assets/images/', destImagesDir);
}

function copyCommonImages() {
  const images = [
    'kobotoolbox_logo_default_for-light-bg.svg',
    'kobotoolbox_logo_mono_white.svg',
  ];

  console.info('Copying images from kobo-common…');

  if (!fs.existsSync(destImagesDir + 'common/')) {
    fs.mkdirSync(destImagesDir + 'common/', {recursive: true});
  }

  images.forEach((filename) => {
    fs.copyFileSync(
      `node_modules/kobo-common/src/images/kobo-logo/${filename}`,
      `${destImagesDir}/common/${filename}`
    );
  });
}

// FYI: this order is important:
cleanup();
copyAssetsVideos();
copyAssetsImages();
copyCommonImages();
