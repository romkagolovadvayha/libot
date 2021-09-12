import React from 'react';
import STInput from '../styles/components/input';

interface Props {
    handleChange: any;
    value: string;
    type: string;
    name: string;
    placeholder?: string;
    labelText?: string;
    errorText?: string;
    autocomplete?: string;
    touched?: boolean;
}

export const Input = (props: Props) => {
    const {handleChange, value, type, name, placeholder, labelText, errorText, autocomplete, touched} = props;

    return (
        <STInput.Container>
            {labelText && labelText.length > 0 && <STInput.Title>{labelText}</STInput.Title>}
            <STInput.Control
                type={type}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                autoComplete={autocomplete}
                name={name}/>
            {errorText && touched && errorText.length > 0 && <STInput.Error>{errorText}</STInput.Error>}
        </STInput.Container>
    );
};
