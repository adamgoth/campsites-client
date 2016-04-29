import { FETCH_CAMPSITES } from '../actions/index';
import { FETCH_CAMPSITE } from '../actions/index';
import merge from 'lodash/merge';

const INITIAL_STATE = { campsites: [], campsite: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CAMPSITES:
    return merge({}, state, {
      campsites: action.data
    });
  case FETCH_CAMPSITE:
    return merge({}, state, {
      campsite: action.data
    });
  default:
    return state;
  }
}
