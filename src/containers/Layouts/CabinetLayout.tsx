import React, {useEffect} from 'react';
import { Header, Footer } from '../../components/Cabinet';
import Authorization from '../../containers/App/Authorization';
import {loadReCaptcha} from "react-recaptcha-v3";
import {config} from "../../config";

interface Props {
    children: any;
    authorization: boolean;
    notAuthorize: boolean;
}

export function CabinetLayout(props: Props) {
    const { children, authorization, notAuthorize } = props;
    return (
        <Authorization requared={authorization} notAuthorize={notAuthorize}>
            <Header/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </Authorization>
    );
}
