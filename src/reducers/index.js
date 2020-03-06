import addCarReducer from "./addCarReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  addCar: addCarReducer
});

export default allReducers;
