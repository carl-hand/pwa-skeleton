import React from 'react';
import { Home } from './components/home/Home';
import { SignIn } from './components/SignIn/SignIn';
import { Register } from './components/Register/Register';

export class App extends React.Component {
  state = {
    isAuthenticated: false,
    renderRegisterPage: false,
  };

  handleSubmit = () => {
    this.setState({
      isAuthenticated: true,
    });
  }

  renderRegisterPage = () => {
    this.setState({
      renderRegisterPage: true,
    });
  }

  render() {
    let component;
    
    if (this.state.isAuthenticated) {
      component = <Home />;
    } else if (this.state.renderRegisterPage) {
      component = <Register />;
    } else {
    component = <SignIn submit={this.handleSubmit} showRegister={this.renderRegisterPage}/>;
    }
    
    return <>{component}</>;
  }
}
