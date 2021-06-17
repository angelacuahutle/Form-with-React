import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="Frist Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLebelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLebelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <Button
            variant="contained"
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.contiunue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  }
}

export default FormPersonalDetails;