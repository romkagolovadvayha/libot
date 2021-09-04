import React from 'react';
import styled from "@emotion/styled";

const headerColor = '#f7f7f7';
const navBorderColor = '#d4d4d4';

const ST = {
    Container: styled.header`
      grid-area: header;
      z-index: 9;
      background-color: ${headerColor};
      border-bottom: 1px solid ${navBorderColor};
    `,
    Child: styled.div`
      display: flex;
      justify-content: space-between;
    `,
};
export default ST;