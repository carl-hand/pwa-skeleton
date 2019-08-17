import React from 'react';
import { Toolbar } from '../toolbar/Toolbar';
import { css } from 'emotion';
import { Backdrop } from '../backdrop/Backdrop';
import { SideDrawer } from '../sideDrawer/SideDrawer';

const appContainerCss = css`
  height: 100%;
`;
const contentCss = css`
  position: relative;
  top: 64px;
`;

export class Home extends React.Component {
  state = {
    isSideDrawerOpen: false,
  };

  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  }

  render() {
    let backdrop = null;
    if (this.state.isSideDrawerOpen) {
      backdrop = <Backdrop handleToggleSideDrawer={this.toggleSideDrawer}/>;
    }
    return (
      <div className={appContainerCss}>
        <Toolbar handleToggleSideDrawer={this.toggleSideDrawer}/>
        <SideDrawer show={this.state.isSideDrawerOpen} />
        {backdrop}
        <div className={contentCss}>
          <p>This is the page content</p>
        </div>
      </div>
    );
  }
}
