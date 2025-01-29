/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  let responseData:any;
  
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange = (e:any)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const validateInputs = () =>{
    if(!formData.name || !formData.password || !formData.email){
      alert("Please input all the required fields!!")
      return false;
    }
    return true;
  }

  const signup= async()=>{
  if(validateInputs()){
    await fetch ('https://fullstack-engineer-practical-interview.onrender.com/signup',{

        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':"application/json"
        },
        body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

     if(responseData.success){
      alert("User successifully created an account");
      localStorage.setItem("auth-token",responseData.token);
      navigate('/login');
     }else{
        alert("There was an invalid error");
     }
  }
  };

  return (
    <div className='md:p-24 p-8 w-full xl:h-full md:h-screen h-[915px] mb-4 '>
      <div className='flex border md:h-[70vh] h-fit p-2 xl:flex-row-reverse flex-col border-white/50 rounded-xl gap-4'>
      <div className='flex-1 bg-signupBg rounded-xl text-black/70 md:bg-auto bg-cover text-right font-bold text-6xl flex items-center'>
       Signup to join the community
      </div>
      <div className='flex flex-col items-center gap-7 flex-1 '>
          <div className='gap-2 text-center'>
          <h1 className='uppercase md:text-6xl text-xl font-semibold text-tertiary'>Signup</h1>
          <p className='text-2xl'>Enter your credentials below</p>
          </div>
        <div className='flex flex-col gap-3 items-center  text-black'>
          <input type="email" placeholder='Email' name='email' value={formData.email} 
           onChange={handleChange} className='px-6 py-3 rounded-2xl xl:w-[70vh] md:w-[40vh] w-[280px] outline-none'/>
           <input type="text" placeholder='Username' name='name' value={formData.name}
          onChange={handleChange} className='px-6 py-3 rounded-2xl xl:w-[70vh] md:w-[40vh] w-[280px] outline-none'/>
          <input type="password" placeholder="Password"name='password' value={formData.password}  
          onChange={handleChange} className='px-6 py-3 rounded-2xl xl:w-[70vh] md:w-[40vh] w-[280px] outline-none'/>
        </div>
        <button onClick={signup} 
        className='bg-tertiary px-4 py-3 xl:w-[30vh] w-[15vh] rounded-full bg-purple-500'>Login</button>
        <p className=''>Already have an account? <span className='text-pink-600 underline cursor-pointer' 
        onClick={()=>navigate("/login")}>login here</span></p>
      </div>
      </div>
      
    </div>
  )
}

export default Signup