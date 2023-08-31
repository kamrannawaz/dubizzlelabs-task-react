import { combineReducers } from "redux";
import { gistReducer } from "./gistReducer";

// combining all reducers into one root
export const rootReducer = combineReducers({
  gist: gistReducer
});
