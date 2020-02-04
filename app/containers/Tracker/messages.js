/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Tracker';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Price Tracking',
  },
  lowestprice: {
    id: `${scope}.header`,
    defaultMessage: 'Lowest Price : ####',
  },
  like: {
    id: `${scope}.header`,
    defaultMessage: 'Please Like',
  },
});
