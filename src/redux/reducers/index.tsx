import { combineReducers } from 'redux';
import userReducer from './userReducer';

export const reducers = {
    user: userReducer,
};

export default () => combineReducers(reducers);
