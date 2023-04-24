import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);
const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false)
    const [userEmail, setUserEmail] = useState('');
    const handleSubmit = event =>{
        event.preventDefault();
        setSuccess(false);
        

        const form = event.target ;
        const email = form.email.value ;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

        })
        .catch(error=>{
            console.log('error', error);
        })
    }

    const handleEmailBlur = event =>{
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword= ()=>{
        if(!userEmail){
            alert('Please enter your email address');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
        .then(()=>{
            alert('Password Reset email sent. Please check your email.')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    

  return (
    <div className="w-50 mx-auto">
      <h1>Login Here!!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Email
          </label>
          <input onBlur={handleEmailBlur}
            type="email" name="email"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Your Email"
            required = ""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password 
          </label>
          <input
            type="password" name="password"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Your Password"
            required = ""
          />
        </div>
        <button type="submit" className="btn btn-success">Log In</button>
        <p>Don't have an account? Please <Link to='/register'><small>Register</small></Link></p>
        <p>forget password?? <button type="submit" onClick={handleForgetPassword} className="btn btn-link"><small>Reset Password</small></button></p>
      </form>
      {
        success && <p>Successfully login</p>
      }
    </div>
  );
};

export default LoginBootstrap;
