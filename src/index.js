import './styles/index.scss';

import Api from './components/Api';
import InfoItem from './components/InfoItem';
import Section from './components/Section';
import Form from './components/Form';


const api = new Api();
const form = new Form(formSubmitHandler);
form.setEventListener();

const itemsField = document.querySelector('.table__items-list');

//Вспомогательный класс для рендера элементов таблицы

const itemsSheet = new Section(

  {
    renderer: (item) => {
      return createItem(item);
    }
  },

  document.querySelector('.table__items-list')
);

//Запрос и рендер данных

api.getInfo()
.then((data) => {
  itemsSheet.renderItems(data);
});

//Рендер элемента таблицы

function createItem(data) {
  return new InfoItem(
    '#tableItemTemplate',
    data
  )
  .returnItem();
}

//Генератор уникального id

function getUniqId() {
  const itemsList = itemsField.querySelectorAll('.table__item-row');
  const arrId = [];
  let id = 1;

  itemsList.forEach(item => {
    arrId.push(Number(item.getAttribute('data-id')));
  });

  const getUniq = () => {
    if (arrId.includes(id)) {
      id += 1;
      getUniq();
    }
  }

  getUniq();

  return id;
}

//Обработчик сабмита формы

function formSubmitHandler(values) {
  let newId = getUniqId();
  const data = { ...values, id: newId };

  itemsSheet.addItem(createItem(data));
}




