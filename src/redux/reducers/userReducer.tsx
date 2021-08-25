const initialState = {
    addUserLoader: false,
    getUserAuthLoader: false,
    loginUserLoader: false,
    userAuth: {},
    user: {},
};
const userReducer = (state = initialState, action: any) => {
    if (action.type === 'ADD_USER_REQ') {
        return {
            ...state,
            addUserLoader: true
        };
    }
    if (action.type === 'ADD_USER_RES') {
        return {
            ...state,
            addUserLoader: false
        };
    }
    if (action.type === 'LOGIN_USER_REQ') {
        return {
            ...state,
            loginUserLoader: true,
            userAuth: {}
        };
    }
    if (action.type === 'LOGIN_USER_RES') {
        return {
            ...state,
            loginUserLoader: false,
            userAuth: action.payload
        };
    }
    if (action.type === 'SET_CURRENT_USER_REQ') {
        return {
            ...state,
            getUserAuthLoader: true,
            userAuth: {}
        };
    }
    if (action.type === 'SET_CURRENT_USER_RES') {
        return {
            ...state,
            getUserAuthLoader: false,
            userAuth: action.payload
        };
    }
    if (action.type === 'GET_CURRENT_USER_REQ') {
        return {
            ...state,
            getUserAuthLoader: true,
            userAuth: {},
        };
    }
    if (action.type === 'GET_CURRENT_USER_RES') {
        return {
            ...state,
            getUserAuthLoader: false,
            userAuth: action.payload,
        };
    }
    return state;
};
export default userReducer;
