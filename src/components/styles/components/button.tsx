import React from 'react';
import Colors from '../atoms/colors';
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import { css } from '@emotion/react'

const buttonStyled = css`
  padding: .5rem .75rem;
  white-space: nowrap;
  line-height: 1.5rem;
  text-transform: uppercase;
  color: #FFFBF2;
  text-align: center;
  cursor: pointer;
  background-color: ${Colors.Tea};
  box-shadow: 1px 1px 1px 0 ${Colors.LightTea};
  outline: none;
  border: none;
  display: inline-block;
  font-size: 14px;
`;

const STButton = {
    Action: styled.button`
      ${buttonStyled}
    `,
    LinkAction: styled(NavLink)`
      ${buttonStyled};
      text-decoration: none;
    `,
};
export default STButton;