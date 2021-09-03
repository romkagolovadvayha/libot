import React from 'react';
import HeaderNav from './HeaderNav';
import ST from './styles';

export function Presenter() {
    return (
        <ST.Container>
            <ST.Child>
                <HeaderNav/>
            </ST.Child>
        </ST.Container>
    );
}
