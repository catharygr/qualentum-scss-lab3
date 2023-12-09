const { render } = require("sass");

class Card2 extends HTMLElement {
  cardBordeRadios = "5rem";
  cardPadding = "1rem";
  cardHeight = "27rem";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["card-borde-radios", "card-padding", "card-height"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
    this.attributesMap[name] = newValue;
    this.render();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = "";
    shadowRoot.appendChild(this.htmlElement().content);
  }
}
