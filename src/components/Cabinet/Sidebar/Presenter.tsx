import React from 'react';
import ST from './styles';

export function Presenter() {
    return (
        <ST.Container>
            <ST.Child>
                <ST.List>
                    <ST.Item>
                        <a href="#test1">test1</a>
                    </ST.Item>
                </ST.List>
            </ST.Child>
        </ST.Container>
    );
}
