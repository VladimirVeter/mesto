const initialCards = [
   '1',
   '2',
   '3',
];



const placeListElement = document.querySelector('.place__list');
const addNewPlaceCard = text => {
   return `
      < li class="place" >
               <button type="button" class="place__delete-button"></button>
               <img src="" alt="" class="place__photo">
               <div class="place__description">
                  <h2 class="place__name">${text}</h2>
                  <button type="button" class="place__like-button"></button>
               </div>
            </>
   `
};

const addPlace = text => {
   const newPlace = addNewPlaceCard(text);

   placeListElement.insertAdjacentHTML('afterbegin', newPlace)
};

initialCards.forEach(addPlace);
