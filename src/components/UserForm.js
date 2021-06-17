import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
<<<<<<< HEAD
import FormPersonalDetails from './FormPersonalDetails';
 
=======

>>>>>>> 98166b938c80141d48e160135e808dcba192ebdf
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lasName: '',
    email: '',
    occupations: '',
    city: '',
    lastName: '',
    bio: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle fields change 
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

<<<<<<< HEAD
    //Handle fields change 
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };    
        
    render() {
        const { step } = this.state;
        const{ firstName, lastName, email, occupation, city,
        bio } = this.state;
        const values = { firstName, lastName, email, 
        occupation, city, bio };
        // eslint-disable-next-line
        switch(step) {
           case 1:
             return (
                 <FormUserDetails
                   nextStep={this.nextStep}
                   handleChange={this.handleChange}
                   values={values}
                 />
             );
        case 2:
            return  (
                <FormPersonalDetails
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
            );    
        case 3:
            return <hi>Confirm</hi>  
        case 4:
            return <hi>Success</hi>         
        } 
=======
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = {
      firstName, lastName, email, occupation, city, bio  };
    // eslint-disable-next-line
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <hi>FormPersonalDetails</hi>
      case 3:
        return <hi>Confirm</hi>
      case 4:
        return <hi>Success</hi>
>>>>>>> 98166b938c80141d48e160135e808dcba192ebdf
    }
  }
}

export default UserForm;

