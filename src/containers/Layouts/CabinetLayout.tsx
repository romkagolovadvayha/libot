import React, {useEffect} from 'react';
import { Header } from '../../components/Molecules';
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
    useEffect(() => {
        loadReCaptcha(config.reCaptchaKey);
    });
    return (
        <Authorization requared={authorization} notAuthorize={notAuthorize}>
            <Header/>
            {children}
        </Authorization>
    );
}
