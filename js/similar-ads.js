import {offersNearby} from './util.js';

const similarListElement = document.querySelector('#map-canvas');

const similarAdsTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = offersNearby();

similarAds.forEach((flat) => {
  const flatElement = similarAdsTemplate.cloneNode(true);
  flatElement.querySelector('.popup__title').textContent = flat.offer.title;
  flatElement.querySelector('.popup__text--address').textContent = flat.offer.address;
  flatElement.querySelector('.popup__text--price').innerHTML = flat.offer.price + '<span>₽/ночь</span>';
  similarListElement.appendChild(flatElement);
});



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



const generateFeature = (features) => {
  const featureList = document.querySelector('.popup__features');

  if (features.length === 0) {
    featureList.setAttribute('hidden')
  }

  features.map((feature) => {
    return featureList.appendChild(`<li class="popup__feature popup__feature--${feature}"></li>`);
  });
};






// similarAdsTemplate.querySelector('.popup__type')
// .textContent = getOfferTipe(similarAds.offer.type);

// similarAdsTemplate.querySelector('.popup__text--capacity')
// .textContent = similarAds.offer.rooms + ' комнаты для ' + similarAds.offer.guests + ' гостей';

// similarAdsTemplate.querySelector('.popup__text--time')
// .textContent = 'Заезд после ' + similarAds.offer.checkin + ', выезд до ' + similarAds.offer.checkout;

// // similarAdsTemplate.querySelector('.popup__feature').appendChild(`<li class="popup__feature popup__feature--${feature}"></li>`);

// similarAdsTemplate.querySelector('.popup__description')
// .textContent = similarAds.offer.description;

// similarAdsTemplate.querySelector('.popup__avatar')
// .src = similarAds.author.avatar;

// similarListElement.appendChild(similarAdsTemplate);

// console.log(similarAdsTemplate);
// console.log(createOffersNearby());
