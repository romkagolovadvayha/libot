import React from 'react';
import { Header } from '../../components/Molecules';
import Authorization from '../../containers/App/Authorization';

interface Props {
    children: any;
}

export function CabinetLayout(props: Props) {
    const { children } = props;
    return (
        <Authorization requared={true}>
            <Header/>
            {children}
        </Authorization>
    );
}
