//Класс формы

export default class Form {
  constructor(formSubmit) {

    this._form = document.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__input');

    this._colorField = this._form.querySelector('.radio-list');
    this._radioList = this._colorField.querySelectorAll('.radio-list__button');

    this._selection = this._form.querySelector('.selection');
    this._selectionTitle = this._selection.querySelector('.selection__title');
    this._selectionLabels = this._selection.querySelectorAll('.selection__label');

    this._statusField = this._selection.querySelector('.selection__list');
    this._statusList = this._statusField.querySelectorAll('.selection__input');

    this._submitButton = this._form.querySelector('.submit-button');
    this._formSubmit = formSubmit;
  }

  //Получение данных из формы

  _getValues() {

    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    this._radioList.forEach(button => {
      if (button.checked) {
        this._formValues[button.name] = button.value;
      }
    });

    this._statusList.forEach(status => {
      if (status.checked && status.id !== 'Select0') {
        this._formValues[status.name] = status.value;
      }
    });

    return this._formValues;
  }

  //Слушатели

  setEventListener() {

    //Обработчик сабмита и сброс

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getValues());
      this._form.reset();
      this._selectionTitle.textContent = this._selectionTitle.getAttribute('data-default');
    });

    //Слушатели кастомного списка select

    this._selectionTitle.addEventListener('click', () => {
      if (this._selection.classList.contains('selection_active')) {
        this._selection.classList.remove('selection_active');
      } else {
        this._selection.classList.add('selection_active');
      }
    });

    for (let i = 0; i < this._selectionLabels.length; i++) {
      this._selectionLabels[i].addEventListener('click', (evt) => {
        this._selectionTitle.textContent = evt.target.textContent;
        this._selection.classList.remove('selection_active');
      });
    }
  }

}
