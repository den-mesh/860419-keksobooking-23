function getRandomNumber(min, max) {
  if (max <= min) {
    return 'Значение max не может быть меньше, чем значение min, или равное ему';
  }
  if (min < 0 || max < 0) {
    return 'Значение min и max не могут быть отрицательными';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются, источник developer.mozilla.org
}


function getRandomFractionalNumber(min, max, num) {
  if (max <= min) {
    return 'Значение max не может быть меньше, чем значение min, или равное ему';
  }
  if (min < 0 || max < 0) {
    return 'Значение min и max не могут быть отрицательными';
  }
  const randomNumber = Math.random() * (max - min + 1) + min;
  return Number(randomNumber.toFixed(num));
}

getRandomNumber(7, 90);
getRandomFractionalNumber(42, 89.675, 4);

