import React from 'react';
import styled from "@emotion/styled";

const height = '50px';
const iconWidth = '20px';
const navBorderColor = '#d4d4d4';
const navColorActive = '#267edb';
const navColorHover = '#c4e2ff';
const navBorderColorActive = '#002856';

const ST = {
    List: styled.ul`
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
    `,
    Item: styled.li`
      > a {
        height: ${height};
        text-align: center;
        color: #000;
        font-size: 14px;
        text-decoration: none;
        padding: .5rem 2rem;
        line-height: ${iconWidth};
        display: flex;
        align-items: center;
        border-left: 1px solid ${navBorderColor};
        > span:first-of-type {
          width: ${iconWidth};
          .icon {
            width: ${iconWidth};
            height: ${iconWidth};
            overflow: hidden;
            fill: #000;
          }
        }
        > span:last-of-type {
          display: block;
          margin-left: .5rem;
        }
        &:hover {
          background-color: ${navColorHover};
          .icon {
            fill: #000 !important;
          }
        }
        &.active {
          background-color: ${navColorActive};
          color: #fff;
          .icon {
            fill: #fff !important;
          }
        }
      }
    `,
};
export default ST;