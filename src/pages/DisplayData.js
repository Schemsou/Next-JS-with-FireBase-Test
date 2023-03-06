import { db } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect } from "react";

function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("items").get();
      const itemsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(itemsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from Firestore</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;
