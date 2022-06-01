const editButton = document.querySelector('.profile__edit-button')
const popupUser = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')

const popupPlace = document.querySelector('.popup_place')
const buttonNewPlace = document.querySelector('.profile__add')

const userName = document.querySelector('.profile__user-name')
const userAnnotation = document.querySelector('.profile__annotation')

const newUserName = document.querySelector('.popup__input_user_name')
const newUserAnnotation = document.querySelector('.popup__input_user_annotation')

const formElement = document.querySelector('.popup__form')


function addNewPlace() {                                                   // открыли попап
   popupPlace.classList.add('popup_is-open');
   }
buttonNewPlace.addEventListener('click', addNewPlace)

function addNewClass() {                                                   // открыли попап
   popupUser.classList.add('popup_is-open');
   newUserName.value = userName.textContent;
   newUserAnnotation.value = userAnnotation.textContent;
}
editButton.addEventListener('click', addNewClass)



function removeNewClass() {                                                // закрыли попап
   popupUser.classList.remove('popup_is-open');
}
closePopupButton.addEventListener('click', removeNewClass)

function formSubmitHandler(evt) {
   evt.preventDefault();
   userName.textContent = newUserName.value;
   userAnnotation.textContent = newUserAnnotation.value;
   removeNewClass();
}
formElement.addEventListener('submit', formSubmitHandler);