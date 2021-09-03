import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import ObjectHelper from "../../../helpers/ObjectHelper";
import {Redirect} from "react-router";
import ValidateForm from "./ValidateForm";
import {Formik} from "formik";
import {Button, Input} from "../../Atoms";
import {ReCaptcha} from "react-recaptcha-v3";
import {config} from "../../../config";

interface Props {
    addUser: any;
    setCurrentUser: any;
    addUserLoader: boolean;
}

export function Presenter(props: Props) {
    const [error, setError] = useState('');
    const [complete, setComplete] = useState(false);
    const {addUserLoader} = props;

    function handlerSubmit(values: any, setSubmitting: any) {
        const {addUser, setCurrentUser} =props;
        setError('');
        addUser(values.login, values.password, values.fullname, values.email, values.recaptcha).then((data: any) => {
            if (data.status !== 200) {
                setError(data.error);
                setSubmitting(false);
            } else {
                localStorage.setItem("token", data.token);
                setCurrentUser(data);
                setComplete(true);
            }
        });
    }

    function handlerValidate(values: any) {
        const {errors} = ValidateForm.execute(values);
        return errors;
    }

    function verifyCallback(token: string, setFieldValue: any) {
        setFieldValue("recaptcha", token);
    }

    if (complete) {
        return <Redirect to='/'/>;
    }
    return (
        <>
            {addUserLoader && <div>Загрузка...</div>}
            <Formik
                initialValues={{email: '', login: '', password: '', fullname: '', recaptcha: ''}}
                validate={values => handlerValidate(values)}
                onSubmit={(values, {setSubmitting}) => handlerSubmit(values, setSubmitting)}
            >
                {({values, errors, touched, handleChange, handleSubmit, isSubmitting, setFieldValue}) => (
                    <form onSubmit={handleSubmit}>
                        {error && error.length > 0 && <div>{error}</div>}
                        <Input type="text" autocomplete="off" name="login" handleChange={handleChange} value={values.login} errorText={errors.login} touched={touched.login}/>
                        <Input type="email" name="email" handleChange={handleChange} value={values.email} errorText={errors.email} touched={touched.email}/>
                        <Input type="text" autocomplete="off" name="fullname" handleChange={handleChange} value={values.fullname} errorText={errors.fullname} touched={touched.fullname}/>
                        <Input type="password" autocomplete="off" name="password" handleChange={handleChange} value={values.password} errorText={errors.password} touched={touched.password}/>
                        <ReCaptcha
                            sitekey={config.reCaptchaKey}
                            action='submit'
                            verifyCallback={(token: string) => verifyCallback(token, setFieldValue)}
                        />
                        {errors.recaptcha
                        && touched.recaptcha && (
                            <div>{errors.recaptcha}</div>
                        )}
                        <Button disabled={isSubmitting}>Регистрация</Button>
                    </form>
                )}
            </Formik>
        </>
    );
}