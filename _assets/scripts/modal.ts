export default class Modal {
  private readonly selectors = {
    modal: 'data-modal',
    modalContent: 'data-modal-content',
    modalCloser: 'data-modal-closer',
    instanceOpener: 'data-modal-instance-opener',
    instanceContent: 'data-modal-instance-content',
  };

  private readonly visibleClassName = 'modal--visible';

  private modalEl;
  private contentEl;
  private closerEl;

  private onKeyDownBound = this.onKeyDown.bind(this);

  constructor() {
    this.modalEl = document.querySelector(`*[${this.selectors.modal}]`);
    this.contentEl = document.querySelector(`*[${this.selectors.modalContent}]`);
    this.closerEl = document.querySelector(`*[${this.selectors.modalCloser}]`);

    if (
      this.modalEl !== null &&
      this.contentEl !== null &&
      this.closerEl !== null
    ) {
      this.init();
    } else {
      console.info('Modal elements not found - not initializing.');
    }
  }

  init() {
    // Step 1. Find all openers
    document.querySelectorAll(`*[${this.selectors.instanceOpener}]`).forEach(
      this.activateInstance.bind(this)
    );

    this.closerEl?.addEventListener('click', this.hideModal.bind(this));
  }

  activateInstance(instanceEl: Element) {
    const contentId = instanceEl.getAttribute(this.selectors.instanceOpener);
    if (contentId !== null) {
      instanceEl.addEventListener('click', this.showModal.bind(this, contentId));
    }
  }

  showModal(contentId: string) {
    this.modalEl?.classList.add(this.visibleClassName);
    const instanceContentEl = document.querySelector(
      `*[${this.selectors.instanceContent}="${contentId}"]`
    );

    if (
      this.contentEl !== null &&
      this.contentEl instanceof HTMLDivElement &&
      instanceContentEl !== null && instanceContentEl instanceof HTMLTemplateElement
    ) {
      this.contentEl.innerHTML = instanceContentEl.innerHTML;
    }

    this.listenCloseOnEsc();
  }

  hideModal() {
    this.modalEl?.classList.remove(this.visibleClassName);
    if (this.contentEl !== null) {
      this.contentEl.innerHTML = '';
    }

    this.unlistenCloseOnEsc();
  }

  listenCloseOnEsc() {
    document.addEventListener('keydown', this.onKeyDownBound);
  }

  unlistenCloseOnEsc() {
    document.removeEventListener('keydown', this.onKeyDownBound);
  }

  onKeyDown(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      this.hideModal();
    }
  }
}
