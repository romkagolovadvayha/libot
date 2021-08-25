import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/actions';
import {Formik} from 'formik';
import ValidateForm from './ValidateForm';
import {Input, Button} from '../../Atoms';
import {config} from "../../../config";
import {ReCaptcha} from 'react-recaptcha-v3'
import {Redirect} from "react-router";

interface Props {
    loginUser: any;
    loginUserLoader: boolean;
}

interface State {
    error: any;
    complete: boolean;
}

class LoginForm extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: '',
            complete: false,
        }
    }

    handlerSubmit = (values: any, setSubmitting: any) => {
        const {loginUser} = this.props;
        this.setState({error: ''});
        loginUser(values.login, values.password, values.recaptcha).then((data: any) => {
            setTimeout(() => {
                setSubmitting(false);
            }, 400)
            if (data.status !== 200) {
                this.setState({error: data.error});
            } else {
                localStorage.setItem("token", data.token);
                this.setState({complete: true});
            }
        });
    };

    handlerValidate = (values: any) => {
        const response = ValidateForm.execute(values);
        return response.errors;
    };

    verifyCallback = (token: string, setFieldValue: any) => {
        setFieldValue("recaptcha", token);
    };

    render() {
        const {loginUserLoader} = this.props;
        const {complete, error} = this.state;
        if (complete) {
            return <Redirect to='/'/>;
        }
        return (
            <>
                {loginUserLoader && <div>Загрузка...</div>}
                {!complete && <Formik
                    initialValues={{login: '', password: '', recaptcha: ''}}
                    validate={values => this.handlerValidate(values)}
                    onSubmit={(values, {setSubmitting}) => this.handlerSubmit(values, setSubmitting)}
                >
                    {({values, errors, touched, handleChange, handleSubmit, isSubmitting, setFieldValue}) => (
                        <form onSubmit={handleSubmit}>
                            {error && error.length > 0 && <div>{error}</div>}
                            <Input type="text" autocomplete="off" name="login" handleChange={handleChange} value={values.login} errorText={errors.login} touched={touched.login}/>
                            <Input type="password" autocomplete="off" name="password" handleChange={handleChange} value={values.password} errorText={errors.password} touched={touched.password}/>
                            <ReCaptcha
                                sitekey={config.reCaptchaKey}
                                action='submit'
                                verifyCallback={(token: string) => this.verifyCallback(token, setFieldValue)}
                            />
                            {errors.recaptcha
                            && touched.recaptcha && (
                                <div>{errors.recaptcha}</div>
                            )}
                            <Button disabled={isSubmitting}>Вход</Button>
                        </form>
                    )}
                </Formik>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        state,
        loginUserLoader: state.user.loginUserLoader,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    loginUser: (login: string, password: string, recaptcha: string) => dispatch(loginUser(login, password, recaptcha)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
