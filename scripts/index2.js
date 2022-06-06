const elements = [
   {
      name: "First",
   },
   {
      name: "Second"
   },
   {
      name: "Third",
   },
   {
      name: "Fourth",
      link: "https://avatars.mds.yandex.net/get-zen_doc/1582174/pub_5d0bef6325509600afe0879e_5d0bf0dcb34feb00af5dde39/scale_1200"
   }
]

const container = document.querySelector('.container');                                            // выбрали на странице класс conteiner

const openPopup = (item, e) => {                                                                   // задали константу openPopup = безымянная функция (параметр item, event) {
   const popup = document.querySelector(`.popup_type_${item.name.toLowerCase()}`);                 // внутри функции задали константу popup = выбрали на странице класс .popup_type_ + придали параметру item.name нужный регистр и подставили (шаблонная строка + подстановка)
   popup.classList.add('popup_opened');                                                            // константе popup добавили класс .popup_opened
   popup.querySelector('.close-button').addEventListener('click', closePopup);                     // у попапа нашли элеменет .close-button, повесили на него обработчик по клику = closePopup 
   if (item.link) {                                                                                // ЕСЛИ есть у элемента значение item.link, то выполняем далее:
      popup.querySelector('.popup__title').textContent = item.name;                                //  - ищем у popupa (класс .popup__title') его текстовое содержимое = приравниваем к item.name
      popup.querySelector('.card__img').src = item.link;                                           //  - ищем у popupa (класс .card__img') его src содержимое = приравниваем к item.link
   }
}
const closePopup = (e) => {                                                                        // задали константу closePopup = безымянная функция (event) {
   e.target.closest('.popup').classList.remove('popup_opened');                                    // найдём ближайшего родителя с классом .popup, при стабатывании у его ребёнка target (=определяем какой именно попап) и удалим класс .popup_opened
   e.target.removeEventListener('click', closePopup);                                              // отключим слушателя по клику 
}

elements.forEach(item => {                                                                         // перебираем каждый элемент из списка elements. Для каждого элемента item запускаем функцию {
   const template = document.querySelector('#card').content.querySelector('.card').cloneNode(true);// задали константу template = ищем шаблон #card, клонируем содержимое тега .card 
   template.querySelector('.card__title').textContent = item.name;                                 // у константы template ищем класс .card__title и его текстовое содержимое = приравниваем к item.name
   const templateImg = template.querySelector('.card__img');                                       // задали константу templateImg = у константы template ищем класс .card__img
   if (item.link) {                                                                                // ЕСЛИ есть у найденного элемента значение item.link, то выполняем далее:
      templateImg.src = item.link;                                                                 //  - берём его src содержимое = приравниваем к item.link
      templateImg.alt = item.name;                                                                 //  - берём его alt содержимое = приравниваем к item.name
   } else {                                                                                        // ИНАЧЕ 
      templateImg.remove();                                                                        // константу templateImg удалить
   }
   template.addEventListener('click', function () {                                                // константе template вешаем обработчика: по клику выполняем функцию {
      openPopup(item);                                                                             // выполнить константу openPopup(item)
   });
   container.append(template);                                                                     // вставить в разметку container после шаблона
});
