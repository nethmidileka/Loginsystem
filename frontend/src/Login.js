import React, { useState }from 'react'
import {Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import  validation from './LoginValidation';

function Login() {

    const [Values,setValues]=useState({
        email:'',
        passowrd:''
    })

    const[errors, setErrors]= useState({})
    const handleInput =(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit= (event) =>{
        event.preventDefault();
        setErrors(validation(Values));
        if(errors.name==="" &&  errors.password ===""){
            axios.post('http://localhost:8081/login', Values)
            .then(res=>{
                Navigate('/');
            })
            .catch(err=> console.log(err));
        }


    }
    
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='Enter Email' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="Password">Password</label>
                        <input type="Password" placeholder='Enter Password' className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.passowrd}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                    
                </form>
            </div>

        </div>
    )
}

export default Login