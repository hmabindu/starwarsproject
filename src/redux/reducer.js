import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import films from './bundles/films';
import people from './bundles/people';
export default combineReducers({
  people,
  films,
  router
});
