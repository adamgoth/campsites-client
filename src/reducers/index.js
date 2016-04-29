import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';
import { routerReducer as routing } from 'react-router-redux';
import campsites from './reducer_campsites';

const initialState = {
  items: ['example item']
};

function list(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.ADD_ITEM:
    return { items: state.items.concat(action.item) };
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  list,
  campsites,
  routing
});

export default rootReducer;
