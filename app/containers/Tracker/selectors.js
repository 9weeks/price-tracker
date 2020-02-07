/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTracker = state => state.PriceTracker || initialState;

const makeSelectorPID = () =>
  createSelector(
    selectTracker,
    PriceTrackerState => PriceTrackerState.pid,
  );

const makeSelectorOpt = () =>
  createSelector(
    selectTracker,
    PriceTrackerState => PriceTrackerState.opt,
  );

export { selectTracker, makeSelectorPID, makeSelectorOpt };
