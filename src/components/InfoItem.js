// Элемент таблицы с данными

export default class InfoItem {

  constructor(templateSelector, data) {
    this._templateSelector = templateSelector;
    this._data = data;
    this._id = data.id;
    this._title = data.title;
    this._description = data.description;
    this._year = data.year;
    this._color = data.color;
    this._status = data.status;
    this._price = data.price;
  }

  //Создание разметки элемента таблицы и заполнение данными

  _createItem() {
    this._itemTemplate = document.querySelector(`${this._templateSelector}`).content;
    this._item = this._itemTemplate.querySelector('.table__item-row').cloneNode(true);
    this._itemTitle = this._item.querySelector('.table__item_name');
    this._itemDescription = this._item.querySelector('.table__item_description');
    this._itemYear = this._item.querySelector('.table__item_year');
    this._itemColor = this._item.querySelector('.table__color-box');
    this._itemStatus = this._item.querySelector('.table__item_status');
    this._itemPrice = this._item.querySelector('.table__item_price');

    this._item.setAttribute('data-id', this._id);
    this._itemTitle.textContent = this._title;
    this._itemDescription.textContent = this._description;
    this._itemYear.textContent = this._year;
    this._itemColor.setAttribute('name', this._color);
    this._itemStatus.textContent = this._itemStatusHandler();
    this._itemPrice.textContent = this._itemPriceHandler();


    this._item.querySelector('.table__item_remove').addEventListener('click', () => this._deleteItem());

    return this._item;
  }

  //Обработчик цены

  _itemPriceHandler() {
    let formatPrice = 0;

    typeof this._price === 'number'
    ? formatPrice = `${this._price.toLocaleString()} руб.`
    : formatPrice = `${Number(this._price.replace(/\s+/g, '')).toLocaleString()} руб.`

    return formatPrice;
  }

  //Обработчик  статуса

  _itemStatusHandler() {
    if (this._status === 'pednding' || this._status === 'pending') {
      return 'Ожидается';
    }
    else if (this._status === 'out_of_stock') {
      return 'Нет в наличии';
    }
    return 'В наличии';
  }

  //Удаление элемента

  _deleteItem = () => {
    this._item.remove();
    this._item = null;
  }

  returnItem() {
    return this._createItem();
  }

}
