import React, { useState, useEffect } from "react";

import firebase from "firebase/app";
import { auth, firestore } from "Components/firebase.config";

function Home() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = firestore.collection("books");
    // const response = firebase.firestore();
    const data = await response.get();
    // const data = await response.collection("books").get();
    data.docs.forEach((item) => {
      console.log(item.id, " => ", item.data());
      setBooks([...books, item.data()]);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
      {books.map((book) => {
        return (
          <div className="blog-container">
            <h4>{book.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
