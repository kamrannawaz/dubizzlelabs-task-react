import createSagaMiddleware from "redux-saga";
import { watchAllSagas } from "./sagas/index";
import { rootReducer } from "./reducers/index";
import { compose, applyMiddleware, createStore } from "redux";

// creating middleware for saga for async actions
const sagaMiddleware = createSagaMiddleware();

// putting saga along with root reducers into store
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAllSagas);
