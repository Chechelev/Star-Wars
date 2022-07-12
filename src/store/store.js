import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

import rootReducer from './reducers';
import { setLocaleStorage } from "@utils/localStorage";

import { LOCALSTORAGE_KEY } from '@store/constants/actionTypes';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))

);

store.subscribe(() => {
  setLocaleStorage(LOCALSTORAGE_KEY, store.getState().favoriteReducer);
});

export default store;