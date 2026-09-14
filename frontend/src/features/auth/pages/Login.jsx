import "../styles/form.scss"
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { Link, useNavigate } from "react-router";

import { useState } from "react";
import {useAuth} from "../hooks/useAuth"
const Login = () => {
  const{loading,user,handleLogin}=useAuth()
  const[identifier,SetIdentifier]=useState("")
  const navigate=useNavigate()
  const[password,SetPassword]=useState("")
  const handleFormSubmit=async(e)=>{
    e.preventDefault()
    await handleLogin(
      identifier,
      password
    )
    SetIdentifier("")
    SetPassword("")
    navigate("/home")
  }

  if(loading){
    return(
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }
  return (
  <main>
      <div className='auth-section'>
      <h1 className='auth-title'>Login</h1>
      <form onSubmit={(e)=>handleFormSubmit(e)} className='auth-form-section'>
       <div className="input-section">
        <IoIosContact />
         <input value={identifier} onChange={e=>SetIdentifier(e.target.value)} type="text" placeholder='Email or Phone' />
       </div>
        <div className="input-section">
          <RiLockPasswordFill />
          <input value={password} onChange={e=>SetPassword(e.target.value)} type="password" placeholder='Password'/>
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