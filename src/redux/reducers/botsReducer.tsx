import {Bot} from '../../models/bot';

interface State {
    getBotsLoader: boolean;
    addBotLoader: boolean;
    bots: Bot[];
}

const initialState = {
    getBotsLoader: false,
    addBotLoader: false,
    bots: [],
};
const botsReducer = (state: State = initialState, action: any) => {
    if (action.type === 'GET_BOTS_REQ') {
        return {
            ...state,
            getBotsLoader: true,
            bots: [],
        };
    }
    if (action.type === 'GET_BOTS_RES') {
        return {
            ...state,
            getBotsLoader: false,
            bots: action.payload,
        };
    }
    if (action.type === 'ADD_BOTS_REQ') {
        return {
            ...state,
            addBotLoader: true,
        };
    }
    if (action.type === 'ADD_BOTS_RES') {
        return {
            ...state,
            addBotLoader: false,
        };
    }
    return state;
};
export default botsReducer;
