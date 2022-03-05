import { TextChangeTypes } from "./textChanges.types";

export const setPageSelection = (selection) => ({
    type: TextChangeTypes.SET_SELECTED_PAGE,
    payload: selection
});

export const setData = (data) => ({
    type: TextChangeTypes.SET_DB_DATA,
    payload: data
});