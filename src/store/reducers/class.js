import { GET_CLASSES, ADD_CLASS, REMOVE_CLASS, SET_CURRENT_CLASS } from '../actionTypes';

const DEFAULT_STATE = [];

export default function classes(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_CLASSES:
            return action.classes;
        case ADD_CLASS:
            const tempState = [...state];
            tempState.push(action.newClass);
            return tempState;
        case REMOVE_CLASS:
            const newState = state.filter(item => {
                return item._id !== action.deletedClass._id
            });
            return newState;
        default:
            return state;
    }
}

const DEFAULT_CURRENT_CLASS = {};

export function currentClass(state = DEFAULT_CURRENT_CLASS, action) {
    switch (action.type) {
        case SET_CURRENT_CLASS:
            return action.currentClass;
        default:
            return DEFAULT_CURRENT_CLASS;
    }
}