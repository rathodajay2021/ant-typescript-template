import { combineReducers, legacy_createStore as createStore } from "redux";

import reducers from "./Reducers";

const store = createStore(
  combineReducers({
    ...reducers,
  })
);

const rootReducer = combineReducers({
  ...reducers,
});

export type IRootState = ReturnType<typeof rootReducer>

export { store };
