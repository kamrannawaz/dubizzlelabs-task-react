import { reject } from "q";
import { put } from "redux-saga/effects";
import { getPublicGists, getGistForUser } from "../../services/gistService";
import { GIST_ACTION_TYPES } from "../types";

// for all user
export function* getAllUsers() {
  try {
    const resp = yield getPublicGists();
    yield put({ type: GIST_ACTION_TYPES.ALL_USER_SUCCESS, payload: resp.data });
  } catch (error) {
    yield put({
      type: GIST_ACTION_TYPES.ALL_USER_FAILED,
      payload: error.message
    });
    reject(error);
  }
}

// for specific user
export function* getUser(action) {
  try {
    const resp = yield getGistForUser(action.payload);
    yield put({ type: GIST_ACTION_TYPES.GET_USER_SUCCESS, payload: resp.data });
  } catch (error) {
    yield put({
      type: GIST_ACTION_TYPES.GET_USER_FAILED,
      payload: error.message
    });
    reject(error);
  }
}
