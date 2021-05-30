function getRandomNumber(min, max) {
  if (max <= min) {
    return 'Значение max не может быть меньше, чем значение min, или равное ему';
  } else if (min >= 0 && max > 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются, источник developer.mozilla.org
  }
}


function getRandomFractionalNumber(min, max, num) {
  if (max <= min) {
    return 'Значение max не может быть меньше, чем значение min, или равное ему';
  } else if (min >= 0 && max > 0) {
    const randomNumber = Math.random() * (max - min + 1) + min;
    return Number(randomNumber.toFixed(num));
  }
}

getRandomNumber();
getRandomFractionalNumber();

