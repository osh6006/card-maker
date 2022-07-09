import React from "react";
import styles from "./login.module.css";

const Login = prop => {
  return (
    <div className={styles.loginBox}>
      <img src="./images/logo.png" alt="logo" srcset="" />
      <h1>Business Card Maker</h1>
      <div className={styles.loginBtns}>
        <h1>Login</h1>
        <button className="as">Google</button>
        <button className="as">Github</button>
      </div>
      <p className={styles.footer}> Code your dream</p>
    </div>
  );
};

export default Login;
