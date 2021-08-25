import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {getPage} from '../../containers/Pages/Routes';
import HasAutorize from "../../components/User/HasAutorize";
import {connect} from "react-redux";
import ObjectHelper from "../../helpers/ObjectHelper";

interface Props {
    userAuth: any;
}

function ProfileLink(props: Props) {
    const {userAuth} = props;
    if (ObjectHelper.isEmpty(userAuth) || userAuth.status !== 200) {
        return <>Загрузка...</>;
    }
    const {user} = userAuth;
    return (
        <NavLink
            to="/profile"
            activeClassName="active"
            className="item"
        >
            {user.fullname}
        </NavLink>
    );
}

const mapStateToProps = (state: any) => {
    return {
        state,
        userAuth: state.user.userAuth,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileLink);