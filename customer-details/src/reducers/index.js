import { combineReducers } from "redux";
import users from "./users";
import addresses from "./addresses";

export default combineReducers({
  users,
  addresses
});
