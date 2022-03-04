import { UserTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: '',
    isLoggedIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserTypes.SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;