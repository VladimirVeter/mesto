const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')

const userName = document.querySelector('.profile__user-name')
const userAnnotation = document.querySelector('.profile__annotation')

const newUserName = document.querySelector('.popup__input-name')
const newUserAnnotation = document.querySelector('.popup__input-annotation')

const formElement = document.querySelector('.popup__form')

function addNewClass() {                                                   // открыли попап
   popup.classList.add('popup_is-open');
   newUserName.value = userName.textContent;
   newUserAnnotation.value = userAnnotation.textContent;
}
editButton.addEventListener('click', addNewClass)

function removeNewClass() {                                                // закрыли попап
   popup.classList.remove('popup_is-open');
}
closePopupButton.addEventListener('click', removeNewClass)

function formSubmitHandler(evt) {
   evt.preventDefault();
   userName.textContent = newUserName.value;
   userAnnotation.textContent = newUserAnnotation.value;
   popup.classList.remove('popup_is-open');
}
formElement.addEventListener('submit', formSubmitHandler);