import React from "react";
import styles from "./card-header.module.css";

const CardHeader = props => {
  return (
    <>
      <div className={styles.header}>
        <img src="./images/logo.png" alt="logo" />
        <h1>Business Card Maker</h1>
      </div>
    </>
  );
};

export default CardHeader;
