import { combineReducers } from 'redux';
import auth from './auth';
import pageError from "./error";
import loading from "./loading";
import classes, { currentClass } from './class';

const rootReducer = combineReducers({ auth, pageError, loading, classes, currentClass });

export default rootReducer;