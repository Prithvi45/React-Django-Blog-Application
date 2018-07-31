import React, { Component } from "react";
import { Button, HelpBlock, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import classes from './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = async event => {
    console.log(this.state.email)
    alert("Congratulations " + this.state.email )
    event.preventDefault();
  }

  renderForm() {
    return (
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
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>

        <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
          Signup
        </Button>

      </form>
    );
  }

  render() {
    return (
      <div className={classes.Signup}>
        <h3>Register</h3>
        {this.renderForm()}
      </div>
    );
  }
}
export default Signup;
