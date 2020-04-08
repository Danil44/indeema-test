export default class Printer {
  constructor(element, value) {
    this.element = element;
    this.value = value;
  }

  print() {
    this.element.textContent = this.value;
  }
}
