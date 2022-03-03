import ScrollObserver from './scroll-observer';

function initializeWebsite() {
  const scrollObs = new ScrollObserver();
}

// Previously this was hooked up to `DOMContentLoaded`, but `hubspot` is
// causing it to stop working,
(() => {
  initializeWebsite();
})();

