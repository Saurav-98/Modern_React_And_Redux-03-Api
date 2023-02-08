import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("Tell Parent ");
    onSubmit(term);
  };
  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search">Enter Your search</label>
        <input
          id="search"
          type="text"
          onChange={handleInputChange}
          value={term}
        />
      </form>
    </div>
  );
};

export default SearchBar;
