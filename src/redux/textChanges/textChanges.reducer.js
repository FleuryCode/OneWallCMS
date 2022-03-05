import { TextChangeTypes } from "./textChanges.types";

const INITIAL_STATE = {
    selectedPage: 'Homepage',
    data: []
};

const textChangeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TextChangeTypes.SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: action.payload
            }
        case TextChangeTypes.SET_DB_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default textChangeReducer;