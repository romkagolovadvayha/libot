import React, {useEffect} from 'react';
import {Header} from '../../components/Molecules';
import {config} from "../../config";
import { loadReCaptcha } from 'react-recaptcha-v3'

interface Props {
    children: any;
}

export function AuthLayout(props: Props) {
    const {children} = props;
    useEffect(() => {
        loadReCaptcha(config.reCaptchaKey);
    });
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
