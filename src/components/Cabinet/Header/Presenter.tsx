import React from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import ST from './styles';

export function Presenter() {
    return (
        <ST.Container>
            <ST.Child>
                <HeaderLeft/>
                <HeaderRight/>
            </ST.Child>
        </ST.Container>
    );
}
