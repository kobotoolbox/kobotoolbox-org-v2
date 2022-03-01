import ScrollObserver from './scroll-observer';

function initializeWebsite() {
  const scrollObs = new ScrollObserver();
}

window.addEventListener('DOMContentLoaded', initializeWebsite.bind(this));

