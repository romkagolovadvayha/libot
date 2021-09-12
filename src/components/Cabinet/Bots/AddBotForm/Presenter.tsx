import React, {useState} from 'react';
import {Formik} from "formik";
import {Button, Input} from "../../../Atoms";
import ValidateForm from "./ValidateForm";
import {Redirect} from "react-router";
import styled from "@emotion/styled";

interface Props {
    addBot: any;
    addBotLoader: boolean;
}

const Form = styled.form`
  width: 400px;
`;
const ButtonStyle = styled(Button)`
  margin-top: .5rem;
`;

export function Presenter(props: Props) {
    const [error, setError] = useState('');
    const [complete, setComplete] = useState(false);

    function handlerSubmit(values: any, setSubmitting: any) {
        const {addBot} = props;
        setError('');
        addBot(values.name, values.apiKey).then((data: any) => {
            if (data.status !== 200) {
                setError(data.error);
                setSubmitting(false);
            } else {
                setComplete(true);
            }
        });
    }

    function handlerValidate(values: any) {
        const {errors} = ValidateForm.execute(values);
        return errors;
    }

    if (complete) {
        return <Redirect to='/bots'/>;
    }
    return (
        <>
            <Formik
                initialValues={{name: '', apiKey: ''}}
                validate={values => handlerValidate(values)}
                onSubmit={(values, {setSubmitting}) => handlerSubmit(values, setSubmitting)}
            >
                {({values, errors, touched, handleChange, handleSubmit, isSubmitting, setFieldValue}) => (
                    <Form onSubmit={handleSubmit}>
                        {error && error.length > 0 && <div>{error}</div>}
                        <Input type="text" autocomplete="off" name="name" handleChange={handleChange} value={values.name} labelText="Название" errorText={errors.name} touched={touched.name}/>
                        <Input type="text" autocomplete="off" name="apiKey" handleChange={handleChange} value={values.apiKey} labelText="Api ключ geitio" errorText={errors.apiKey} touched={touched.apiKey}/>
                        <ButtonStyle disabled={isSubmitting}>Добавить</ButtonStyle>
                    </Form>
                )}
            </Formik>
        </>
    );
}
