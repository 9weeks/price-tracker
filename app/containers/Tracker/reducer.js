/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOAD_REPOS_SUCCESS } from '../App/constants';

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
      case LOAD_REPOS_SUCCESS:
        // Delete prefixed '@' from the github username

        draft.repos = action.repos;
        draft.pid = action.repos.pid;
        draft.opt = action.repos.opt;
        break;
    }
  });

export default trakerReducer;
