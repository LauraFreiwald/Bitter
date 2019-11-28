export class BittElement extends HTMLElement {
  constructor(text, username) {
    // Always call super() first in constructor
    super();

    // create a paragraph element
    let bittElement = document.createElement("p");

    // add bitt text and username to the paragraph
    bittElement.innerHTML = text + "<br> <small>" + username + "</small>";

    // append the element to the "shadow" DOM
    let shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(bittElement);
  }
}

// add <bitt-element> as a custom HTML element
customElements.define('bitt-element', BittElement);