import React from 'react';
import { css } from 'emotion';

const sideDrawerCss = css`
  height: 100%;
  background-color: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
`;

const unorderedListCss = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;

  & li {
    margin: 10px 0;
  }

  & a {
    color: #521751;
    text-decoration: none;
    font-size: 20px;

    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      color: #fa923f;
    }
  }
`;

const sideDrawerOpenCss = css`
  transform: translateX(0);
`;

export const SideDrawer = props => {
  let sideDrawerClasses = sideDrawerCss;
  sideDrawerClasses += props.show ? ` ${sideDrawerOpenCss}` : '';

  return (
    <nav className={sideDrawerClasses}>
      <ul className={unorderedListCss}>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};
