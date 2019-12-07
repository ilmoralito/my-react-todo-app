import React from "react";

const Search = ({ onSearch, children }) => {
  return (
    <div>
      <input
        onChange={event => onSearch(event.target.value)}
        placeholder={children}
      />
    </div>
  );
};

export default Search;
