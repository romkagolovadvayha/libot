import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser, setCurrentUser} from '../../../redux/actions';
import {Formik} from 'formik';
import ValidateForm from './ValidateForm';
import {Input, Button} from '../../Atoms';
import {config} from "../../../config";
import { ReCaptcha } from 'react-recaptcha-v3'

interface Props {
    addUser: any;
    setCurrentUser: any;
    addUserLoader: boolean;
}

interface State {
    error: any;
    complete: boolean;
}

class SignupForm extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            error: '',
            complete: false,
        }
    }

    handlerSubmit = (values: any, setSubmitting: any) => {
        const {addUser, setCurrentUser} = this.props;
        this.setState({error: ''});
        addUser(values.login, values.password, values.fullname, values.email, values.recaptcha).then((data: any) => {
            setTimeout(() => {
                setSubmitting(false);
            }, 400)
            if (data.status !== 200) {
                this.setState({error: data.error});
            } else {
                localStorage.setItem("token", data.token);
                setCurrentUser(data.user);
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
        const {addUserLoader} = this.props;
        const {complete, error} = this.state;
        return (
            <>
                {addUserLoader && <div>Загрузка...</div>}
                {!complete && <Formik
                    initialValues={{email: '', login: '', password: '', fullname: '', recaptcha: ''}}
                    validate={values => this.handlerValidate(values)}
                    onSubmit={(values, {setSubmitting}) => this.handlerSubmit(values, setSubmitting)}
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
                                verifyCallback={(token: string) => this.verifyCallback(token, setFieldValue)}
                            />
                            {errors.recaptcha
                            && touched.recaptcha && (
                                <div>{errors.recaptcha}</div>
                            )}
                            <Button disabled={isSubmitting}>Регистрация</Button>
                        </form>
                    )}
                </Formik>}
                {complete && <div>Регистрация пройдена!</div>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        state,
        addUserLoader: state.user.addUserLoader,
    };
};
const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    addUser: (login: string, password: string, fullname: string, email: string, recaptcha: string) => dispatch(addUser(login, password, fullname, email, recaptcha)),
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
