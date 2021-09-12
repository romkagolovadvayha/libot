import React from 'react';
import STButton from '../styles/components/button';

interface Props {
    disabled: boolean;
    children: string;
    className?: string;
    onClick?: any;
}

export const Button = (props: Props) => {
    const {disabled, children, onClick, className} = props;

    return (
        <STButton.Action
            type="submit"
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </STButton.Action>
    );
};
