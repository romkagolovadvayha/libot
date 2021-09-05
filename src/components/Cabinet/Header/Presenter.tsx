import React from 'react';
import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';
import ST from './styles';

interface Props {
    back?: string;
}

export function Presenter(props: Props) {
    const {back} = props;
    return (
        <ST.Container>
            <ST.Child>
                <HeaderLeft back={back}/>
                <HeaderRight/>
            </ST.Child>
        </ST.Container>
    );
}
