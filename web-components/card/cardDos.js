class Card2 extends HTMLElement {
  cardBordeRadios = "5rem";
  cardPadding = "1rem";
  cardHeight = "27rem";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
}
