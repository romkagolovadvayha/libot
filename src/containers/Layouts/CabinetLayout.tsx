import React from 'react';
import Header from '../../components/Cabinet/Header';
import Sidebar from '../../components/Cabinet/Sidebar';
import Footer from '../../components/Cabinet/Footer';
import Authorization from '../../components/User/Authorization';

interface Props {
    children: any;
    authorization: boolean;
    notAuthorize: boolean;
    title: string;
}

export function CabinetLayout(props: Props) {
    const { children, authorization, notAuthorize, title } = props;
    document.title = title;
    return (
        <Authorization requared={authorization} notAuthorize={notAuthorize}>
            <Header/>
            <Sidebar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </Authorization>
    );
}
