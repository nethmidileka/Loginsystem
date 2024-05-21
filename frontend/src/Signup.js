
import React , {useState}from 'react'
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios'
import  validation from './SignupValidation';


function Signup(){
    
        const [Values,setValues]=useState({
            name:'',
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
            if(errors.name==="" && errors.email ===""&& errors.password ===""){
                axios.post('http://localhost:8081/signup', Values)
                .then(res=>{
                    Navigate('/');
                })
                .catch(err=> console.log(err));
            }
    
        }
        
        
    return(    
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="">
                    <div className='mb-3'>
                        <label htmlFor="Name">Name</label>
                        <input type="Name" placeholder='Enter Name' className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control rounded-0'/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="Password">Password</label>
                        <input type="Password" placeholder='Enter Password' className='form-control rounded-0'/>
                    </div>

                    <button className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                    
                </form>
            </div>

        </div>
    )
}                    
                            

export default Signup