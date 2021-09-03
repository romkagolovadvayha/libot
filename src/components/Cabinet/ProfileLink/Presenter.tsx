import React from 'react';
import {NavLink} from 'react-router-dom';

interface Props {
    userAuth: any;
}

export function Presenter(props: Props) {
    const {userAuth} = props;
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