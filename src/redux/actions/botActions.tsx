import api from '../api';

export const getBots = () => async (
    dispatch: any
) => {
    dispatch({ type: 'GET_BOTS_REQ' });

    try {
        const req = await api.place.bots.getBots();
        dispatch({ type: 'GET_BOTS_RES', payload: req.data.response.bots });
        return req.data.response.bots;
    } catch (error: any) {
        dispatch({ type: 'GET_BOTS_FAIL', payload: error.message });
    }
    return false;
};

export const addBot = (name: string, apiKey: string) => async (
    dispatch: any
) => {
    dispatch({ type: 'ADD_BOTS_REQ' });

    try {
        const req = await api.place.bots.addBot(name, apiKey);
        dispatch({ type: 'ADD_BOTS_RES', payload: req.data });
        return req.data;
    } catch (error: any) {
        dispatch({ type: 'ADD_BOTS_FAIL', payload: error.message });
    }
    return false;
};