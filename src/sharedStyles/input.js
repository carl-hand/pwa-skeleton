import { css } from 'emotion';

export const inputContainerCss = css`
  display: flex;
  flex-direction: column;
`;

export const inputCss = css`
  display: block;
  margin-top: 8px;
  height: 25px;
  width: 300px;
  padding: 6px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.14902),
    0 1px 0 rgba(0, 0, 0, 0.0196078);
  margin-bottom: 10px;
  font-size: 12px;

  &:hover {
    border-color: #717a8a;
  }

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 3 rgba(0, 123, 255, 0.25);
  }
`;
