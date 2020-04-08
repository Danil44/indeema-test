import TableColumns from "../models/TableColumns";
export default class TableRow {
  constructor({
    id,
    name,
    surname,
    email,
    submitDate,
    onEdit = function () {},
    onDelete = function () {},
  }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.submitDate = submitDate;
    this.onEdit = onEdit;
    this.onDelete = onDelete;
  }

  get row() {
    const row = document.createElement("tr");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const buttonsCol = document.createElement("td");
    const columns = this._genereColumns();

    deleteButton.classList.add("js-delete-row-btn");
    deleteButton.textContent = "Delete";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", this._handleEdit.bind(this));
    deleteButton.addEventListener("click", () =>
      this._handleDelete.call(this, row)
    );

    buttonsCol.insertAdjacentElement("beforeend", deleteButton);
    buttonsCol.insertAdjacentElement("beforeend", editButton);

    row.appendChild(columns);
    row.insertAdjacentElement("beforeend", buttonsCol);

    return row;
  }

  _handleDelete(row) {
    row.remove();
    this.onDelete(this.id);
  }

  _handleEdit() {
    this.onEdit({
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      submitDate: this.submitDate,
    });
  }

  _genereColumns() {
    return new TableColumns().genereColumns({
      name: this.name,
      surname: this.surname,
      email: this.email,
      submitDate: this.submitDate,
    });
  }
}
