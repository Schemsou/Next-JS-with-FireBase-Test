import { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";
function AddItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add the data to Firestore
    try {
      const docRef = await db.collection("items").add({
        title,
        description,
      });
      console.log("Document written with ID: ", docRef.id);

      // Reset the form
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddItem;
