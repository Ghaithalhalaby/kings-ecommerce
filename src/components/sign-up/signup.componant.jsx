import React , { Component } from 'react'
import FormInput from '../form-input/form-input.componant'
import CustomButton from '../custom-button/custom-button.componant'
import { auth, createUserProfileDocument, creatUserProfileDocument } from '../../firebase/firebase.utils'
import './signup.styles.scss'


export class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
       event.preventDefault(); 
       const { displayName , email , password, confirmPassword } = this.state;
       if( password !== confirmPassword) {
           alert("Passwords do not match");
           return;
       }

       try {
          const { user } = await auth.createUserWithEmailAndPassword( email, password )
          await creatUserProfileDocument( user, { displayName} );
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          })
       } catch (error) {
          console.error(error);
       }
    }
    handleChange = event => {
      const { name, value } = event.target 
      this.setState({ [name]: value});
    }
    render() {
        const { displayName , email , password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up iwth your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={ displayName }
                        onChange={this.handleChange}
                        label='Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={ email }
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={ password }
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={ confirmPassword }
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
