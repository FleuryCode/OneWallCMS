import { combineReducers } from "redux";
import userReducer from "./users/user.reducer";
import textChangeReducer from "./textChanges/textChanges.reducer";
import portfolioUpdateReducer from "./portfolioUpdates/portfolioUpdates.reducer";

export default combineReducers({
    users: userReducer,
    textChange: textChangeReducer,
    portfolio: portfolioUpdateReducer
});