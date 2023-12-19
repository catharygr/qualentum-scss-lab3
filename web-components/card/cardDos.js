class Card2 extends HTMLElement {
  cardBorderRadius = "5rem";
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
    console.log(this.attributeChangedCallback(name, oldValue, newValue));
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

  htmlElement() {
    const html = `
    <style>
      .card-component__container {
        padding: ${this.cardPadding};
        border-radius: ${this.cardBorderRadius};
        background-color: var(card-component__container);
        height: ${this.cardHeight};
      }
    </style>


    <div class="card-component">
    <div class="card-component__container">
      <slot></slot>
    </div>
    </div>
    
    `;
    const template = document.createElement("template");
    template.innerHTML = html;
    return template;
  }
}

customElements.define("card-component", Card2);
