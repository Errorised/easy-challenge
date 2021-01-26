import React from "react";
import _ from "lodash";

const TabContent = (props) => {
  const data = props.data;
  const value = props.index;
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return <div>{value === index && children}</div>;
  };

  const products = data[value].products;
  const capitalized = products.map(element => _.startCase(_.toLower(element.name)));
  const filtered = _
  .chain(capitalized)
  .union(capitalized)
  .filter(element => element.length > 4 && !element.includes("Produkt"))
  .value()

//   console.log(filtered);

  return (
    <TabPanel value={props.value} index={props.index}>
      {filtered.map((element) => {
        
        return <p>{element}</p>;
      })}
    </TabPanel>
  );
};

export default TabContent;
