import React, { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import "./search.css";

const Search = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("sorry, we are trying to add more books");
    setShowMessage(true);
  };

  if (!showMessage) {
    return (
      <form className="header__search">
        <FaSearch />
        <input
          className="header__searchInput"
          type="text"
          placeholder="search kidonpm "
        />
      </form>
    );
  }

  setTimeout(() => {
    setShowMessage(false);
  }, 1500);

  return (
    <form className="header__search">
      <div className="header__searchInput" role="alert">
        <p>{message}</p>
      </div>
    </form>
  );
};

export default Search;