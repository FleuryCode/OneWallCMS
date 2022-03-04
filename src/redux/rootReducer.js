import { combineReducers } from "redux";
import userReducer from "./users/user.reducer";

export default combineReducers({
    users: userReducer
});