import React, { useRef } from 'react';
import './Login.css'
import googleLogo from '../../../images/google.ico';
import bg from '../../../images/auth.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import Swal from 'sweetalert2';

const Login = () => {
    //  sweet alert
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    //   react hooks
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    let errorMessage;


    // signInMethod 
    const [
        signInWithEmailAndPassword, user, loading, error
    ] = useSignInWithEmailAndPassword(auth);


    // get location
    const from = location?.state?.from?.pathname || '/';
    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    };

    if (error) {
        errorMessage = <div><p className="text-danger">Wrong attempt!!! Please try again.</p></div>
    }

    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })
    }
    const handleNavigateRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <section>
                <div className="imgBox">
                    <img className='img-fluid w-100' src={bg} alt="" />
                </div>
                <div className="contentBox">
                    <div className="formBox">
                        <h2>Login</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="inputBox">
                                <span>Email</span>
                                <input type="email" ref={emailRef} name="email" />
                            </div>
                            <div className="inputBox">
                                <span>Password</span>
                                <input ref={passwordRef} type="password" name="password" />
                            </div>
                            {errorMessage}
                            <div className="inputBox">
                                <input type="submit" value="Login" />
                            </div>
                            <div className="inputBox">
                                <p>Don't have an account? <span onClick={() => handleNavigateRegister()}>Sign Up</span></p>
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

export default Login;