import React from 'react';
import {Link} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleLogin, handleEmailChange,handlePasswordChange, error} = useAuth();
    return (
        <div onSubmit={handleLogin} className="text-start p-5 my-4 w-50 mx-auto ">
            <h1>Please Login</h1>
       <form className="mb-2">
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input onBlur={handleEmailChange} type="email" className="form-control" />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input  onBlur={handlePasswordChange} type="password" className="form-control"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <div className="text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">Login</button><small className="px-3">or</small> 
        </form>
        <button type="submit" className="btn btn-secondary" onClick={signInUsingGoogle}>Google sign in</button>
        <br />
        <Link to="/register">Don't have an account?</Link>
      </div>
    );
};

export default Login;