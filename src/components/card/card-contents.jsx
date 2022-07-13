import React from "react";
import styles from "./card-contents.module.css";
import CardLeft from "./card-left";
import CardRight from "./card-right";

const CardContents = ({ addCard, cardData }) => {
  return (
    <>
      <div className={styles.wrap}>
        <CardLeft addCard={addCard} cardData={cardData} />
        <CardRight />
      </div>
    </>
  );
};

export default CardContents;
