import React from 'react';

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
        <div className="input">
            {labelText && labelText.length > 0 && <label>{labelText}</label>}
            <input
                type={type}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                autoComplete={autocomplete}
                name={name}/>
            {errorText && touched && errorText.length > 0 && <small>{errorText}</small>}
        </div>
    );
};
