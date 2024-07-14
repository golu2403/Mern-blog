import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import React, { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js'




export default function Signin() {

  const [FormData, setFormData] = useState({});
  const{loading,error:errorMessage}=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const navigate= useNavigate();
  const handlechange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value.trim() });
    console.log(FormData);
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    if ( !FormData.email || !FormData.password) {
      return  dispatch(signInFailure("All fields are required"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      if(data.success===false){
          return  dispatch(signInFailure(data.message));
      }
     
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
     }
          

  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
        via-purple-500 to-pink-500 rounded-lg text-white'> THE</span>
            HOURS
          </Link>
          <p className='text-sm mt-5'>
            News & Opinion Blog
          </p>
        </div>
        {/*right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handlesubmit}>
          
            <div >
              <Label value='Your email' />
              <TextInput type='email'
                placeholder='Email'
                id='email' onChange={handlechange} />
            </div>
            <div >
              <Label value='Your password' />
              <TextInput type='password'
                placeholder='**********'
                id='password' onChange={handlechange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {loading? (
              <>
               <Spinner size='sm'/>
               <span className='pl-3'>Loading...</span>
               </>
               ): (
              
              'Sign in'
              )}
              </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span> Dont have an account?</span>
            <Link to='/sign-up' className='text-blue-500'> Sign up</Link>
          </div>
          {
            errorMessage &&(
             <Alert className='mt-5' color='failure'>
              {errorMessage}
             </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
