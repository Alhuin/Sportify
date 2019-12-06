import {
  SET_NAME,
  SET_LASTNAME,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_MEMBERSHIP,
  SET_FIRST_SEARCH
} from '../actions/types';

const initialState = {
  name: 'Demo User',
  lastName: '',
  favorites: [],
  membership: '',
  firstSearch: true,
};

const userReducer = (state = initialState, action) => {
  // console.log(action.type, action.payload);
  switch (action.type) {
    case SET_NAME:
      return {
        ...state, name: action.payload,
      };
    case SET_LASTNAME:
      return {
        ...state, lastName: action.payload,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter( (item) => item !== action.payload)
      };
    case SET_MEMBERSHIP:
      return {
        ...state, membership: action.payload,
      };
    case SET_FIRST_SEARCH:
      return {
        ...state, firstSearch: action.payload,
      };
    default:
      return state;
  }
};

// const store = createStore(playerStore);
export default userReducer;