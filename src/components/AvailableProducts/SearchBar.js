import React from "react";
import classes from "./SearchBar.module.css"

const SearchBar = (props) => {
  return (
    <input className={classes.searchBar} type="text" placeholder="Search..." onChange={props.onSearch} />
  );
};

export default SearchBar;
