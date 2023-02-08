import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleInputChange} value={term} />
      </form>
    </div>
  );
};

export default SearchBar;
