import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toolbar } from './components/toolbar/Toolbar';
import { css } from 'emotion';
import { SideDrawer } from './components/sideDrawer/SideDrawer';
import { Backdrop } from './components/backdrop/Backdrop';

const appContainerCss = css`
  height: 100%;
`;
const contentCss = css`
  position: relative;
  top: 64px;
`;

function App() {
  return (
    <div className={appContainerCss}>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
      <div className={contentCss}>
        <p>This is the page content</p>
      </div>
    </div>
  );
}

export default App;
