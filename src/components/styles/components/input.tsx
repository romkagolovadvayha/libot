import React from 'react';
import Colors from '../atoms/colors';
import styled from "@emotion/styled";

const STInput = {
    Container: styled.div`
      border-left: solid 8px;
      border-color: ${Colors.Tea};
      background-color: ${Colors.LightTea};
      + div {
        margin-top: .5rem;
      }
    `,
    Title: styled.label`
      border: none;
      color: ${Colors.Tea};
      padding: 0 .5rem;
      font-size: .8125rem;
      line-height: 1.5rem;
      letter-spacing: .075rem;
      font-weight: 500;
      display: block;
    `,
    Control: styled.input`
      font-size: 1rem;
      line-height: 1.25rem;
      padding: .875rem .5rem;
      display: block;
      outline: none;
      border: none;
      background: transparent;
      width: 100%;
    `,
    Error: styled.strong`
      display: block;
      font-size: .8125rem;
      letter-spacing: .075rem;
      line-height: 1rem;
      padding: .5rem;
      color: #CF5F48;
    `,
};
export default STInput;