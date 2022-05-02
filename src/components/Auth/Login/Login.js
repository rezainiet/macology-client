import React from 'react';
import './Login.css'
import googleLogo from '../../../images/google.ico';
import bg from '../../../images/auth.svg'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleNavigateRegister = () => {
        navigate('/register');
    }
    return (
        <div>
            <section>
                <div className="imgBox">
                    <img className='img-fluid w-100' src={bg} alt="" />
                </div>
                <div className="contentBox">
                    <div className="formBox">
                        <h2>Login</h2>
                        <form>
                            <div className="inputBox">
                                <span>Email</span>
                                <input type="email" name="email" />
                            </div>
                            <div className="inputBox">
                                <span>Password</span>
                                <input type="password" name="password" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Login" />
                            </div>
                            <div className="inputBox">
                                <p>Don't have an account? <span onClick={() => handleNavigateRegister()}>Sign Up</span></p>
                            </div>
                        </form>
                        <h3 className="socialLoginText">Continue with social media</h3>
                        <ul className="social">
                            <li><img src={googleLogo} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;