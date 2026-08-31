import "../styles/form.scss"
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router";
const Login = () => {
  return (
  <main>
      <div className='auth-section'>
      <h1 className='auth-title'>Login</h1>
      <form className='auth-form-section'>
       <div className="input-section">
        <IoIosContact />
         <input type="text" placeholder='Email or Phone' />
       </div>
        <div className="input-section">
          <RiLockPasswordFill />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Login</button>
      </form>
      <div className="auth-form-link">
          <p>Don't have an account? <Link className="link" to="register">Register</Link> </p>
      </div>
    </div>
  </main>
  )
}

export default Login