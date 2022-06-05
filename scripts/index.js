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
const formPlaceElement = document.querySelector('.popup__form_place')

const newPlaceElement = document.querySelector('.elements')

const buttonTrash = document.querySelector('.place__delete-button')

const LikeButton = document.querySelector('.place__like-button')

const newPlaceName = document.querySelector('.popup__input_place_name')
const newPlaceLink = document.querySelector('.popup__input_place_link')


function addNewPlaceCard(item) {
   const placeTemplate = document.querySelector('#place__card').content;
   const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

   placeElement.querySelector('.place__name').textContent = item.name;
   placeElement.querySelector('.place__photo').src = item.link;

   placeElement.querySelector('.place__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('place__like-button-active');
   });


   placeElement.querySelector('.place__delete-button').addEventListener('click', evt => {
      const placeElement = evt.currentTarget.parentElement;
      placeElement.remove();
      
   });

   newPlaceElement.prepend(placeElement);
}


function handlerPlaceInputs(evt) {                      // редактирование полей Place 
   evt.preventDefault();
   
   const item = {
      name: newPlaceName.value,
      link: newPlaceLink.value,
   }

   // newPlaceName.value = item.name;               // newPlaceName.value = placeElement.textContent;
   // newPlaceLink.value = item.link;               // newPlaceLink.value = placeElement.src;
   
   addNewPlaceCard(item);
   popupPlaceClose();
}
formPlaceElement.addEventListener('submit', handlerPlaceInputs);



function formSubmitHandler(evt) {                             // редактирование полей User рабочий
   evt.preventDefault();
   userName.textContent = newUserName.value;
   userAnnotation.textContent = newUserAnnotation.value;
   removeNewClass();
}
formElement.addEventListener('submit', formSubmitHandler);

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





