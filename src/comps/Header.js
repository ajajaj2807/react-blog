import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <Link to="/">ARROW</Link>
      </h2>
      <p>Quarantine Experiments #1</p>
    </header>
  );
};

export default Header;
