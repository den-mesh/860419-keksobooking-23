import {createOffer} from './data.js';

const SIMILAR_OFFER_COUNT = 10;
const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());

similarOffers;

