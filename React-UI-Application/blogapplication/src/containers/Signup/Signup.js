import React, { Component } from "react";
import { Button, HelpBlock, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import classes from './Signup.css';
import axios from '../../axios';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      name:""
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
    const data = {'email':this.state.email,
                  'password':this.state.password,
                  'name':this.state.name
                  }
    axios.post('/api/profile/', data)
        .then(response => {
            console.log(response);
            alert("Congratulations " + this.state.email + 'your account has been created, please login to continue' );
        });
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

        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>Name </ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.name}
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
