import {createOffer} from './data.js';
import {similarOffersCard} from './popup.js';
import {checkValidityForm} from './form.js';

const SIMILAR_OFFER_COUNT = 1;
const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());

similarOffersCard(similarOffers);
checkValidityForm();

