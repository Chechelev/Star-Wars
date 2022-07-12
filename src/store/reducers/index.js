import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducer';

export default combineReducers({
  favoriteReducer
});

//если много
//export default combineReducers({
 // favoriteReducer:favoriteReducer,
 // и тд
//});