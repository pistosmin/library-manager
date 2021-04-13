import React from "react";
// import Auth from "Components/Auth";
// import './App.css';
import SignIn from "./SignIn";
import Routers from "./Router";
import Home from "Routes/Home";

import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { actionTypes } from "./reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();
  auth.onAuthStateChanged((curruser) => {
    if (curruser && !user) {
      dispatch({
        type: actionTypes.SET_USER,
        user: curruser,
      });
    }
  });

  return <div className="App">{!user ? <SignIn /> : <Routers />}</div>;
}

export default App;
