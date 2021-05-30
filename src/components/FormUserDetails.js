import React, { Components } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import RaisedButton from '@material-ui/core/RaisedButton';

export class FormUserDetails extends Components {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    };

    render() {
        const { values, handleChange } = this.props;
     return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title= "Enter User Details" />
                <TextField 
                hintText="Enter Your First Name"
                floatingLebelText="Frist Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                />
                <br/>
                <TextField 
                hintText="Enter Your Last Name"
                floatingLebelText="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                />
                <br/>
                <TextField 
                hintText="Enter Your Email"
                floatingLebelText="Email"
                onChange={handleChange('email')}
                defaultValue={values.email}
                />
                <br/>
                <RaisedButton
                label="Continue"
                primary={true}
                style={Styles.button}
                onClick={this.contiunue}
                />
            </React.Fragment>
        </MuiThemeProvider>
      );
    }  
}

const Styles = {
    button: {
        margin: 15,
    }
}

export default FormUserDetails;