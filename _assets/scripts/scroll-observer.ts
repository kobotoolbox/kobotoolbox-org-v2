export default class ScrollObserver {
  constructor() {
    this.onScroll();
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    if (window.document.documentElement.scrollTop >= 1) {
      document.body.classList.add('root--is-scrolled');
    } else {
      document.body.classList.remove('root--is-scrolled');
    }
  }
}
