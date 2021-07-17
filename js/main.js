import {SIMILAR_OFFER_COUNT} from './data.js';
import './card.js';
import {getData} from './api.js';
import {renderSecondaryMarkers} from './map.js';
import {setUserFormSubmit} from './form.js';


getData((data) => {
  renderSecondaryMarkers(data.slice(0, SIMILAR_OFFER_COUNT));
});

setUserFormSubmit();

