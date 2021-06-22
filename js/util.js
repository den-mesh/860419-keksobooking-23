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

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, getRandomArray};
