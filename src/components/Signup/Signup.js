import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Signup.css';

const Signup = () => {
    const {createUser}=useContext(AuthContext)
    const [error,setError]=useState(null)
    const handleSingUp =event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value;
        const confirm= form.confirm.value;

        if(password.length<8){
            setError('Password length should be 8 charecter long')
        }
        if(password!==confirm){
            setError('Your password did not match!!')
        }
        createUser(email,password)
        .then( (result) =>{
            const user=result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSingUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
            
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' required/>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            <p className='text-error'><small>{error}</small></p>
        </div>
    );
};

export default Signup;