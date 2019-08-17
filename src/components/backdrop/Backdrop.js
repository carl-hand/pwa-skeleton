import React from 'react';
import { css } from 'emotion';

const backdropCss = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const Backdrop = props => <div className={backdropCss} />;
