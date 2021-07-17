/* global _:readonly */
const ALERT_SHOW_TIME = 5000;

// Функция, возвращающая случайное целое положительное число из заданного диапазона

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция, возвращающая дробное положительное число с плавающей точкой

const getRandomPositiveFloat = (min, max, digits) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
};

// Функция, возвращающая случайный элемент массива

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Функция, возвращающая случайный массив

const getRandomArray = (arr) => {
  const randomArrayLength = getRandomPositiveInteger(1, arr.length);

  for (let index = 0; index <= randomArrayLength; index++) {
    return arr.slice(0, getRandomPositiveInteger(1, arr.length));
  }
};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const onPopupClick = () => {
  closeUserModal();
};


const alertContainer = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorMessage = document.querySelector('.error__message');
const errorButton = document.querySelector('.error__button');

function closeUserModal() {
  alertContainer.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupClick);
}

const showAlert = () => {
  errorMessage.textContent = 'Ошибка размещения объявления';
  errorButton.addEventListener('click', () => {
    closeUserModal();
  });

  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);

  document.body.append(alertContainer);
};


export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArray, showAlert};
