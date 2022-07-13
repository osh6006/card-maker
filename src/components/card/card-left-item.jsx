import React from "react";
import styles from "./card-left-item.module.css";
import { useState } from "react";

const CardLeftItem = ({ cardData: { data } }) => {
  let [values, setValues] = useState(data);

  const handleInputChange = e => {
    let { name, value } = e.target;
    console.log(`${name}, ${value}`);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <>
      <li>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.one}
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <input
            className={styles.one}
            type="text"
            placeholder="Company"
            name="company"
            value={values.company}
            onChange={handleInputChange}
          />
          <select
            className={styles.one}
            id="gg"
            name="theme"
            onChange={handleInputChange}
            value={values.theme}
          >
            <option value="white">Light</option>
            <option value="black">Black</option>
          </select>
          <input
            className={styles.two}
            type="text"
            placeholder="Title"
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
          <input
            className={styles.two}
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <textarea
            className={styles.three}
            placeholder="Message"
            name="message"
            value={values.message}
            onChange={handleInputChange}
          />
          <input
            type="file"
            id="ex_file"
            accept="image/*"
            name="imageURL"
            value={values.imageURL}
            onChange={handleInputChange}
          />
          <label htmlFor="ex_file">No file</label>
          <input className={styles.four} type="submit" value="Add" />
        </form>
      </li>
    </>
  );
};

export default CardLeftItem;
