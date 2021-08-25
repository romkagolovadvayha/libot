import React from 'react';
import {HeaderNav} from './HeaderNav';

export function Header() {
    return (
        <div className="ui attached stackable menu">
            <div className="ui container">
                <HeaderNav/>
            </div>
        </div>
    );
}
