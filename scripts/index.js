const initialCards = [
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
]; 

const editButton = document.querySelector('.profile__edit-button')
const popupUser = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')

const popupPlace = document.querySelector('.popup_place')
const buttonNewPlace = document.querySelector('.profile__add')
const closePopupButtonPlace = document.querySelector('.popup__close_place')

const userName = document.querySelector('.profile__user-name')
const userAnnotation = document.querySelector('.profile__annotation')

const newUserName = document.querySelector('.popup__input_user_name')
const newUserAnnotation = document.querySelector('.popup__input_user_annotation')

const formElement = document.querySelector('.popup__form')

const newPlaceElement = document.querySelector('.places')

function addNewPlaceCard(link, name) {
   const placeTemplate = document.querySelector('#place__card').content;
   const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

   placeElement.querySelector('.place__photo').src = link;
   placeElement.querySelector('.place__name').textContent = name;

   newPlaceElement.prepend(placeElement);
}

initialCards.forEach(addNewPlaceCard);

function addNewPlace() {                                                   // открыли попап Place
   popupPlace.classList.add('popup_is-open');
   }
buttonNewPlace.addEventListener('click', addNewPlace)

function addNewClass() {                                                   // открыли попап User
   popupUser.classList.add('popup_is-open');
   newUserName.value = userName.textContent;
   newUserAnnotation.value = userAnnotation.textContent;
}
editButton.addEventListener('click', addNewClass)



function removeNewClass() {                                                // закрыли попап User
   popupUser.classList.remove('popup_is-open');
}
closePopupButton.addEventListener('click', removeNewClass)

function popupPlaceClose() {                                                // закрыли попап Place
   popupPlace.classList.remove('popup_is-open');
}
closePopupButtonPlace.addEventListener('click', popupPlaceClose)

function formSubmitHandler(evt) {                                           // редактирование полей User
   evt.preventDefault();
   userName.textContent = newUserName.value;
   userAnnotation.textContent = newUserAnnotation.value;
   removeNewClass();
}
formElement.addEventListener('submit', formSubmitHandler);