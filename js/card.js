const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const TYPES = {
  flat: 'Квартира',
  palace: 'Дворец',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const fillTextContent = (element, textContent) => {
  if (!textContent || textContent.length === 0) {
    element.classList.add('hidden');
  }
  return element.textContent = textContent;
};

const fillSrc = (element, src) => {
  if (element.length === 0) {
    element.add('hidden');
  } else {
    element.src = src;
  }
};

const fillPrice = (element, price) => {
  if (!price) {
    element.add('hidden');
  }
  return element.textContent = `${price} ₽/ночь`;
};

// const fillCapacity = (number) => {
//   let rooms = 'комнаты';
//   let guests = 'гостей';
//
//   if (number.rooms === 1) {
//     rooms = 'комната';
//   }
//   if (number.rooms === 100) {
//     rooms = 'комнат';
//   }
//   if (number.guests === 1) {
//     guests = 'гостя';
//   }
//   if (number.guests === 'не для гостей') {
//     return `${number.rooms} ${rooms} ${number.guests}`;
//   } else {
//     return `${number.rooms} ${rooms} для ${number.guests} ${guests}`;
//   }
// };

// const getFeatureElement = (feature) => {
//   const featureElement = document.createElement('li');
//   featureElement.classList.add('popup__feature');
//   featureElement.classList.add(`popup__feature--${feature}`);
//   return featureElement;
// };


// const popupFeatures = document.querySelector('.popup__features');
// const feature = popupFeatures.querySelectorAll('.popup__feature');
//
// const getFeatureElement = (features) => {
//   features.forEach((item) => {
//     const elementClassToString = item.classList.join('');
//     const elementClassIndex = elementClassToString.indexOf('—');
//     const elementClass = elementClassToString.substring(elementClassIndex + 2);
//
//     if (!features.includes(elementClass)) {
//       item.remove();
//     }
//   });
// };

// features.forEach(() => {
//   popupFeautures.querySelectorAll('.popup__feature')
//     .forEach((item) => {
//       const elementClassToString = item.classList.join('');
//       const elementClassIndex = elementClassToString.indexOf('—');
//       const elementClass = elementClassToString.substring(elementClassIndex + 2);
//
//       if (!features.includes(elementClass)) {
//         item.remove();
//       }
//     });
// });

// const fillGroupElements = (element, elementsData, elementFunction) => {
//   if (elementsData.length === 0) {
//     element.add('hidden');
//   } else {
//     const elementFragment = document.createDocumentFragment();
//     elementsData.forEach((item) => {
//       elementFragment.append(elementFunction(item));
//     });
//
//     element.replaceChildren(elementFragment);
//   }
// };

const renderOffer = (card) => {
  const cardElement = document.querySelector('#card').content.querySelector('.popup').cloneNode(true);

  const title = cardElement.querySelector('.popup__title');
  const address = cardElement.querySelector('.popup__text--address');
  const description = cardElement.querySelector('.popup__description');
  const type = cardElement.querySelector('.popup__type');
  const time = cardElement.querySelector('.popup__text--time');
  const avatar = cardElement.querySelector('.popup__avatar');
  const price = cardElement.querySelector('.popup__text--price');
  const capacity = cardElement.querySelector('.popup__text--capacity');
  const photos = cardElement.querySelector('.popup__photos');
  const features = cardElement.querySelector('.popup__features');


  fillTextContent(title, card.offer.title);
  fillTextContent(address, card.offer.address);
  fillTextContent(description, card.offer.description);
  fillTextContent(type, card.offer.type);

  if (!card.offer.checkin || !card.offer.checkout) {
    time.remove();
  } else {
    fillTextContent(time, `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  }

  if (!card.offer.rooms || !card.offer.guests) {
    capacity.remove();
  } else {
    fillTextContent(capacity, `${card.offer.rooms} для ${card.offer.guests} гостей`);
  }

  fillSrc(avatar, card.author.avatar);
  fillPrice(price, card.offer.price);
  fillTextContent(features, card.offer.features);


  if (card.offer.photos && card.offer.photos.length > 0) {
    const photoItem = photos.querySelector('.popup__photo');
    const copyOfferPhotos = card.offer.photos.slice();

    copyOfferPhotos.forEach((photo) => {
      const photoElement = photoItem.cloneNode(true);
      photoElement.src = photo;
      photos.appendChild(photoElement);
    });

    photos.children[0].remove();
  } else {
    photos.classList.add('hidden');
  }

  return cardElement;
};

export {renderOffer};
