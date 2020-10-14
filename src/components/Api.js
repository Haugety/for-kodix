//Класс с запросами

export default class Api {
  constructor() {
    this._baseUrl = 'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';
  }

  // Получение данных

  getInfo() {
    return fetch(this._baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  // Отправка данных

  // setInfo(data, token) {
  //   return fetch(this._baseUrl, {
  //     method: 'POST',
  //     headers: {
  //       authorization: token,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       id: data.id
  //       title: data.title,
  //       description: data.description,
  //       year: data.year,
  //       color: data.color,
  //       status: data.status,
  //       price: data.price
  //     })
  //   })
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Ошибка: ${res.status}`);
  //   });
  // }

}
