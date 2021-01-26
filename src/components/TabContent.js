import React from "react";

const TabContent = (props) => {
  const data = props.data;
  const value = props.value;
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return <div>{value === index && children}</div>;
  };
  
  const products = data[value].products;
  console.log(products);

  
  return (
    <TabPanel value={props.value} index={props.index} >
      {products.map((element) => {

        return <p>{element.name}</p>;
      })}
    </TabPanel>
  );
};

export default TabContent;
