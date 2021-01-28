import React from "react";
import _ from "lodash";

const TabAllProducts = (props) => {
  const data = props.data;
  const productData = _.map(data, "products");
  const flattened = _.flatten(productData, "name");
  const capitalized = flattened.map((element) =>
    _.startCase(_.toLower(element.name))
  );
  const filtered = _.chain(capitalized)
    .union(capitalized)
    .filter(
      (element) =>
        element.length > 3 &&
        element.length < 18 &&
        !element.includes("Produkt")
    )
    .value();

  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && children}</div>;
  };

  return (
    <TabPanel value={props.value} index={props.index}>
      {filtered.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
    </TabPanel>
  );
};

export default TabAllProducts;
