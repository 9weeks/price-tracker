/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const PRICE_DATA = 'pricetracker/PRICE_DATA';
export const DEFAULT_ACTION = 'pricetracker/DEFAULT_ACTION';
export const LOAD_REPOS = 'pricetracker/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'pricetracker/LOAD_REPOS_SUCCESS';
