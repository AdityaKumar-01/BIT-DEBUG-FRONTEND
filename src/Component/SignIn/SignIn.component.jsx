import React, { useState, useRef } from "react";
import googleLogo from "../../assets/googleLogo.png";
import "./SignIn.styles.css";
import { auth, signInWithGoogle } from "./../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMsg, seterrorMsg] = useState("");
  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === "" || emailRef.current.value === "")
      seterrorMsg("Enter details");
    else {
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then(() => {
          history.push("/dashboard");
        })
        .catch((err) => {
          seterrorMsg(err.message.split(".")[0]);
        });
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        history.push("/dashboard");
      })
      .catch((err) => {
        seterrorMsg(err);
      });
  };
  return (
    <div className="signup-form form">
      {errorMsg === "" ? null : <span className="error-span">{errorMsg}</span>}
      <input ref={emailRef} type="text" required placeholder="Username" />
      <br />
      <input
        ref={passwordRef}
        type="password"
        required
        placeholder="Password"
      />
      <br />
      <button onClick={handleClick}>Sign In</button>
      <span>Or</span>
      <span className="signUpGoogle">
        <img src={googleLogo} alt="Google" onClick={handleGoogleSignIn} />
        <span>Sign In with Google</span>
      </span>
    </div>
  );
};

export default SignIn;
