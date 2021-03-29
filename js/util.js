import {
  OFFER_TITLE,
  OFFER_DESCRIPTION,
  OFFER_TYPE,
  OFFER_CHECKIN,
  OFFER_CHECKOUT,
  OFFER_FEATURES,
  OFFER_PHOTOS
} from './data.js';

// eslint-disable-next-line no-unused-vars
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// eslint-disable-next-line no-unused-vars
const getRandomFloat = (min, max, decimalPlaces) => {
  return ((Math.random() * (max - min + 1)) + min).toFixed(decimalPlaces);
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
}

const getRandomArraylength = (array) => {
  return getRandomInteger(0, array.length - 1)
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const getRandomTrimArray = (array) => {
  return array.slice(getRandomArraylength(array));
};

const getRandomArray = (array) => {
  return getRandomTrimArray(shuffle(array));
}

const SIMILAR_NEARBY_COUNT = 1;

// eslint-disable-next-line no-unused-vars
const createOffersNearby = () => {

  const locationX = getRandomFloat(35.65000, 35.70000, 5);
  const locationY = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) +'.png',
    },
    offer: {
      title: OFFER_TITLE,
      address: `${locationX}, ${locationY}`,
      price: getRandomInteger(1, 100),
      type: getRandomArrayElement(OFFER_TYPE),
      rooms: getRandomInteger(1, 100),
      guests: getRandomInteger(1, 100),
      checkin: getRandomArrayElement(OFFER_CHECKIN),
      checkout: getRandomArrayElement(OFFER_CHECKOUT),
      features: getRandomArray(OFFER_FEATURES),
      description: OFFER_DESCRIPTION,
      photos: getRandomTrimArray(OFFER_PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};

const offersNearby = () => new Array(SIMILAR_NEARBY_COUNT).fill(null).map(() => createOffersNearby());

export {offersNearby};
