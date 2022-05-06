export default class ChildCycler {
  private el: Element;
  private static visibleLimit = 3;
  /** How long before next child is being displayed. */
  private static cycleTime = 2000;
  private static hiddenClassName = 'child-cycler-hidden';

  constructor(el: Element) {
    this.el = el;
    this.hideChildren();
    setTimeout(this.tick.bind(this), ChildCycler.cycleTime);
  }

  /** Hides all but first 4 children. */
  hideChildren() {
    for (let i = 0; i < this.el.children.length; i += 1) {
      if (i < ChildCycler.visibleLimit) {
        this.el.children[i].classList.remove(ChildCycler.hiddenClassName);
      } else {
        this.el.children[i].classList.add(ChildCycler.hiddenClassName);
      }
    }
  }

  tick() {
    // Step 1. move the last child element to the beginning.
    const lastChildIndex = this.el.children.length - 1;
    const lastChild = this.el.children[lastChildIndex];
    this.el.children[lastChildIndex].remove();
    this.el.insertBefore(lastChild, this.el.children[0]);
    // Step 2. set hidden class names again.
    // We use setTimeout to force the fade in animation to happen.
    setTimeout(this.hideChildren.bind(this), 1);
    // Step 3. repeat.
    setTimeout(this.tick.bind(this), ChildCycler.cycleTime);
  }
}
