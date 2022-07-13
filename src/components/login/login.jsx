import React, { useState } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login({ firebase }) {
  const navigate = useNavigate();
  const googleLogin = () => {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(firebase.getAuth(), provider) // popup을 이용한 signup
      .then(data => {
        const user = data.user;
        const uid = user.providerData[0].uid;
        navigate("/app", {
          replace: true,
          state: {
            id: uid,
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
    navigate("/app");
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.loginBox}>
        <img src="./images/logo.png" alt="logo" />
        <h1>Business Card Maker</h1>
        <div className={styles.loginBtns}>
          <h1>Login</h1>
          <button className={styles.btn} onClick={googleLogin}>
            Google
          </button>
          <button className={styles.btn} onClick={githubLogin}>
            Github
          </button>
        </div>
        <p className={styles.footer}> Code your dream</p>
      </div>
    </div>
  );
}

export default Login;
