import React from 'react';
import styled from "@emotion/styled";

const ST = {
    List: styled.ul`
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
    `,
    Item: styled.li`
      padding: .5rem;
      & + li {
        margin-left: 1rem;
      }
    `,
};
export default ST;