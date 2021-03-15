import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./Signup.css";

function Signup({ emailaddress }) {
  const [email, setemail] = useState(emailaddress);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="email"
          placeholder="Email Address"
        />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signup__grey">New to metflixy? </span>
          <span className="signup__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Signup;
