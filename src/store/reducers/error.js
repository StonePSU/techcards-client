import { SET_PAGE_ERROR } from "../actionTypes";

const defaultState = null;

export default function pageError(state = defaultState, action) {
    let error = action.error;

    switch (action.type) {
        case SET_PAGE_ERROR:
            return error;
        default:
            return state;
    }
}
