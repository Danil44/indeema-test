import TableRow from "./components/TableRow";
import TableModalForm from "./components/TableModalForm";
import Modal from "./models/Modal";
import generateId from "./helpers/id";

let tableData = [];

const form = document.getElementById("js-table-form");
form.addEventListener("submit", handleTableFormSubmit);

function handleTableFormSubmit(e) {
  e.preventDefault();

  const name = form.querySelector('input[name="name"]');
  const surname = form.querySelector('input[name="surname"]');
  const email = form.querySelector('input[name="email"]');
  const submitDate = new Date().toLocaleString();

  const formIsNotValid = validateInputs([name, surname, email]);

  if (formIsNotValid) return;
  tableData.push({
    id: generateId(),
    name: name.value,
    surname: surname.value,
    email: email.value,
    submitDate,
  });
  updateRows();

  removeFieldWarnings([name, surname, email]);

  clearTableForm([name, surname, email]);
}

function clearTableForm(inputs) {
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].value = "";
  }
}

function validateInputs(inputs) {
  let hasError = false;
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].value) continue;

    showEmptyFieldWarning(inputs[index]);

    hasError = true;
  }
  return hasError;
}

function showEmptyFieldWarning(input) {
  input.classList.add("field-error");
}

function removeFieldWarnings(inputs) {
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].classList.remove("field-error");
  }
}

function openEditFormModal(data) {
  const modal = new Modal({
    container: "js-modal-container",
    withAnimation: true,
  });

  modal.genereModal(
    new TableModalForm({
      ...data,
      onSubmit: (submitedData, inputs) =>
        onEditSubmit({ id: data.id, modal, submitedData }, inputs),
    }).genere()
  );
}

function onEditSubmit({ id, modal, submitedData }, inputs) {
  const result = [];

  const formIsNotValid = validateInputs(inputs);

  if (formIsNotValid) return;

  for (let index = 0; index < tableData.length; index++) {
    if (id === tableData[index].id) {
      tableData[index] = submitedData;
      tableData[index].submitDate = new Date().toLocaleString();
    }
    result.push(tableData[index]);
  }

  tableData = result;

  modal.close();

  updateRows();
}

function updateRows() {
  const fragment = new DocumentFragment();
  for (let index = 0; index < tableData.length; index++) {
    fragment.appendChild(
      new TableRow({
        onEdit: (data) => openEditFormModal(data),
        onDelete: (id) => deleteRow(id),
        id: tableData[index].id,
        ...tableData[index],
      }).row
    );
  }
  const table = document.getElementById("js-table-body");
  table.innerHTML = "";
  table.appendChild(fragment);
}

function deleteRow(id) {
  const result = [];
  for (let index = 0; index < tableData.length; index++) {
    if (tableData[index].id === id) continue;
    result.push(tableData[index]);
  }
  tableData = result;
}
