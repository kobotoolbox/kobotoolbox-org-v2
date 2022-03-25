import ScrollObserver from './scroll-observer';
import Faqs from './faqs';
import Modal from './modal';
import WordTyper from './word-typer';
import './featured-posts';
import './load-file';

function runWordTypers() {
  const typerElements = document.querySelectorAll('*[data-word-typer');

  typerElements.forEach((typerEl) => {
    const words = typerEl.getAttribute('data-word-typer');
    if (words) {
      new WordTyper(typerEl, words);
    }
  });
}

function initializeWebsite() {
  new ScrollObserver();
  new Faqs();
  new Modal();
  runWordTypers();
}

// Previously this was hooked up to `DOMContentLoaded`, but `hubspot` is
// causing it to stop working,
(() => {
  initializeWebsite();
})();

