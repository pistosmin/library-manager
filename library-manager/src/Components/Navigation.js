import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/mypage">Mypage</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Navigation;
