import { get } from 'superagent';

export const ADD_ITEM = 'ADD_ITEM';
export const FETCH_CAMPSITES = 'FETCH_CAMPSITES';
export const FETCH_CAMPSITE = 'FETCH_CAMPSITE';

export function addItem(item) {
  return { type: ADD_ITEM, item };
}

export function fetchCampsites() {
  return dispatch => {
    get('https://secure-mountain-79131.herokuapp.com/campsites/state/Alaska')
    .type('application/json')
    .accept('application/json')
    .end(function(err, res) {
      try {
        console.log(receiveCampsites(res.body));
        dispatch(receiveCampsites(res.body));
      } catch (e) {
        console.log(err);
      }
    });
  };
}

function receiveCampsites(data) {
  return { type: FETCH_CAMPSITES, data };
}

export function fetchCampsite(id) {
  return dispatch => {
    get(`https://secure-mountain-79131.herokuapp.com/campsites/${id}`)
    .type('application/json')
    .accept('application/json')
    .end(function(err, res) {
      try {
        console.log(receiveCampsite(res.body));
        dispatch(receiveCampsite(res.body));
      } catch (e) {
        console.log(err);
      }
    });
  };
}

function receiveCampsite(data) {
  return { type: FETCH_CAMPSITE, data };
}
