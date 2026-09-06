import "../styles/form.scss"
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from "react-router";
import { useState } from "react";
import axios from "axios";
const Register = () => {
 const[userName,SetUserName]=useState("")
 const[email,SetEmail]=useState("")
 const[password,SetPassword]=useState("")

 const handleFormSubmit=async(e)=>{
  e.preventDefault()

  try {
    const response = await axios.post("http://127.0.0.1:8000/auth/register", {
      user_name: userName,
      email: email,
      password: password
    },{
      withCredentials:true
    })
    console.log("Registered:", response.data)
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message)
  }
 }
  return (
    <main>
      <div className='auth-section'>
        <h1 className='auth-title'>Register</h1>
        <form onSubmit={(e)=>handleFormSubmit(e)} className='auth-form-section'>
          <div className="input-section">
            <IoIosContact />
            <input onChange={e=>SetUserName(e.target.value)} type="text" placeholder='username' />
          </div>
           <div className="input-section">
            <MdOutlineAlternateEmail />
            <input onChange={e=>SetEmail(e.target.value)} type="email" placeholder='Email' />
          </div>
          <div className="input-section">
            <RiLockPasswordFill />
            <input onChange={e=>SetPassword(e.target.value)} type="password" placeholder='Password' />
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="auth-form-link">
          <p>have an account? <Link className="link" to="/">Login</Link> </p>
        </div>
      </div>
    </main> 
  )
}

export default Register