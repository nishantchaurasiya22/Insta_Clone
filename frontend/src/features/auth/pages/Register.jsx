import "../styles/form.scss"
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
const Register = () => {
  const [userName, SetUserName] = useState("")
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  const navigate = useNavigate()
  const { user, loading, handleRegister } = useAuth()
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const result=await handleRegister({
      user_name: userName,
      email: email,
      password: password

  })

    if (result.success) {
      navigate("/")
      SetUserName("")
      SetEmail("")
      SetPassword("")
   
    }

  }

  if(loading){
    return(
      <main>
        <h1>Loading</h1>
      </main>
    )
  }


  return (
    <main>
      <div className='auth-section'>
        <h1 className='auth-title'>Register</h1>
        <form onSubmit={(e) => handleFormSubmit(e)} className='auth-form-section'>
          <div className="input-section">
            <IoIosContact />
            <input value={userName} onChange={e => SetUserName(e.target.value)} type="text" placeholder='username' />
          </div>
          <div className="input-section">
            <MdOutlineAlternateEmail />
            <input value={email} onChange={e => SetEmail(e.target.value)} type="email" placeholder='Email' />
          </div>
          <div className="input-section">
            <RiLockPasswordFill />
            <input value={password} onChange={e => SetPassword(e.target.value)} type="password" placeholder='Password' />
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