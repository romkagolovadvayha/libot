import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/actions';
import {Presenter} from "./Presenter";

const mapStateToProps = (state: any) => {
    return {
        state,
        loginUserLoader: state.user.loginUserLoader,
        userAuth: state.user.userAuth,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    loginUser: (login: string, password: string, recaptcha: string) => dispatch(loginUser(login, password, recaptcha)),
});

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(Presenter);
export default LoginForm;
