/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { PRICE_DATA } from './constants';

// The initial state of the App
export const initialState = {
  pid: '',
};

/* eslint-disable default-case, no-param-reassign */
const trakerReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log('reducer type', action.type, action.repos);

    switch (action.type) {
      case PRICE_DATA:
        // Delete prefixed '@' from the github username
        draft.pid = action.pid;
        break;
    }
  });

export default trakerReducer;
