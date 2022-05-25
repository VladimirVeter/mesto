const editButton = document.querySelector('.profile__edit-button')                  // вызов попап           (editButton в JS равен стилю .profile__edit-button в CSS)
const popup = document.querySelector('.popup')                                      // форма попап           (popup в JS равен стилю .popup в CSS)
const closePopupButton = document.querySelector('.popup__close')                    // крестик Закрыть попап (closePopupButton в JS равен стилю .popup__close в CSS)
//const saveButton = document.querySelector('.popup__button')                         // нопка Сохранить       (saveButton в JS равен стилю .popup__button в CSS)

const userName = document.querySelector('.profile__user-name')                      // Имя Фамилия на главной
const userAnnotation = document.querySelector('.profile__annotation')

const newUserName = document.querySelector('.popup__input-name')                    // Новые Имя Фамилия на попап
const newUserAnnotation = document.querySelector('.popup__input-annotation')

const formElement = document.querySelector('.popup__form')                          // formElement в JS равен стилю .popup__form в CSS



function addNewClass() {                                                            // запуск функции addNewClass
                                                // функция содержит добавление класса .popup_is-open
}
editButton.addEventListener('click', addNewClass)                                   // Нажми на editButton, получи одну команду:


editButton.addEventListener('click', function () {                                  // Нажми на editButton, получи две команды:
   popup.classList.add('popup_is-open')
   newUserName.value = userName.textContent;                                        // Значение из поля ввода newUserName = Значению userName 
   newUserAnnotation.value = userAnnotation.textContent;                            // Значение из поля ввода newUserAnnotation = Значению userAnnotation
})


function removeNewClass() {                                                         // запуск функции removeNewClass
   popup.classList.remove('popup_is-open')                                          // функция содержит удаление класса .popup_is-open
}
closePopupButton.addEventListener('click', removeNewClass)                          // Нажми на closePopupButton, получи одну команду:


saveButton.addEventListener('click', removeNewClass)                                // Нажми на saveButton, получи одну команду: removeNewClass

saveButton.addEventListener('click', function () {                                  // Нажми на saveButton, получи две команды:
   userName.textContent = newUserName.value;                                        // Значение userName на главной = значению newUserName на попап
   userAnnotation.textContent = newUserAnnotation.value;                            // Значение userAnnotation на главной = значению newUserAnnotation на попап
})

newUserName.value = userName.textContent;
newUserAnnotation.value = userAnnotation.textContent;


function formSubmitHandler(evt) {                                                   // function имяФункции() { тело функции };
   evt.preventDefault();                                                            // Эта строчка отменяет стандартную отправку формы.
}

formElement.addEventListener('submit', formSubmitHandler);  