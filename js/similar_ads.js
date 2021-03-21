import {createOffersNearby} from './util.js';

const similarListElement = document.querySelector('#map-canvas');

const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = createOffersNearby();

const getOfferTipe = (offerType) => {
  let type = '';

  if (offerType === 'flat') {
    type = 'Квартира'
  };

  if (offerType === 'bungalow') {
    type = 'Бунгало'
  };

  if (offerType === 'house') {
    type = 'Дом'
  };

  if (offerType === 'palace') {
    type = 'Дворец'
  };

  return type;
}

similarAdsTemplate.querySelector('.popup__title')
.textContent = similarAds.offer.title;

similarAdsTemplate.querySelector('.popup__text--address')
.textContent = similarAds.offer.address;

similarAdsTemplate.querySelector('.popup__text--price')
.innerHTML = similarAds.offer.price + '<span>₽/ночь</span>';

similarAdsTemplate.querySelector('.popup__type')
.textContent = getOfferTipe(similarAds.offer.type);

similarAdsTemplate.querySelector('.popup__text--capacity')
.textContent = similarAds.offer.rooms + ' комнаты для ' + similarAds.offer.guests + ' гостей';

similarAdsTemplate.querySelector('.popup__text--time')
.textContent = 'Заезд после ' + similarAds.offer.checkin + ', выезд до ' + similarAds.offer.checkout;

console.log(similarAdsTemplate);
console.log(createOffersNearby());
