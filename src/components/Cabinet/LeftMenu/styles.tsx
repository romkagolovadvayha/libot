import React from 'react';
import styled from "@emotion/styled";
import Colors from '../../styles/atoms/colors';

const width = '100px';
const height = '100px';
const iconWidth = '30px';
const navColor = '#f7f7f7';
const navBorderColor = '#d4d4d4';
const navColorActive = Colors.Tea;
const navColorHover = '#c4e2ff';
const navBorderColorActive = '#002856';

const ST = {
    Container: styled.section`
      grid-area: leftnav;
      background-color: ${navColor};
      height: 100vh;
      min-height: 670px;
      overflow-y: auto;
      overflow-x: hidden;
      box-shadow: 0 0 10px #0006;
      z-index: 10;
    `,
    List: styled.ul`
      background-color: ${navColor};
    `,
    Item: styled.li`
      > a {
        width: ${width};
        height: ${height};
        display: block;
        text-align: center;
        padding-top: 23px;
        color: #000;
        font-size: 16px;
        text-decoration: none;
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
          margin-top: 5px;
        }
        
        &:hover {
          background-color: ${navColorHover};
          .icon {
            fill: #000 !important;
          }
        }

        &.active {
          background-color: ${navColorActive};
          border-top: 1px solid ${navBorderColorActive};
          color: #fff;
          .icon {
            fill: #fff !important;
          }
        }
      }
      + li {
        > a {
          border-top: 1px solid ${navBorderColor};
        }
      }
    `,
};

export default ST;