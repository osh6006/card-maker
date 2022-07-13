import React from "react";
import CardLeftItem from "./card-left-item";
import styles from "./card-left-list.module.css";

const CardLeftList = ({ cardData }) => {
  return (
    <ul className={styles.list}>
      {cardData.map(cardData => (
        <CardLeftItem key={cardData.key} cardData={cardData} />
      ))}
    </ul>
  );
};

export default CardLeftList;
