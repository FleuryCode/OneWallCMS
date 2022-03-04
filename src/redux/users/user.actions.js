import { UserTypes } from "./user.types";

export const setCurrentUser = (currentUser) => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: currentUser
});

export const setIsLoggedIn = (isLoggedIn) => ({
    type: UserTypes.SET_LOGGED_IN,
    payload: isLoggedIn
});