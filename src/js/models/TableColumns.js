export default class TableColumns {
  constructor() {}

  genereColumns(data) {
    const fragment = new DocumentFragment();
    for (let [key, value] of Object.entries(data)) {
      const col = document.createElement("td");
      col.textContent = value;
      col.setAttribute("data-name", key);

      fragment.appendChild(col);
    }
    return fragment;
  }
}
