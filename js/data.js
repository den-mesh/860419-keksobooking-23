import {getRandomArray, getRandomArrayElement, getRandomPositiveFloat, getRandomPositiveInteger} from './util.js';

const TITLES = [
  'Промокод при бронировании',
  'Скидка -25%',
  'Дополнительное место включено',
  'Доступно для заселения с животными',
];

const PRICE_OFFER_MIN = 500;

const PRICE_OFFER_MAX = 15000;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const NUMBER_OF_ROOMS_MIN = 1;

const NUMBER_OF_ROOMS_MAX = 10;

const NUMBER_OF_GUESTS_MIN = 1;

const NUMBER_OF_GUESTS_MAX = 8;

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'ковровое покрытие',
  'звуко-изолированные двери',
  'кровати с ортопедическими матрасами',
  'индивидуальные лампы для чтения',
  'индивидуальные шкафчики',
  'для вещей',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LATITUDE_MIN = 35.65000;

const LATITUDE_MAX = 35.70000;

const LONGITUDE_MIN = 139.70000;

const LONGITUDE_MAX = 139.80000;

const LATITUDE = getRandomPositiveFloat(LATITUDE_MIN, LATITUDE_MAX, 5);

const LONGITUDE = getRandomPositiveFloat(LONGITUDE_MIN, LONGITUDE_MAX, 5);

const createOffer = () => ({
  author: {
    avatar: `img/avatars/user0${getRandomPositiveInteger(1, 8)}.png`,
  },
  offer: {
    title: getRandomArrayElement(TITLES),
    address: `${LATITUDE}, ${LONGITUDE}`,
    price: getRandomPositiveInteger(PRICE_OFFER_MIN, PRICE_OFFER_MAX),
  },
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger(NUMBER_OF_ROOMS_MIN, NUMBER_OF_ROOMS_MAX),
  guests: getRandomPositiveInteger(NUMBER_OF_GUESTS_MIN, NUMBER_OF_GUESTS_MAX),
  checkin: getRandomArrayElement(CHECKINS),
  checkout: getRandomArrayElement(CHECKOUTS),
  features: getRandomArray(FEATURES),
  description: getRandomArray(DESCRIPTIONS),
  photos: getRandomArray(PHOTOS),
  location: {
    lat: LATITUDE,
    lng: LONGITUDE,
  },
});

const SIMILAR_OFFER_COUNT = 1;
const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());


export {createOffer, similarOffers};
