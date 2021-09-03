import React, {useEffect} from 'react';
import Authorization from '../../components/User/Authorization';
import {loadReCaptcha} from "react-recaptcha-v3";
import {config} from "../../config";

interface Props {
    children: any;
    authorization: boolean;
    notAuthorize: boolean;
    title: string;
}

export function LoginLayout(props: Props) {
    const { children, authorization, notAuthorize, title } = props;
    document.title = title;
    useEffect(() => {
        loadReCaptcha(config.reCaptchaKey);
    });
    return (
        <Authorization requared={authorization} notAuthorize={notAuthorize}>
            <div className="content">
                {children}
            </div>
        </Authorization>
    );
}
