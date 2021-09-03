import React from 'react';
import {NavLink} from 'react-router-dom';
import {getPage} from '../../../../containers/Pages/Routes';
import ProfileLink from '../../ProfileLink';
import ST from "./styles";

export function Presenter() {

    function pageLink(page: any) {
        return <NavLink
            to={page.link}
            activeClassName="active"
            className="item"
        >
            {page.title}
        </NavLink>;
    }

    return (
        <ST.List>
            <ST.Item>
                {pageLink(getPage('home'))}
            </ST.Item>
            <ST.Item>
                <ProfileLink/>
            </ST.Item>
        </ST.List>
    );
}