import React, { useRef, useState } from 'react';
import googleLogo from '../../../images/google.ico';
import bg from '../../../images/auth.svg'
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    let errorMessage;

    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (error) {
        errorMessage = <div><p className="text-danger">Wrong attempt! Please try again.</p></div>
    }
    if (user) {
        navigate('/');
    }

    const handleNavigateLogin = () => {
        navigate('/login');
    }

    const handleFomrSubmit = event => {
        event.preventDefault();
        const newUserName = userNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password, { sendEmailVerification });
        navigate('/login')
    }

    return (
        <div>
            <section>
                <div className="imgBox">
                    <img className='img-fluid w-100' src={bg} alt="" />
                </div>
                <div className="contentBox">
                    <div className="formBox">
                        <h2>Register</h2>
                        <form onSubmit={handleFomrSubmit}>
                            <div className="inputBox">
                                <span>Username</span>
                                <input type="text" ref={userNameRef} name="username" required />
                            </div>
                            <div className="inputBox">
                                <span>Email</span>
                                <input type="email" ref={emailRef} name="email" required />
                            </div>
                            <div className="inputBox">
                                <span>Password</span>
                                <input type="password" ref={passwordRef} name="password" required />
                            </div>
                            {errorMessage}
                            <div className="inputBox">
                                <input type="submit" value="Sigp Up" />
                            </div>
                            <div className="inputBox">
                                <p>Already have an account? <span onClick={() => handleNavigateLogin()}>Login</span></p>
                            </div>
                        </form>
                        <h3 className="socialLoginText">Continue with social media</h3>
                        <ul className="social">
                            <li onClick={() => signInWithGoogle()}><img src={googleLogo} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;