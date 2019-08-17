import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toolbar } from './components/toolbar/Toolbar';
import { css } from 'emotion';

const contentCss = css`
position: relative;
  top: 64px;
`;

function App() {
  return (
    <div>
      <Toolbar />
      <div className={contentCss}>
        <p>This is the page content</p>
      </div>
    </div>
  );
}

export default App;
