export default class WordTyper {
  private el: Element;
  private words: string[];
  private loopNumber = 0;
  private text = '';
  private isDeleting = false;
  /** Whether is not doing anything (neither typing nor deleting). */
  private isIdle = false;
  /** How long to wait before deleting after whole word was typed. */
  private static endWaitTime = 1500;
  /** How long to wait before typing after whole word was deleted. */
  private static startWaitTime = 400;
  /** Single key press time (slightly randomized in code). */
  private static characterTime = 250;
  /** Added to element when not typing or deleting. */
  private static idleClassName = 'word-typer--is-idle';

  constructor(el: Element, wordsString: string) {
    this.el = el;
    this.words = this.getCleanWords(wordsString);
    this.tick();
  }

  getCleanWords(wordsString: string) {
    const cleanWords: string[] = [];
    wordsString.split(',').forEach((uncleanWord) => {
      cleanWords.push(uncleanWord.trim());
    });
    return cleanWords;
  }

  tick() {
    const i = this.loopNumber % this.words.length;
    const fullTxt = this.words[i];

    if (this.isDeleting) {
      this.text = fullTxt.substring(0, this.text.length - 1);
    } else {
      this.text = fullTxt.substring(0, this.text.length + 1);
    }

    this.el.innerHTML = this.text;

    let delta = WordTyper.characterTime - Math.random() * 100;
    // Deleting is faster than typing.
    if (this.isDeleting) {
      delta /= 2;
    }

    this.isIdle = false;

    if (!this.isDeleting && this.text === fullTxt) {
      delta = WordTyper.endWaitTime;
      this.isDeleting = true;
      this.isIdle = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.isIdle = true;
      this.loopNumber++;
      delta = WordTyper.startWaitTime;
    }

    if (this.isIdle) {
      this.el.classList.add(WordTyper.idleClassName);
    } else {
      this.el.classList.remove(WordTyper.idleClassName);
    }

    setTimeout(this.tick.bind(this), delta);
  }
}
