import { GIST_ACTION_TYPES } from "../types";

// initial state must have to define otherwise errors occurs
const INITIAL_STATE = {
  list: [],
  error: null,
  loader: true
};

export const gistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // for all users
    case GIST_ACTION_TYPES.ALL_USER_SUCCESS:
      // setting latest fetched data
      return { ...state, list: action.payload, error: null, loader: false };
    case GIST_ACTION_TYPES.ALL_USER_FAILED:
      // manipulating state on error
      return { ...state, list: [], error: action.payload, loader: false };

    // for specific user
    case GIST_ACTION_TYPES.GET_USER_SUCCESS:
      // setting latest fetched data
      return { ...state, list: action.payload, error: null, loader: false };
    case GIST_ACTION_TYPES.GET_USER_FAILED:
      // manipulating state on error
      return { ...state, list: [], error: action.payload, loader: false };

    case GIST_ACTION_TYPES.LOADER:
      // manipulating state on loading
      return { ...state, list: [], error: null, loader: true };
    default:
      return state;
  }
};
