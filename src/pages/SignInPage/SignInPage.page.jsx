import React from "react";
import './SignInPage.styles.scss';
import CustomInput from "../../components/customInput/CustomInput.component";
import CustomButton from '../../components/customButton/CustomButton.component';
import Logo from '../../../src/logo.svg';

const SignInPage = () => {
    return (
        <div className="signInContainer">
            <img src={Logo} alt="" />
            <div className="container-fluid inputContainer">
                <div className="row px-3">
                    <div className="col-12 col-md-4 mb-4 mx-auto">
                        <label htmlFor="email">Email</label>
                        <CustomInput id='email' type='email' name='email' placeholder='example@email.com' />
                    </div>

                </div>
                <div className="row px-3">
                    <div className="col-12 col-md-4 mb-4 mx-auto">
                        <label htmlFor="password">Password</label>
                        <CustomInput id='password' type='password' name='password' placeholder='Password' />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-8 col-sm-4 col-md-2">
                        <CustomButton page="contact" text={'Sign In'}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignInPage;