const editButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const closePopupButton = document.querySelector('.popup__close')
const saveButton = document.querySelector('.popup__button')

const titleElement = document.querySelector('.profile__user-name')
const nameFieldElement = document.querySelector('.popup__input-name')

const annotationElement = document.querySelector('.profile__annotation')
const annotationFieldElement = document.querySelector('.popup__input-annotation')

//console.log(editButton)
//console.log(popup)

editButton.addEventListener('click', function() {
   popup.classList.add('popup_is-open')
   nameFieldElement.value = titleElement.textContent;
   annotationFieldElement.value = annotationElement.textContent;
})

closePopupButton.addEventListener('click', function() {
   popup.classList.remove('popup_is-open')
   
})

saveButton.addEventListener('click', function () {
   popup.classList.remove('popup_is-open')
   titleElement.textContent = nameFieldElement.value;
   annotationElement.textContent = annotationFieldElement.value;
})





let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__input-name')
let c = document.querySelector('.popup__input-annotation')

function formSubmitHandler(evt) {
   evt.preventDefault();

   editName.value = nameInput.textContent;
   editAnnotation.value = jobInput.textContent;

   nameInput.textContent = editName.value;
   jobInput.textContent = editAnnotation.value;
}

formElement.addEventListener('submit', formSubmitHandler); 