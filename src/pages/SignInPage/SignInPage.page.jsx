import React, { useState } from "react";
import './SignInPage.styles.scss';
import CustomInput from "../../components/customInput/CustomInput.component";
import CustomButton from '../../components/customButton/CustomButton.component';
import Logo from '../../../src/logo.svg';
import { auth } from "../../firebase/firebase.utils";

// Redux
import {setCurrentUser, setIsLoggedIn} from '../../redux/users/user.actions';
import { connect } from "react-redux";


const SignInPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleSignIn = async (event) => {
        event.preventDefault();

        setLoading(true);
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
            setLoading(false);

            console.log('User is logged in');
            // Redux
            setCurrentUser(auth.currentUser.uid);
            setIsLoggedIn(true)
        } catch (error) {
            setLoading(false);
            setIsLoggedIn(false);
            console.log(error);
        }

    }

    return (
        <div className="signInContainer">
            <img src={Logo} alt="" />
            <div className="container-fluid inputContainer">
                <div className="row px-3">
                    <div className="col-12 col-md-4 mb-4 mx-auto">
                        <label htmlFor="email">Email</label>
                        <CustomInput id='email' type='email' name='email' placeholder='example@email.com' value={email} handleChange={handleChange} />
                    </div>

                </div>
                <div className="row px-3">
                    <div className="col-12 col-md-4 mb-4 mx-auto">
                        <label htmlFor="password">Password</label>
                        <CustomInput id='password' type='password' name='password' placeholder='Password' value={password} handleChange={handleChange} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-8 col-sm-4 col-md-2">
                        <CustomButton page="contact" text={'Sign In'} handleClick={handleSignIn} />
                    </div>
                </div>
                <div className={`${loading ? 'd-flex' : 'd-none'} row justify-content-center mt-4`}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: userUid => dispatch(setCurrentUser(userUid)),
    setIsLoggedIn: isLoggedIn => dispatch(setIsLoggedIn(isLoggedIn))
});

export default connect(null, mapDispatchToProps)(SignInPage);