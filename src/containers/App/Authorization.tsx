import React, { useState, useEffect } from 'react';
import {getCurrentUser} from "../../redux/actions";
import ObjectHelper from "../../helpers/ObjectHelper";
import {connect} from "react-redux";
import { Redirect } from "react-router";

interface Props {
    children: any;
    getCurrentUser: any;
    getUserAuthLoader: boolean;
    userAuth: any;
    requared: boolean;
}

function Authorization(props: Props) {
    const { children, getCurrentUser, getUserAuthLoader, userAuth, requared } = props;
    const [redirect, setRedirect] = useState('');
    useEffect(() => {
        if (!ObjectHelper.isEmpty(userAuth)) {
            checkAuthorization(userAuth.status, requared);
        }
        if (!getUserAuthLoader && ObjectHelper.isEmpty(userAuth)) {
            getCurrentUser().then((data: any) => {
                checkAuthorization(data.status, requared);
            });
        }
    });

    function checkAuthorization(status: number, redirect?: boolean) {
        if (redirect && status !== 200) {
            setRedirect('/login');
        }
    }

    if (redirect.length > 0) {
        return <Redirect to={redirect} />;
    }
    return (
        <>
            {children}
        </>
    );
}
const mapStateToProps = (state: any) => {
    return {
        state,
        getUserAuthLoader: state.user.getUserAuthLoader,
        userAuth: state.user.userAuth,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getCurrentUser: () => dispatch(getCurrentUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);

