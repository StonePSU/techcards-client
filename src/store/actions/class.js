import { api } from '../../services/api';
import { setPageError } from "./error";
import { setLoading } from "./loading";
import { GET_CLASSES, ADD_CLASS, REMOVE_CLASS, SET_CURRENT_CLASS } from '../actionTypes';

const setClasses = (classes) => {
    return {
        type: GET_CLASSES,
        classes
    }
}

const addClass = (newClass) => {
    return {
        type: ADD_CLASS,
        newClass
    }
}

const removeClass = (deletedClass) => {
    return {
        type: REMOVE_CLASS,
        deletedClass
    }
}

const setCurrentClass = (currentClass) => {
    return {
        type: SET_CURRENT_CLASS,
        currentClass
    }
}

const getClasses = () => {
    return dispatch => {
        dispatch(setLoading(true));
        dispatch(setPageError(null));
        api("get", "/api/class")
            .then((res) => {
                dispatch(setLoading(false));
                dispatch(setClasses(res.data));
            })
            .catch((err) => {
                dispatch(setLoading(false));
                dispatch(setPageError(err));
            })
    }

}

const createClass = (newClass) => {
    return dispatch => {
        dispatch(setPageError(null));
        dispatch(setLoading(true));
        api("post", "/api/class", newClass)
            .then((res) => {
                dispatch(setPageError(null));
                dispatch(setLoading(false));
                dispatch(addClass(res));
            })
            .catch(err => {
                dispatch(setPageError(err));
                dispatch(setLoading(false));
            })
    }
}

const deleteClass = (classToDelete) => {
    return dispatch => {
        dispatch(setPageError(null));
        dispatch(setLoading(true));
        api("delete", `/api/class/${classToDelete._id}`)
            .then((res) => {
                dispatch(setLoading(false));
                dispatch(removeClass(classToDelete));
            })
            .catch(err => {
                dispatch(setPageError(err));
                dispatch(setLoading(false));
            })
    }
}

const getCurrentClass = (classId) => {
    return dispatch => {
        dispatch(setPageError(null));
        dispatch(setLoading(true));
        api("get", `/api/class/${classId}?expand=owner decks`)
            .then(res => {
                dispatch(setLoading(false));
                dispatch(setCurrentClass(res));
            })
            .catch(err => {
                dispatch(setPageError(err));
                dispatch(setLoading(false));
            })
    }
}

export { getClasses, createClass, deleteClass, getCurrentClass };