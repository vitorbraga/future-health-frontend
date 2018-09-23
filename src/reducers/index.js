import authentication from "./authentication";
import { combineReducers } from "redux";
import doctor from "./doctor";

export default combineReducers({
  authentication,
  doctor,
});
