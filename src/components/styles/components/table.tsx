import React from 'react';
import Colors from '../atoms/colors';
import styled from "@emotion/styled";

const Table = {
    Container: styled.table`
      display: grid;
      border-collapse: collapse;
      min-width: 100%;
      grid-template-columns: 
    50px
    minmax(150px, 1fr)
    200px
    200px
    150px;
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
      background: ${Colors.Tea};
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
      &:nth-of-type(even) td {
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