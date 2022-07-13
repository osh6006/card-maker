import styles from "./app.module.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardHeader from "./components/card/card-header";
import CardContents from "./components/card/card-contents";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const App = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    if (!location.state) {
      alert("Login information is not defined");
      navigate("/");
    } else {
      openCardData();
    }
  }, []);

  const openCardData = () => {
    const db = getDatabase();
    const dbRef = ref(db, "cardData/");

    onValue(
      dbRef,
      snapshot => {
        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          setCardData(prevState => [
            ...prevState,
            { key: childKey, data: childData },
          ]);
        });
      },
      {
        onlyOnce: true,
      }
    );
  };

  const addCard = obj => {
    console.log(obj);
    const db = getDatabase();
    const postListRef = ref(db, "cardData");
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name: obj.name,
      company: obj.company,
      theme: obj.theme,
      title: obj.title,
      email: obj.email,
      message: obj.message,
      imageURL: obj.imageURL,
    });
    setCardData([]);
    openCardData();
  };

  return (
    <div className={styles.wrap}>
      <CardHeader />
      <CardContents addCard={addCard} cardData={cardData} />
    </div>
  );
};

export default App;
