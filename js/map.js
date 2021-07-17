import {renderOffer} from './card.js';
import {activateMapForm} from './form.js';
import {similarOffers, SIMILAR_OFFER_COUNT} from './data.js';


const ICON_PRIMARY_SIZE_WIDTH = 52;
const ICON_PRIMARY_SIZE_HEIGHT = 52;

const ICON_SIZE_WIDTH = 40;
const ICON_SIZE_HEIGHT = 40;

const addressField = document.querySelector('#address');

const cityCenter = {
  lat: 35.681700,
  lng: 139.753891,
};

/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', () => {
    activateMapForm('active');
  }).setView(cityCenter, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [ICON_PRIMARY_SIZE_WIDTH, ICON_PRIMARY_SIZE_HEIGHT],
  iconAnchor: [ICON_PRIMARY_SIZE_WIDTH / 2, ICON_PRIMARY_SIZE_HEIGHT],
});

const secondaryPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [ICON_SIZE_WIDTH, 40],
  iconAnchor: [ICON_SIZE_WIDTH / 2, ICON_SIZE_HEIGHT],
});

const mainPinMarker = L.marker(cityCenter, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

const setAddress = ({lat, lng}) => {
  addressField.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  addressField.disabled = true;
};

setAddress(cityCenter);

mainPinMarker.on('moveend', (evt) => {
  setAddress(evt.target.getLatLng());
});

const renderSecondaryMarkers = (data) => {
  data.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    }, {
      icon: secondaryPinIcon,
    });

    marker
      .addTo(map)
      .bindPopup(renderOffer(offer));
  });
};

renderSecondaryMarkers(similarOffers(SIMILAR_OFFER_COUNT));

export {renderSecondaryMarkers};

