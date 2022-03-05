import { combineReducers } from "redux";
import userReducer from "./users/user.reducer";
import textChangeReducer from "./textChanges/textChanges.reducer";

export default combineReducers({
    users: userReducer,
    textChange: textChangeReducer
});