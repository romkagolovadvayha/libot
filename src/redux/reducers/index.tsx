import { combineReducers } from 'redux';
import userReducer from './userReducer';
import botsReducer from './botsReducer';

export const reducers = {
    user: userReducer,
    bots: botsReducer,
};

export default () => combineReducers(reducers);
