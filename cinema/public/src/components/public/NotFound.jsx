import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/style/NotFound.scss";

const NotFound = () => {
    const navigator = useNavigate()
    return (
        <div className='notfound'>
            <div className='shadow-notfound'>
                <div className='text-alerts'>
                    <h1>404</h1>
                    <h2>Not Found.</h2>
                    <p>the page you're looking for does not exist.</p>
                    <button onClick={() => navigator("/home", {replace: true})}>Home</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;