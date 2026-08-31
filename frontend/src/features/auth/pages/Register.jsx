import "../styles/form.scss"
import { RiLockPasswordFill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router";

const Register = () => {
  return (
    <main>
         <div className='auth-section'>
         <h1 className='auth-title'>Register</h1>
         <form className='auth-form-section'>
          <div className="input-section">
           <IoIosContact />
            <input type="text" placeholder='username' />
          </div>
          <div className="input-section">
           <IoIosContact />
            <input type="email" placeholder='Email' />
          </div>
          <div className="input-section">
           <IoIosContact />
            <input type="text" placeholder='bio' />
          </div>
          <div className="input-section">
           <IoIosContact />
            <input type="file" placeholder='profile image' />
          </div>
           <div className="input-section">
             <RiLockPasswordFill />
             <input type="password" placeholder='Password'/>
           </div>
           <button>Register</button>
         </form>
         <div className="auth-form-link">
             <p>have an account? <Link className="link" to="/">Login</Link> </p>
         </div>
       </div>
     </main>
  )
}

export default Register