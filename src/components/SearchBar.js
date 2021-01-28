import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = props.products;
  console.log(products);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        value={searchTerm}
      />
      {products.filter((value) => {
          if (searchTerm ==="") {
              return null
          } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return value
          }
      })
      .map((element, index) => {
         return <li key={index} className="searchResults" >{element.name} </li>
      })}
    </div>
  );
};

export default SearchBar;
