import React from 'react';

interface Props {
    disabled: boolean;
    children: string;
    className?: string;
    onClick?: any;
}

export const Button = (props: Props) => {
    const {disabled, children, onClick, className} = props;

    return (
        <button
            type="submit"
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    );
};
