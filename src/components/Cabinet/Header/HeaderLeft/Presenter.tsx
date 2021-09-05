import React from 'react';
import ST from "./styles";
import {NavLink} from "react-router-dom";
import {ReactSVG} from "react-svg";

interface Props {
    back?: string;
}

export function Presenter(props: Props) {
    const {back} = props;
    return (
        <ST.List>
            {back && <ST.Item>
                <NavLink to={back} activeClassName="back-active">
                    <ReactSVG wrapper="span" src="/images/left-arrow.svg" />
                    <span>Назад</span>
                </NavLink>
            </ST.Item>}
        </ST.List>
    );
}