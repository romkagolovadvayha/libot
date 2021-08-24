import React from 'react';

interface Props {
  message: string;
}

export function Error(props: Props) {
    const { message } = props;

    return (
        <div className="ui error message">
            <div className="header">Произошла ошибка</div>
            <p>{message}</p>
        </div>
    );
}
