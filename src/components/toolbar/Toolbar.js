import React from 'react';
import { css } from 'emotion';
import { DrawerToggleButton } from '../sideDrawer/DrawerToggleButton';

const toolbarHeaderCss = css`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #521751;
  height: 56px;
`;

const toolbarNavigationCss = css`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 1px 10px;
`;

const toolbarLogoCss = css`
  position: relative;
  left: 10px;

  & a {
    color: white;
    text-decoration: none;
    font-size: 40px;
  }
`;

const toolbarNavItemContainerCss = css`
  flex: 1;
`;

const unorderedListCss = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  & li {
    padding: 0 10px;
  }

  & a {
    color: white;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: #fa923f;
      cursor: pointer;
    }
  }
`;

export const Toolbar = props => (
  <header className={toolbarHeaderCss}>
    <nav className={toolbarNavigationCss}>
      <div>
        <DrawerToggleButton handleToggleSideDrawer={props.handleToggleSideDrawer}/>
      </div>
      <div className={toolbarLogoCss}>
        <a href="/">The Logo</a>
      </div>
      <div className={toolbarNavItemContainerCss}>
        <ul className={unorderedListCss}>
          <li>
            <a href="/">
              Products
            </a>
          </li>
          <li>
            <a href="/">
              Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
