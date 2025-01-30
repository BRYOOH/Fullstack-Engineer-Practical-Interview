'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const Login = () => {

  const router = useRouter();
  let responseData:any;
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });
  
  const changeHandler = (e:any)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  const validateInputs = ()=>{
    if(!formData.email || !formData.password){
      alert("Please input all fields");
      return false;
    }
    return true;
  };

  const login = async()=>{

    if(validateInputs()){
        await fetch ('https://fullstack-engineer-practical-interview.onrender.com/login',{

            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':"application/json"
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
    
         if(responseData.success){
          alert("User successifully logined");
          localStorage.setItem("auth-token",responseData.token);
          router.push('/');
         }else{
            alert("There was an invalid error");
         }
    }
    };
    

  return (
    <div className='md:p-24 p-6 w-full xl:h-full md:h-screen h-[915px] mb-4'>
      <div className='flex border md:h-[70vh] h-fit p-2 md:flex-row flex-col border-white/50 rounded-xl gap-4'>
      <div className='flex-1  rounded-xl md:bg-auto bg-cover font-bold text-6xl flex items-center'>
     Welcome to Campaign Traker
      </div>
      <div className='flex flex-col items-center gap-8 flex-1 '>
          <div className='gap-2 text-center'>
          <h1 className='uppercase md:text-6xl text-xl font-semibold text-tertiary'>LogIn</h1>
          <p className='text-2xl'>Enter your credentials below</p>
          </div>
        <div className='flex flex-col gap-3 items-center  text-black'>
          <input type="email" placeholder='Email' name='email' value={formData.email}
         onChange={changeHandler} className='px-6 py-3 rounded-2xl xl:w-[70vh] md:w-[40vh] w-[280px] outline-none'/>
          <input type="password" placeholder="Password" name='password' value={formData.password}
         onChange={changeHandler} className='px-6 py-3 rounded-2xl xl:w-[70vh] md:w-[40vh] w-[280px] outline-none'/>
        </div>
        <button onClick={login} 
        className='bg-tertiary px-4 py-3 xl:w-[30vh] w-[15vh] rounded-full bg-purple-500'>Login</button>
        <p className=''>Dont have an account? <span className='text-pink-600 underline cursor-pointer' 
        onClick={() => router.push("/signup")}>signup here</span></p>
      </div>
      </div>
      
    </div>
  )
}

export default Login