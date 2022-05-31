const editPlaceButton = document.querySelector('.profile__add')
let titlePopup = document.querySelector('.popup__title')

function addNewPlace() {                                                   // открыли попап
   popup.classList.add('popup_is-open');
   document.getElementById("newUserName").placeholder = 'Название';
   document.getElementsByClassName('.popup__input_user_annotation').placeholder = 'Ссылка на картинку';
}
editPlaceButton.addEventListener('click', addNewPlace)



