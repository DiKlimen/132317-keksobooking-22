import {offersNearby} from './util.js';

const similarListElement = document.querySelector('#map-canvas');

const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = offersNearby();

console.log(similarAdsTemplate);

const offerTypesTemplate = {
  flat: 'Квартира',
  palace: 'Дворец',
  bungalow: 'Бунгало',
  house: 'Дом'
};

const getRuType = (engType) => {
  const ruOfferType = offerTypesTemplate[engType];
  return ruOfferType;
};

const generateFeature = (features) => {
  const featureList = document.querySelector('.popup__features');

  if (features.length === 0) {
    featureList.setAttribute('hidden')
  }

  features.map((feature) => {
    return featureList.appendChild(`<li class="popup__feature popup__feature--${feature}"></li>`);
  });
};

similarAds.forEach((flat) => {
  const flatElement = similarAdsTemplate.cloneNode(true);
  flatElement.querySelector('.popup__title').textContent = flat.offer.title;
  flatElement.querySelector('.popup__text--address').textContent = flat.offer.address;
  flatElement.querySelector('.popup__text--price').innerHTML = flat.offer.price + '<span>₽/ночь</span>';
  flatElement.querySelector('.popup__type').textContent = getRuType(flat.offer.type);
  flatElement.querySelector('.popup__text--capacity')
  .textContent = flat.offer.rooms + ' комнаты для ' + flat.offer.guests + ' гостей';
  flatElement.querySelector('.popup__text--time')
  .textContent = 'Заезд после ' + flat.offer.checkin + ', выезд до ' + flat.offer.checkout;

  similarListElement.appendChild(flatElement);
});








// // similarAdsTemplate.querySelector('.popup__feature').appendChild(`<li class="popup__feature popup__feature--${feature}"></li>`);

// similarAdsTemplate.querySelector('.popup__description')
// .textContent = similarAds.offer.description;

// similarAdsTemplate.querySelector('.popup__avatar')
// .src = similarAds.author.avatar;

// similarListElement.appendChild(similarAdsTemplate);

// console.log(similarAdsTemplate);
// console.log(createOffersNearby());
