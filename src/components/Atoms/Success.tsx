import React from 'react';

interface Props {
  message: string;
}

export const Success = (props: Props) => {
    const { message } = props;
    return (
        <div className="ui success message">
            <p>{message}</p>
        </div>
    );
};
