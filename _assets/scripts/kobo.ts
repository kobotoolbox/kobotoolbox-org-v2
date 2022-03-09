import ScrollObserver from './scroll-observer';
import Faqs from './faqs';

function initializeWebsite() {
  const scrollObs = new ScrollObserver();
  const faqs = new Faqs();
}

// Previously this was hooked up to `DOMContentLoaded`, but `hubspot` is
// causing it to stop working,
(() => {
  initializeWebsite();
})();

