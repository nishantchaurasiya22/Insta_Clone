import "../styles/form.scss"
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router";
import { useState } from "react";

import { loginAPI } from "../services/auth.api";
const Login = () => {
  const[identifier,SetIdentifier]=useState("")
  const[password,SetPassword]=useState("")
  const[err,setErr]=useState("")
  const[loading,setLoading]=useState(false)
  const handleFormSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      const res=await loginAPI(identifier,password)
      console.log(res);
      
    }catch(err){
      setErr(err?.response?.data?.message||"Login failed")
    }finally{
      setLoading(false)
    }
    
  }
  return (
  <main>
      <div className='auth-section'>
      <h1 className='auth-title'>Login</h1>
      <form onSubmit={(e)=>handleFormSubmit(e)} className='auth-form-section'>
       <div className="input-section">
        <IoIosContact />
         <input onChange={e=>SetIdentifier(e.target.value)} type="text" placeholder='Email or Phone' />
       </div>
        <div className="input-section">
          <RiLockPasswordFill />
          <input onChange={e=>SetPassword(e.target.value)} type="password" placeholder='Password'/>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="auth-form-link">
          <p>Don't have an account? <Link className="link" to="register">Register</Link> </p>
      </div>
    </div>
  </main>
  )
}

export default Login