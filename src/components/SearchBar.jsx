import React from "react";

const SearchBar = ({ onSubmit }) => {
  const handleClick = () => {
    onSubmit("Cars");
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" />
      </form>
    </div>
  );
};

export default SearchBar;
