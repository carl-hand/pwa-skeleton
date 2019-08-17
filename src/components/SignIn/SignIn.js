import React from 'react';
import { css } from 'emotion';

const formContainerCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const inputContainerCss = css`
  display: flex;
  flex-direction: column;
`;

const inputCss = css`
  display: block;
  margin-top: 8px;
  height: 16px;
  width: 100%;
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

const submitButtonCss = css`
  position: relative;
  top: 10px;
  width: 100px;
  height: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    buttonType: 'button',
    errors: {},
  };

  handleEmailChange = evt => {
    const email = evt.target.value;

    this.setState({
      email,
    });
  };

  handlePasswordChange = evt => {
    const password = evt.target.value;

    this.setState({
      password,
    });
  };

  handleClick = () => {
    const { email, password } = this.state;
    const errors = this.hasErrors(email, password);
    let buttonType = 'button';
    if (errors.isEmailFieldEmpty || errors.isPasswordFieldEmpty) {
      errors.emptyFieldsError = 'Please enter a value for all fields';
    } else {
      buttonType = 'submit';
      this.props.submit();
    }

    this.setState({
      buttonType,
      errors,
    });
  };

  hasErrors(email, password) {
    return {
      isEmailFieldEmpty: email.length === 0,
      isPasswordFieldEmpty: password.length === 0,
    };
  }

  render() {
    const { buttonType, errors } = this.state;
    const { emptyFieldsError } = errors;
    const errorMessage = emptyFieldsError ? (
      <p style={{ color: 'red', margin: 0 }}>{emptyFieldsError}</p>
    ) : null;

    return (
      <form className={formContainerCss}>
        <div className={inputContainerCss}>
          <input
            className={inputCss}
            placeholder="Email"
            onChange={this.handleEmailChange}
            type="email"
            id="email"
          />
        </div>
        <div className={inputContainerCss}>
          <input
            className={inputCss}
            placeholder="Password"
            onChange={this.handlePasswordChange}
            type="password"
            id="password"
          />
        </div>
        {errorMessage}
        <button
          onClick={this.handleClick}
          className={submitButtonCss}
          type={buttonType}
        >
          Log In
        </button>
      </form>
    );
  }
}
