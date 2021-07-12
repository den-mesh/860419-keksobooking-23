// на тип жилья вешаем слушатель change, при изменении типа полю с ценой меняем плейсхолдер и минимальное значение
// понадобится объект, в котором будут сопоставлены тип и минимальное значение цены

const typeSelect = document.querySelector('#type');
const typePrice = document.querySelector('#price');

const minPricesTypes = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const changePlaceholderPrice = () => {
  typePrice.placeholder = minPricesTypes[typeSelect.value];
  typePrice.min = minPricesTypes[typeSelect.value];
};

const checkValidityForm = () => {
  typeSelect.addEventListener('change', changePlaceholderPrice);
};


export {checkValidityForm};


