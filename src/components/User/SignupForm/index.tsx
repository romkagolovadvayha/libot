import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser, setCurrentUser} from '../../../redux/actions';
import {Presenter} from "./Presenter";

const mapStateToProps = (state: any) => {
    return {
        state,
        addUserLoader: state.user.addUserLoader,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    addUser: (login: string, password: string, fullname: string, email: string, recaptcha: string) => dispatch(addUser(login, password, fullname, email, recaptcha)),
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});
const SignupForm = connect(mapStateToProps, mapDispatchToProps)(Presenter);
export default SignupForm;
