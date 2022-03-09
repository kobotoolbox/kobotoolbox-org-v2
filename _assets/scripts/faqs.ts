export default class Faqs {
  private readonly selectors = {
    root: 'data-faqs',
    item: 'data-faqs-item',
    trigger: 'data-faqs-trigger',
  };

  private readonly activeClassName = 'faqs__item--opened';

  constructor() {
    this.init();
  }

  init() {
    const rootEl = document.querySelector(`*[${this.selectors.root}]`);
    if (rootEl !== null) {
      rootEl.querySelectorAll(`*[${this.selectors.item}]`).forEach(
        this.activateItem.bind(this)
      );
    }
  }

  activateItem(itemEl: Element) {
    const triggerEl = itemEl.querySelector(`*[${this.selectors.trigger}]`);
    if (triggerEl !== null) {
      triggerEl.addEventListener('click', this.onTriggerClick.bind(this, itemEl));
    }
  }

  onTriggerClick(itemEl: Element, evt: Event) {
    evt.preventDefault();
    if (itemEl.classList.contains(this.activeClassName)) {
      itemEl.classList.remove(this.activeClassName);
    } else {
      itemEl.classList.add(this.activeClassName);
    }
  }
}
