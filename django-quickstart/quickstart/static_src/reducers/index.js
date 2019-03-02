import {combineReducers} from "redux";
import messageReducer from './messageReducer';
import countReducer from './countReducer';

export default combineReducers({
    messageReducer,
    countReducer,
});