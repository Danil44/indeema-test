export default class TableModalForm {
  constructor({ onSubmit, ...data }) {
    this.data = data;
    /**@param {object} data Object with input values
     * @param {array} inputs Array with inputs, this can be used for they validation
     */
    this.onSubmit = onSubmit;
  }

  genere() {
    const form = document.createElement("form");
    form.innerHTML = `<input type="text" name="name" placeholder="Name" value=${this.data.name} />
            <input type="text" name="surname" placeholder="Surname" value=${this.data.surname} />
            <input type="email" name="email" placeholder="Email" value=${this.data.email} />
            <button type="submit">Save</button>`;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit.call(this, form);
    });
    return form;
  }

  /**@param form Form element for getting it's inputs
   */
  _handleSubmit(form) {
    const name = form.querySelector('input[name="name"]');
    const surname = form.querySelector('input[name="surname"]');
    const email = form.querySelector('input[name="email"]');

    this.onSubmit(
      { name: name.value, surname: surname.value, email: email.value },
      [name, surname, email]
    );
  }
}
