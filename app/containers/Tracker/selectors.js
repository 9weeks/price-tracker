/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTracker = state => state.tracker || initialState;

const makeSelectorPID = () =>
  createSelector(
    selectTracker,
    trackerState => trackerState.pid,
  );

export { selectTracker, makeSelectorPID };
