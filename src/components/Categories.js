import React, { useEffect, useState } from "react";
import axios from "axios";
import Appbar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContent from "./TabContent";
import TabAllProducts from "./TabAllProducts";

const Categories = (props) => {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

    await axios
      .all(getproductsByCategorie)
      .then((res) => setAllCategories(res));

    setLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  //   const getFruits = allCategories[0].products.map (fruit => {
  //       return fruit.name
  //   })

  const [tabValue, setTabValue] = useState(0);
  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loding</h1>
      ) : (
        <Appbar position="static">
          <Tabs onChange={handleTabs} value={tabValue}>
            {allCategories.map((category) => {
              return <Tab label={category.name}></Tab>;
            })}
          </Tabs>
          <TabAllProducts data={allCategories}/>
          <TabContent value={tabValue} data={allCategories} index={0} />
          <TabContent value={tabValue} data={allCategories} index={1} />
          <TabContent value={tabValue} data={allCategories} index={2} />
          <TabContent value={tabValue} data={allCategories} index={3} />
        </Appbar>
      )}
    </div>
  );
};

export default Categories;
