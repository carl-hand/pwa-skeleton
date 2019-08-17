import React from 'react';
import { css } from 'emotion';

const toggleButtonCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 36px;
  background-color: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;

  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
`;

const toggleButtonLineCss = css`
  height: 2px;
  width: 30px;
  background-color: white;
`;

export const DrawerToggleButton = props => (
  <button className={toggleButtonCss}>
    <div className={toggleButtonLineCss} />
    <div className={toggleButtonLineCss} />
    <div className={toggleButtonLineCss} />
  </button>
);
