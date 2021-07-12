import {createOffer} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

let similarOffersCard = createOffer();
const similarOfferFragment = document.createDocumentFragment();

//сопоставляем типы жилья с подписями
const offerTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};


similarOffersCard = ({author, offer}) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  const popupFeautures = similarOffersCard.querySelector('.popup__features');
  const features = offer.features.map((feature) => `popup__feature--${feature}`);
  const popupPhotos = similarOffersCard.querySelector('.popup__photos');
  const popupTitle = similarOffersCard.querySelector('.popup__title');
  const popupAddress = similarOffersCard.querySelector('.popup__text--address');
  const popupPrice = similarOffersCard.querySelector('.popup__text--price');
  const popupType = similarOffersCard.querySelector('.popup__type');
  const popupCapacity = similarOffersCard.querySelector('.popup__text--capacity');
  const popupTime = similarOffersCard.querySelector('.popup__text--time');
  const popupDescription = similarOffersCard.querySelector('.popup__description');
  const popupAvatar = similarOffersCard.querySelector('.popup__avatar');

  //проверка наличия данных
  const checkingDataAvailability = () => {
    if (offer.title.length === 0) {
      popupTitle.classList.add('hidden');
    }
    if (offer.address.length === 0) {
      popupAddress.classList.add('hidden');
    }
    if (offer.price.length === 0) {
      popupPrice.classList.add('hidden');
    }
    if (offer.rooms.length === 0 || offer.guests.length === 0) {
      popupCapacity.classList.add('hidden');
    }
    if (offer.checkin.length === 0 || offer.checkout.length === 0) {
      popupTime.classList.add('hidden');
    }
    if (offer.description.length === 0) {
      popupDescription.classList.add('hidden');
    }
    if (author.avatar.length === 0) {
      popupAvatar.classList.add('hidden');
    }
    if (features.length === 0) {
      popupFeautures.classList.add('hidden');
    }
    if (offer.photos.length === 0) {
      popupPhotos.classList.add('hidden');
    }
  };

  popupTitle.textContent = offer.title;
  popupAddress.textContent = offer.address;
  popupPrice.textContent = offer.price;
  popupType.textContent = getTypeTranslate(offer.type);
  popupCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupDescription.textContent = offer.description;
  popupAvatar.src = author.avatar;

  //выводит все доступные фичи
  features.forEach(() => {
    popupFeautures.querySelectorAll('.popup__feature')
      .forEach((item) => {
        const elementClassToString = item.classList.join('');
        const elementClassIndex = elementClassToString.indexOf('—');
        const elementClass = elementClassToString.substring(elementClassIndex + 2);

        if (!features.includes(elementClass)) {
          item.remove();
        }
      });
  });

  const createImage = (source) => {
    const imageElement = document.createElement('img');
    imageElement.classList.add('popup__photo');
    imageElement.width = 45;
    imageElement.height = 40;
    imageElement.src = source;

    return imageElement;
  };

  const getPhotosListFragment = (photos) => {
    const popupPhotosFragment = document.createDocumentFragment();

    photos.forEach((photo) => {
      const photoElement = createImage(photo);
      popupPhotosFragment.appendChild(photoElement);
    });

    popupPhotos.appendChild(popupPhotosFragment);

    return popupPhotosFragment;
  };


  checkingDataAvailability();
  getPhotosListFragment();
  similarOfferFragment.appendChild(offerElement);
  mapCanvas.appendChild(similarOfferFragment.firstChild);
};


export {similarOffersCard};
