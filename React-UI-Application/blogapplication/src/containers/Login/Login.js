import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import classes from './Login.css';
import axios from '../../axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    console.log(this.state.email + '  ' + this.state.password)
    const data = {'username':this.state.email,
                  'password':this.state.password
                  }

    axios.post('/api/login/', data)
        .then(response => {
            console.log(response);
            alert("User Logged In !")
        });

    event.preventDefault();
  }

  render() {
    return (
      <div className={classes.Login}>
      <h3>Login </h3>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>

          <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}


export default Login;
