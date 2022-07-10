import React from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

function Login({ firebase }) {
  const navigate = useNavigate();

  const googleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(firebase.getAuth(), provider) // popup을 이용한 signup
      .then(data => {
        const user = data.user;
        navigate("/app", {
          state: {
            id: user.displayName,
            email: user.email,
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const githubLogin = () => {
    console.log("git click");
  };

  return (
    <div className={styles.loginBox}>
      <img src="./images/logo.png" alt="logo" />
      <h1>Business Card Maker</h1>
      <div className={styles.loginBtns}>
        <h1>Login</h1>
        <button onClick={googleLogin}>Google</button>
        <button onClick={githubLogin}>Github</button>
      </div>
      <p className={styles.footer}> Code your dream</p>
    </div>
  );
}

export default Login;
