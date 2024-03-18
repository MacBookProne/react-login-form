import React from 'react';

const LoginForm = () => {
    return (
        // login form
        <div className="login-form">
            <h3>Log In</h3>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
        </div>
    );
};

export default LoginForm;
