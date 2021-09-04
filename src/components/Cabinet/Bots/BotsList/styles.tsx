import React from 'react';
import styled from "@emotion/styled";
import "typeface-roboto";

const ST = {
    Container: styled.footer`
      grid-area: footer;
      background-color: rgb(245, 250, 255);
      height: 120px;
      bottom: 0;
      left: 1px;
      right: 1px;
      border: 10px solid rgb(245, 250, 255);
      z-index: 8;
      display: flex;
      justify-content: space-between;
      padding: 2rem;
    `,
    CopyRight: styled.div`
      color: rgb(143, 149, 167);
      font-size: 12px;

      > span {
        margin-top: 1rem;
        display: block;
      }
    `,
    CopyRightLogo: styled.div`
      color: #267edb;
      font-size: 22px;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;

      > span {
        color: #000;
      }
    `,
    Contacts: styled.div`
      > span {
        font-size: 12px;
        display: block;

        + span {
          margin-top: .25rem;
        }

        + a {
          display: block;
          margin-top: .5rem;
        }
      }
    `,
};
export default ST;