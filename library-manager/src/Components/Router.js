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

const Routers = () => {
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
