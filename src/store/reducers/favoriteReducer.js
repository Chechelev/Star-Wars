import { omit } from 'lodash';
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE, LOCALSTORAGE_KEY } from '@store/constants/actionTypes';
import { getLocaleStorage } from '@utils/localStorage'


let initialState = getLocaleStorage(LOCALSTORAGE_KEY);

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }

    case REMOVE_PERSON_FROM_FAVORITE:
      return omit(state, [action.payload])

    default:
      return state;
  };
};

export default favoriteReducer;