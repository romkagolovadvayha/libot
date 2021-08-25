import api from '../api';

export const addUser = (login: string, password: string, fullname: string, email: string, recaptcha: string) => async (
    dispatch: any
) => {
    dispatch({ type: 'ADD_USER_REQ' });

    try {
        const req = await api.place.user.add(login, password, fullname, email, recaptcha);
        dispatch({ type: 'ADD_USER_RES', payload: req.data });
        return req.data;
    } catch (error: any) {
        dispatch({ type: 'ADD_USER_FAIL', payload: error.message });
    }
    return false;
};

export const getCurrentUser = () => async (
    dispatch: any
) => {
    dispatch({ type: 'GET_CURRENT_USER_REQ' });

    try {
        const req = await api.place.user.getCurrentUser();
        dispatch({ type: 'GET_CURRENT_USER_RES', payload: req.data });
        return req.data;
    } catch (error: any) {
        dispatch({ type: 'GET_CURRENT_USER_FAIL', payload: error.message });
    }
    return false;
};

export const setCurrentUser = (user: any) => async (
    dispatch: any
) => {
    dispatch({ type: 'SET_CURRENT_USER_REQ' });

    try {
        dispatch({ type: 'SET_CURRENT_USER_RES', payload: user });
        return user;
    } catch (error: any) {
        dispatch({ type: 'SET_CURRENT_USER_FAIL', payload: error.message });
    }
    return false;
};

export const loginUser = (login: string, password: string, recaptcha: string) => async (
    dispatch: any
) => {
    dispatch({ type: 'LOGIN_USER_REQ' });

    try {
        const req = await api.place.user.login(login, password, recaptcha);
        dispatch({ type: 'LOGIN_USER_RES', payload: req.data });
        return req.data;
    } catch (error: any) {
        dispatch({ type: 'LOGIN_USER_FAIL', payload: error.message });
    }
    return false;
};