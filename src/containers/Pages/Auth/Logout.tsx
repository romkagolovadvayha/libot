import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router";
import {setCurrentUser} from "../../../redux/actions";
import {connect} from "react-redux";

interface Props {
    setCurrentUser: any;
}

function Logout(props: Props) {
    const [redirect, setRedirect] = useState('');
    useEffect(() => {
        let cleanupFunction = false;
        if (!cleanupFunction) {
            localStorage.removeItem("token");
            props.setCurrentUser({});
            setRedirect('/login');
        }
        // функция очистки useEffect
        return () => {cleanupFunction = true};
    }, []);

    if (redirect.length > 0) {
        return <Redirect to={redirect}/>;
    }
    return <></>;
}

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Logout);