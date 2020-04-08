import Modal from "../models/Modal";

export default class TextModal {
  constructor({ container, text, ...rest }) {
    this.text = text;
    this.container = container;
    this.restOptions = rest;
  }

  genere() {
    const paragraph = document.createElement("p");
    paragraph.textContent = this.text;

    return new Modal({
      container: this.container,
      ...this.restOptions,
    }).genereModal(paragraph);
  }
}
