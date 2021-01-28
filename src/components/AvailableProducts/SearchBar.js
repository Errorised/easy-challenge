import React from "react";

const SearchBar = (props) => {

  const products = props.products;
  console.log(products);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={props.onSearch}
      />
    </div>
  );
};

export default SearchBar;
