export default class Modal {
  /**@param {string} container is a selector's name of container that will store the modal window*/
  constructor({
    container,
    beforeGenere = function () {},
    beforeClose = function () {},
    afterClose = function () {},
    afterGenere = function () {},
    withAnimation = false,
  }) {
    this.container = container;
    this.beforeGenere = beforeGenere;
    this.beforeClose = beforeClose;
    this.afterClose = afterClose;
    this.afterGenere = afterGenere;
    this.withAnimation = withAnimation;
    this.modal = null;
  }

  _genereButton(id, textContent, onClick) {
    const closeButtonElement = document.createElement("button");
    closeButtonElement.textContent = textContent;
    closeButtonElement.id = id;
    closeButtonElement.addEventListener("click", onClick);

    return closeButtonElement;
  }

  _genereWrapperElement(id, className) {
    const wrapperElement = document.createElement("div");
    wrapperElement.classList.add(className);
    wrapperElement.id = id;

    return wrapperElement;
  }

  _fadeIn(element) {
    element.style.display = "flex";
    setTimeout(() => (element.style.opacity = 1), 100);
  }

  _fadeOut(element) {
    element.style.opacity = 0;
    setTimeout(() => element.remove(), 100);
  }

  genereModal(content) {
    this.beforeGenere();
    const container = document.querySelector(`.${this.container}`);
    const wrapperElement = this._genereWrapperElement(
      "js-modal",
      "modal-container"
    );
    this.modal = wrapperElement;

    const closeButtonElement = this._genereButton(
      "js-close-modal-btn",
      "close",
      this.handleCloseModal.bind(this)
    );

    wrapperElement.insertAdjacentElement("afterbegin", closeButtonElement);
    wrapperElement.insertAdjacentElement("beforeend", content);

    if (this.withAnimation) {
      wrapperElement.style.opacity = 0;
      wrapperElement.style.display = "none";
    }
    container.insertAdjacentElement("beforeend", wrapperElement);

    if (this.withAnimation) {
      this._fadeIn(wrapperElement);
    }

    this.afterGenere();
  }

  handleCloseModal() {
    this.beforeClose();
    this.close();
    this.afterClose();
  }

  close() {
    if (this.withAnimation) {
      this._fadeOut(this.modal);
    } else {
      modal.remove();
    }
  }
}
