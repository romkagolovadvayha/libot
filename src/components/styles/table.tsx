import React from 'react';
import styled from "@emotion/styled";

const Table = {
    Container: styled.table`
      display: grid;
      border-collapse: collapse;
      min-width: 100%;
      grid-template-columns: 
    50px
    minmax(150px, 1fr);
    `,
    Header: styled.thead`
      display: contents;
    `,
    HeaderItemList: styled.tr`
      display: contents;
    `,
    HeaderItem: styled.th`
      position: sticky;
      top: 0;
      background: #267edb;
      text-align: left;
      font-weight: normal;
      font-size: 1.1rem;
      color: white;
      padding: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:last-child {
        border: 0;
      }
    `,
    Body: styled.tbody`
      display: contents;
    `,
    BodyItemList: styled.tr`
      display: contents;

      &:nth-child(even) td {
        background: #f8f6ff;
      }
    `,
    BodyItem: styled.td`
      padding: 15px;
      color: #808080;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,
};
export default Table;