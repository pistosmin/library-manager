import React, { useState, useEffect } from "react";

import firebase from "firebase/app";
import { auth, firestore } from "Components/firebase.config";
import Navigation from "Components/Navigation";

function Home() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = firestore.collection("books");
    // const response = firebase.firestore();
    const data = await response.get();
    // const data = await response.collection("books").get();
    data.docs.forEach((item) => {
      console.log(item.id, " => ", item.data());
      //TODO: setBooks 한번에 설정하도록
      setBooks([...books, item.data()]);
      setBooks([...books, { id: item.id }]);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <h1>Home</h1>
      {books.map((book) => {
        console.log("test " + book.id);
        return (
          <div key="{book.id}" className="books-container">
            <h4>{book.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
