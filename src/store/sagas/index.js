import { takeEvery, all } from "redux-saga/effects";
import { GIST_ACTION_TYPES } from "../types";
import { getAllUsers, getUser } from "./gistSagas";

// saga is checking for specific action & calling the api saga
export function* watchAllSagas() {
  yield all([
    takeEvery(GIST_ACTION_TYPES.GET_ALL_USERS, getAllUsers),
    takeEvery(GIST_ACTION_TYPES.GET_USER, getUser)
  ]);
}
