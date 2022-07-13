import styles from "./card-left.module.css";
import { useState } from "react";
import CardLeftList from "./card-left-list";

const CardLeft = ({ addCard, cardData }) => {
  const initialFieldValues = {
    name: "",
    company: "",
    theme: "",
    title: "",
    email: "",
    message: "",
    imageURL: "",
  };

  let [values, setValues] = useState(initialFieldValues);

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
    addCard(values);
  };
  return (
    <>
      <div className={styles.wrap}>
        <h1> Card Maker </h1>
        <CardLeftList cardData={cardData} />
        <div>
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
        </div>
      </div>
    </>
  );
};

export default CardLeft;
