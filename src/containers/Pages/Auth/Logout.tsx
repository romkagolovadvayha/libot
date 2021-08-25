import React from 'react';
import {Redirect} from "react-router";
import {setCurrentUser} from "../../../redux/actions";
import {connect} from "react-redux";

interface Props {
    setCurrentUser: any;
}

function Logout(props: Props) {
    localStorage.removeItem("token");
    props.setCurrentUser({});
    return <Redirect to="/login" />;
}

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Logout);