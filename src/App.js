import React from 'react';
import { Home } from './components/home/Home';
import { SignIn } from './components/SignIn/SignIn';
import { Register } from './components/Register/Register';

export class App extends React.Component {
  state = {
    isAuthenticated: false,
  };

  handleSubmit = () => {
    this.setState({
      isAuthenticated: true,
    });
  }

  render() {
    // <SignIn submit={this.handleSubmit}/>
    const component = this.state.isAuthenticated ? <Home /> : <Register />;
    return <>{component}</>;
  }
}
