/**
 * The <load-file> Web Component.
 *
 * Author: Danny Engelman
 * Source: https://github.com/load-file/load-file.github.io
 * License: https://unlicense.org/
 */
customElements.define('load-file', class extends HTMLElement {
  // declare default connectedCallback as sync so await can be used
  async connectedCallback(
    // call connectedCallback with parameter to *replace* SVG (of <load-file> persists)
    src = this.getAttribute('src'),
    // attach a shadowRoot if none exists (prevents displaying error when moving Nodes)
    // declare as parameter to save 4 Bytes: 'let '
    shadowRoot = this.shadowRoot || this.attachShadow({mode: 'open'})
  ) {
    if (src === null) {
      throw new Error('The src attribute is required');
    }
    const response = await fetch(src);

    let responseText: string;
    if (response.status !== 200) {
      console.error('Could not fetch src');
      responseText = response.statusText;
    } else {
      responseText = await (response).text();
    }

    // load SVG file from src=' async, parse to text, add to shadowRoot.innerHTML
    shadowRoot.innerHTML = responseText;

    // append optional <tag [shadowRoot]> Elements from inside <load-svg> after parsed <svg>
    shadowRoot.append(...this.querySelectorAll('[shadowRoot]'));

    // if 'replaceWith' attribute
    // then replace <load-svg> with loaded content <load-svg>
    // childNodes instead of children to include #textNodes also
    if (this.hasAttribute('replaceWith')) {
      this.replaceWith(...shadowRoot.childNodes);
    }
  }
});
