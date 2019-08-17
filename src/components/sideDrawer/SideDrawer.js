import React from 'react';
import { css } from 'emotion';

const sideDrawerCss = css`
  height: 100%;
  background-color: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  z-index: 200;
`;

export const SideDrawer = props => (
  <nav className={sideDrawerCss}>
    <ul>
      <li>
        <a href="/">Products</a>
      </li>
      <li>
        <a href="/">Users</a>
      </li>
    </ul>
  </nav>
);
