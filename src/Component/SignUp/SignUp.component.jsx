import React, { useState, useRef } from "react";
import { signInWithGoogle } from "./../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
import googleLogo from "../../assets/googleLogo.png";
import axios from "axios";
import "./SignUp.styles.css";
const SignUp = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [errorMsg, seterrorMsg] = useState("");
  let history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    if (
      passwordRef.current.value === "" ||
      emailRef.current.value === "" ||
      emailRef.current.value === "" ||
      userNameRef.current.value === ""
    )
      seterrorMsg("Enter details");
    else if (passwordConfirmRef.current.value != passwordRef.current.value)
      seterrorMsg("Password didn't match");
    else {
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then(() => {
          const user = {
            name: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
          };
          axios
            .post("/api/signUp", user)
            .then(() => {
              history.push("/dashboard");
            })
            .catch((err) => {
              console.log("err");
            });
          
        })
        .catch((err) => {
          console.error(err.message);
          seterrorMsg(err.message)
        });
    }
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user.displayName);
        const user = {
          name: result.user.displayName,
          email: result.user.email,
          password: result.user.displayName,
        };
        axios
          .post("/api/signUp", user)
          .then(() => {
            history.push("/dashboard");
          })
          .catch((err) => {
            console.log("err");
          });
        history.push("/dashboard");
      })
      .catch((err) => {
        seterrorMsg(err);
      });
  };
  return (
    <div className="signup-form form">
      {errorMsg === "" ? null : <span className="error-span">{errorMsg}</span>}
      <input type="text" required placeholder="Username" ref={userNameRef} />
      <br />
      <input ref={emailRef} type="email" required placeholder="Email" />
      <br />
      <input
        ref={passwordRef}
        type="password"
        required
        placeholder="Password"
      />
      <br />
      <input
        ref={passwordConfirmRef}
        type="password"
        required
        placeholder="Confirm Password"
      />
      <br />
      <button onClick={handleClick}>Sign Up</button>
      <span>Or</span>
      <span className="signUpGoogle">
        <img src={googleLogo} alt="Google" onClick={handleGoogleSignIn} />
        <span>Sign up with Google</span>
      </span>
    </div>
  );
};

export default SignUp;
