import { GIST_ACTION_TYPES } from "../types";

// action for fetching gists of all users
export const getAllUsers = () => {
  return {
    type: GIST_ACTION_TYPES.GET_ALL_USERS
  };
};

// action for fetching gists of specific user
export const getUser = (payload) => {
  return {
    type: GIST_ACTION_TYPES.GET_USER,
    payload
  };
};

export const getLoader = () => {
  return {
    type: GIST_ACTION_TYPES.LOADER
  };
};
