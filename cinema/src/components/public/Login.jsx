import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { validationSignup, validationLogin } from '../../functions/loginError';
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/style/Login.scss";
import 'aos/dist/aos.css';

// images
import img1 from "../../assets/image/feature-3.png";
import img2 from "../../assets/image/feature-4.png";

// component
import Footer from './Footer';

// React-toastify
const notify = (type, text) => {
    if(type === "success") toast(text);
    else if(type === "invalid") toast(text);
};

const Login = () => {
    AOS.init();
    const navigator = useNavigate()
    const formDom = useRef(null);

    const [touch, setTouch] = useState(false);
    const [signup, setSignup] = useState(false);
    const [error, setError] = useState({});
    const [dataLogin, setDataLogin] = useState({usernameValue: "", passwordValue: ""});
    const [dataSignup, setDataSignup] = useState({usernameValue: "", passwordValue: "", confirmValue: ""});

    const inputValueHandler = event => {
        setDataLogin({...dataLogin, [event.target.name]: event.target.value});
        setDataSignup({...dataSignup, [event.target.name]: event.target.value});
    }
    const spanHandler = () => {
        setSignup(!signup);
        setDataLogin({usernameValue: "", passwordValue: ""});
        setDataSignup({usernameValue: "", passwordValue: "", confirmValue: ""});
        setTouch({});
        formDom.current.style = signup === false ? "transform: rotateX(360deg);" : "transform: rotateX(0deg);"
    }
    const focusHandler = event => {
        setTouch({...touch, [event.target.name]: true});
    }
    const buttonHandler = () => {
        if(Object.keys(error).length === 0 && signup){
            notify("success", "Sign Up Successfully");
            setTimeout(() => {
                navigator("/home", {replace: true})
            }, 3000);
        }else if (Object.keys(error).length === 0 && signup === false){
            notify("success", "Login Successfully");
            setTimeout(() => {
                navigator("/home", {replace: true})
            }, 3000);
        } else if (Object.keys(error).length > 0){
            notify("invalid", "Invalid Data");
        }
    }

    useEffect(() => {
        signup ? setError(validationSignup(dataSignup)) : setError(validationLogin(dataLogin));
    },[dataLogin, dataSignup, touch])

    return (
        <>
        
            <div className='background'>
                <div className='shadow'>
                    {
                        signup ? <div className='form form-signin' ref={formDom}>
                            <h1>Sign up</h1>
                            <input type='email' name='usernameValue' value={dataSignup.usernameValue} onChange={inputValueHandler} placeholder='email' onFocus={focusHandler}/>
                            {error.usernameError && touch.usernameValue && <span className='error'>{error.usernameError}</span>}
                            <input type='password' name='passwordValue' value={dataSignup.passwordValue} onChange={inputValueHandler} placeholder='password' onFocus={focusHandler}/>
                            {error.passwordError && touch.passwordValue && <span className='error'>{error.passwordError}</span>}
                            <input type='password' name='confirmValue' value={dataSignup.confirmValue} onChange={inputValueHandler} placeholder='confirm password' onFocus={focusHandler}/>
                            {error.confirmError && touch.confirmValue && <span className='error'>{error.confirmError}</span>}
                            <p>Already have an account? <span className='span-page' onClick={spanHandler}>Log in</span></p>
                            <button onClick={buttonHandler}>Sign up</button>
                        </div> : <div className='form form-login' ref={formDom}>
                            <h1>Login</h1>
                            <input type='email' name='usernameValue' value={dataLogin.usernameValue} onChange={inputValueHandler} placeholder='email' onFocus={focusHandler}/>
                            {error.usernameError && touch.usernameValue && <span className='error'>{error.usernameError}</span>}
                            <input type='password' name='passwordValue' value={dataLogin.passwordValue} onChange={inputValueHandler} placeholder='password' onFocus={focusHandler}/>
                            {error.passwordError && touch.passwordValue && <span className='error'>{error.passwordError}</span>}
                            <p>Don't have an account? <span className='span-page' onClick={spanHandler}>Sign up</span></p>
                            <button onClick={buttonHandler}>Login</button>
                        </div>
                    }
                </div>
            </div>
            <div className='section-1'>
                <div className='title-1' data-aos="fade-right" data-aos-delay="100">
                    <h1>Watch everywhere.</h1>
                    <p>Watch movies without restrictions on phones, tablets, laptops.</p>
                </div>
                <div className='image-1' data-aos="fade-left" data-aos-delay="100">
                    <img src={img1} alt='pic1'/>
                </div>
            </div>
            <div className='section-2'>
                <div className='image-2' data-aos="fade-right" data-aos-delay="100">
                    <img src={img2} alt='pic2'/>
                </div>
                <div className='title-2' data-aos="fade-left" data-aos-delay="100">
                    <h1>Create profiles for children.</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them.</p>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer />
        </>
    );
};

export default Login;

 