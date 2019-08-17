import React from 'react';
import { formContainerCss } from '../../sharedStyles/form';
import { inputContainerCss, inputCss } from '../../sharedStyles/input';
import { buttonCss } from '../../sharedStyles/button';

export class Register extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
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

  handleConfirmPasswordChange = evt => {
    const confirmPassword = evt.target.value;

    this.setState({
      confirmPassword,
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
        <div className={inputContainerCss}>
          <input
            className={inputCss}
            placeholder="Confirm password"
            onChange={this.handleConfirmPasswordChange}
            type="password"
            id="confirmPassword"
          />
        </div>
        {errorMessage}
        <button
          onClick={this.handleClick}
          className={buttonCss}
          type={buttonType}
        >
          Register
        </button>
      </form>
    );
  }
}