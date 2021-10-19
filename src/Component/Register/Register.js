import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {handleNameChange, handlePasswordChange, handleEmailChange, handleRegistration, error} = useAuth();
    return (
    <div className="text-start p-5 mx-auto">
       <div className="col-lg-4 col-md-6 col-12 mx-auto">
             <h2>Please Register</h2>
            <form onSubmit={handleRegistration}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input onBlur={handleNameChange} type="text" className="form-control" placeholder="Your Name" required/>

                <label className="form-label mt-3">Email address</label>
                <input onBlur={handleEmailChange} type="email" className="form-control" required  />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

                <div className="mb-3">
                <label className="form-label">Password</label>
                <input  onBlur={handlePasswordChange}  type="password" className="form-control" required/>
                </div>
                <div className="text-danger">{error}</div>
                <button type="submit" className="btn btn-primary my-2">Register</button>
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
     </div>
    );
};

export default Register;