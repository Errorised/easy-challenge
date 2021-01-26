import React from "react";
import _ from "lodash"

const TabAllProducts = (props) => {
  const data = props.data;
  const productData = _.map(data, "products");
  const filtered= _.flatten(productData, "name");
  _.flatten(filtered, "name");

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return <div>{value === index && children}</div>;
  };
console.log(filtered);
  return <div></div>;
};

export default TabAllProducts;
