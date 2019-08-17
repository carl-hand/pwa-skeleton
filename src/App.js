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

export class App extends React.Component {
  state = {
    isSideDrawerOpen: false,
  };

  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  }

  render() {
    let sideDrawer = null;
    let backdrop = null;
    if (this.state.isSideDrawerOpen) {
      sideDrawer = <SideDrawer/>;
      backdrop = <Backdrop handleToggleSideDrawer={this.toggleSideDrawer}/>;
    }
    return (
      <div className={appContainerCss}>
        <Toolbar handleToggleSideDrawer={this.toggleSideDrawer}/>
        {sideDrawer}
        {backdrop}
        <div className={contentCss}>
          <p>This is the page content</p>
        </div>
      </div>
    );
  }
}
