const editButton = document.querySelector('.profile__edit-button')                  // вызов попап           (editButton в JS равен стилю .profile__edit-button в CSS)
const popup = document.querySelector('.popup')                                      // форма попап           (popup в JS равен стилю .popup в CSS)
const closePopupButton = document.querySelector('.popup__close')                    // крестик Закрыть попап (closePopupButton в JS равен стилю .popup__close в CSS)
const saveButton = document.querySelector('.popup__button')                         // нопка Сохранить       (saveButton в JS равен стилю .popup__button в CSS)

const titleElement = document.querySelector('.profile__user-name')                  // Имя Фамилия на главной
const nameFieldElement = document.querySelector('.popup__input-name')               // Имя Фамилия на попап

const annotationElement = document.querySelector('.profile__annotation')            // Описание юзера на главной
const annotationFieldElement = document.querySelector('.popup__input-annotation')   // Описание юзера на попап

//console.log(editButton)
//console.log(popup)

editButton.addEventListener('click', function() {                                   // Нажми на editButton, получи три команды:
   popup.classList.add('popup_is-open')                                             // Дабавляется класс .popup_is-open
   nameFieldElement.value = titleElement.textContent;                               // Значение из поля ввода nameFieldElement = Значению titleElement 
   annotationFieldElement.value = annotationElement.textContent;                    // Значение из поля ввода annotationFieldElement = Значению annotationElement
})

closePopupButton.addEventListener('click', function() {                             // Нажми на editButton, получи одну команду:
   popup.classList.remove('popup_is-open')                                          // Удалить класс .popup_is-open
   
})

saveButton.addEventListener('click', function () {                                  // Нажми на saveButton, получи три команды:
   popup.classList.remove('popup_is-open')                                          // Удалить класс .popup_is-open
   titleElement.textContent = nameFieldElement.value;                               // Значение titleElement на главной = значению nameFieldElement на попап
   annotationElement.textContent = annotationFieldElement.value;                    // Значение annotationElement на главной = значению annotationFieldElement на попап
})


let formElement = document.querySelector('.popup__form')                            // formElement в JS равен стилю .popup__form в CSS
let nameInput = document.querySelector('.popup__input-name')                        // nameInput  в JS равен стилю .popup__input-name в CSS
let c = document.querySelector('.popup__input-annotation')                          // С в JS равен стилю .popup__input-annotation в CSS

function formSubmitHandler(evt) {                                                   // function имяФункции() { тело функции };
   evt.preventDefault();                                                            // Эта строчка отменяет стандартную отправку формы.

   editName.value = nameInput.textContent;                                          // 
   editAnnotation.value = jobInput.textContent;

   nameInput.textContent = editName.value;
   jobInput.textContent = editAnnotation.value;
}

formElement.addEventListener('submit', formSubmitHandler); 