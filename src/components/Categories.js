import React, { useEffect, useState } from "react";
import axios from "axios";
import Appbar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Categories = (props) => {
  const [allCategories, setCategories] = useState([]);
  const [fruits, setFruits] = useState([]);

  const getCategories = async () => {
    const res = await axios.get("https://api.predic8.de/shop/categories/");
    const categories = res.data.categories;
    const filtered = await categories.filter((element) => {
      return element.hasOwnProperty("name") && isNaN(element.name);
    });

    const categorieUrl = filtered.map((element) => {
      return props.url + element.category_url;
    });

    const getproductsByCategorie = await categorieUrl.map((url) => {
      return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    });

    axios.all(getproductsByCategorie).then((res) => setCategories(res));
  };

  const getFruits = allCategories.map((category) => {
    return category.products;
  });

console.log(getFruits[0]);

  

  useEffect(() => {
    getCategories();
  }, []);

  const [tabValue, setTabValue] = useState(0);
  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return <div>{value === index && <p>{children}</p>}</div>;
  };

  return (
    <div>
      <Appbar position="static">
        <Tabs onChange={handleTabs} value={tabValue}>
          {allCategories.map((category) => {
            return <Tab label={category.name}></Tab>;
          })}
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          Item1
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          Item2
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          Item3
        </TabPanel>
      </Appbar>
    </div>
  );
};

export default Categories;
