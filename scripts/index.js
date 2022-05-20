const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')

const titleElement = document.querySelector('profile__user-name')
const nameFieldElement = document.querySelector('popup__input-name')

//console.log(editButton)
//console.log(popup)

editButton.addEventListener('click', function() {
   popup.classList.add('popup_isOpen')
   nameFieldElement.value = titleElement.textContent;
})

closePopupButton.addEventListener('click', function() {
   popup.classList.remove('popup_isOpen')
   titleElement.textContent = nameFieldElement.value;
})








let formElement = document.querySelector('popup__form')
let nameInput = document.querySelector('popup__input-name')
let jobInput = document.querySelector('popup__input-annotation')

function formSubmitHandler(evt) {
   evt.preventDefault();

}

formElement.addEventListener('submit', formSubmitHandler); 