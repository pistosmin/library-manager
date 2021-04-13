import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Mypage from "Routes/Mypage";

import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
import { actionTypes } from "./reducer";

const Routers = () => {
  const [{ user }, dispatch] = useStateValue();
  // const classes = useStyles();
  //console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/detail" component={Detail} />
        <Route path="/mypage" component={Mypage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
export default Routers;
