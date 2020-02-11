/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { PRICE_DATA, LOAD_REPOS, LOAD_REPOS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  repos: false,
  pid: '',
  opt: '',
};

/* eslint-disable default-case, no-param-reassign */
const trakerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PRICE_DATA:
        // Delete prefixed '@' from the github username
        draft.pid = action.pid;
        draft.opt = action.opt;
        break;
      case LOAD_REPOS:
        draft.repos = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.repos = action.repos;
        draft.pid = action.pid;
        draft.opt = action.opt;

        break;
    }
  });

export default trakerReducer;
