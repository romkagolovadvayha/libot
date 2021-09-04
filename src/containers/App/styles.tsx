import React from 'react';
import "typeface-roboto";
import {css} from "@emotion/react";
import emotionReset from "emotion-reset";

const styles = css`
  ${emotionReset}
  html, body {
    font-family: 'Roboto', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 0.4em;
  }

  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.00);
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .1);
    outline: 1px solid slategrey;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;
export default styles;