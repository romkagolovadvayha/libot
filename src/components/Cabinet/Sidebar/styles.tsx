import React from 'react';
import styled from "@emotion/styled";

const ST = {
    Container: styled.aside`
      grid-area: sidebar;
      border-left: 1px solid #d4d4d4;
    `,
    Child: styled.div`
      background: #fff;
    `,
    List: styled.ul`
      background: #fff;
    `,
    Item: styled.li`
      background: #fff;
    `,
};
export default ST;