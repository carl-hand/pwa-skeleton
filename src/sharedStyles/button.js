import { css } from 'emotion';

export const buttonCss = css`
  min-width: 110px;
  background-color: #521751;
  color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  font-size: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  min-height: 36px;
  box-sizing: border-box;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  outline: none;
  position: relative;
  user-select: none;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  letter-spacing: 1.5px;

  position: relative;
  top: 20px;

  &:hover {
    cursor: pointer;
  }
`;
