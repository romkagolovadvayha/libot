import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Pages } from '../../containers/Pages/Routes';

export function Header() {
    return (
        <div className="ui attached stackable menu">
            <div className="ui container">
                {Pages.filter((page: any) => page.isHeaderMenu).map(
                    (page: any, index: any) => (
                        <NavLink
                            to={page.link}
                            activeClassName="active"
                            className="item"
                            key={index.toString()}
                        >
                            {page.title}
                        </NavLink>
                    )
                )}
            </div>
        </div>
    );
}
