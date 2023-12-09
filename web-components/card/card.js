class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.typeOfCard = this.getAttribute("type-of-card");
    this.classes = this.getAttribute("classes");
  }

  // Método que retorna un array con los atributos que se quieren observar para detectar cambios en ellos. Pero en este caso no se usa porque no se va a cambiar ningún atributo de manera dinámica.
  // static get observedAttributes() {
  //   return ["type-of-card"];
  // }

  // Método que se ejecuta cuando el elemento se conecta al DOM
  connectedCallback() {
    this.render();
  }

  // Método que se llama cuando se cambia un atributo observado pero en este caso no se usa porque no se va a cambiar ningún atributo de manera dinámica
  // attributeChangedCallback(name, oldValue, newValue) {
  //   this.typeOfCard = newValue;
  //   this.render();
  // }

  // Método que se encarga de renderizar el contenido de la tarjeta en función del tipo de tarjeta
  render() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = "";
    if (this.typeOfCard === "colores") {
      shadowRoot.appendChild(this.coloresHtmlToElement().content);
    }
    if (this.typeOfCard === "contenido") {
      shadowRoot.appendChild(this.contenidoHtmlToElement().content);
    }
  }
  // Método que genera el contenido HTML para el tipo de tarjeta "colores"
  coloresHtmlToElement() {
    const classesAttr = this.classes ? this.classes : "";
    const html = `
    <style>
    .guide-color ul {
      padding: 10rem 1rem 1rem 1rem;
      border-radius: 0.5rem;
      height: 19rem;
      list-style: none;
      margin: 0;
    }
    .guide-color li {
      padding-top: 0.5rem;
    }
    .bg-primary-color {
      background-color: #c9ab81;
    }
    .bg-secondary-color {
      background-color: #59335c;
    }
    .bg-neutral-color {
      background-color: #333333;
    }
    .bg-warning-color {
      background-color: #cd0707;
    }
    .bg-info-color {
      background-color: #f0ad4e;
    }
    .bg-text-color {
      background-color: #ffffff;
    }
    hr {
      border-style: solid;
    }
    .font-contrast-color b, .font-contrast-color hr, .font-contrast-color {
      color: var(--neutral-dark-color);
    }
  
    </style>
  
      <div class="guide-color">
      <ul class="${classesAttr}">
          <li><hr></li>
          <slot name="card-color-content"></slot>
      </ul>
  </div>
    
    `;
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template;
  }

  // Método que genera el contenido HTML para el tipo de tarjeta "contenido"
  contenidoHtmlToElement() {
    const html = `
    <style>
      .guide-content__container {
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: var(--secondary-color);
        height: 27rem;
    }
    </style>

    <div class="guide-content">
    <div class="guide-content__container">
      <div class="guide-content__example">
      <slot name="card-content-example"></slot>
    
      </div>
      <div class="guide-content__properties">
        <slot name="card-content-properties"></slot>
      </div>
    </div>
  </div>
  
  
    `;
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template;
  }
}

// Registo del componente personalizado
window.customElements.define("card-component", Card);
