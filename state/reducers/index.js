import { combineReducers } from "redux";

import DataReducer from "./DataReducer";

const Reducers = combineReducers({
  data: DataReducer,
});

export default Reducers;
