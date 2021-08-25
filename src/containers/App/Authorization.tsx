import React, {useState, useEffect} from 'react';
import {getCurrentUser} from "../../redux/actions";
import ObjectHelper from "../../helpers/ObjectHelper";
import {connect} from "react-redux";
import {Redirect} from "react-router";

interface Props {
    children: any;
    getCurrentUser: any;
    getUserAuthLoader: boolean;
    userAuth: any;
    requared: boolean;
    notAuthorize: boolean;
}

function Authorization(props: Props) {
    const {children, getCurrentUser, getUserAuthLoader, userAuth, requared} = props;
    const [redirect, setRedirect] = useState('');
    useEffect(() => {
        let cleanupFunction = false;
        if (!cleanupFunction) {
            if (!ObjectHelper.isEmpty(userAuth)) {
                const rCheckAuth = checkAuthorization(userAuth.status, requared);
                if (rCheckAuth !== false) {
                    setRedirect(rCheckAuth);
                }
            }
            if (!getUserAuthLoader && ObjectHelper.isEmpty(userAuth)) {
                getCurrentUser().then((data: any) => {
                    const rCheckAuth = checkAuthorization(data.status, requared);
                    if (rCheckAuth !== false) {
                        setRedirect(rCheckAuth);
                    }
                });
            }
        }
        // функция очистки useEffect
        return () => {
            cleanupFunction = true
        };
    }, []);

    function checkAuthorization(status: number, redirect?: boolean) {
        const {notAuthorize} = props;
        if (redirect && status !== 200) {
            return "/login";
        } else if (status === 200 && notAuthorize) {
            return "/";
        }
        return false;
    }

    if (redirect.length > 0) {
        return <Redirect to={redirect}/>;
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

