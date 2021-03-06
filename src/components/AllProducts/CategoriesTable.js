import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContent from "./TabContent";
import TabAllProducts from "./TabAllProducts";
import { makeStyles } from "@material-ui/core/styles";

const CategoriesTable = (props) => {
  const [allCategories, setAllCategories] = useState([]);
  //waiting for fetching data
  const [isLoading, setLoading] = useState(true);
  //getting categories from API

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("https://api.predic8.de/shop/categories/");
      const categories = res.data.categories;
      //removing every element w/o name or number as name
      const filtered = await categories.filter((element) => {
        return element.hasOwnProperty("name") && isNaN(element.name);
      });
      //creating array of product urls
      const categorieUrl = filtered.map((element) => {
        return props.url + element.category_url;
      });
      //promise for every url
      const getproductsByCategorie = await categorieUrl.map((url) => {
        return axios
          .get(url)
          .then((res) => res.data)
          .catch((err) => console.log(err));
      });

      //set allCategories in Array of Objects: [...{name: "", products: []}]
      await axios
        .all(getproductsByCategorie)
        .then((res) => setAllCategories(res));
      setLoading(false);
    };
    getCategories();
  }, []);
  //handle Tabs
  const [tabValue, setTabValue] = useState(0);
  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    demo2: {
      backgroundColor: "#009879",
      width: "60%",
      margin: "auto",
      color: "white",
    },
    table: {
      width: "60%",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      {isLoading ? (
        <h1>Loding</h1>
      ) : (
        
        <div className={classes.demo2}>
          

          <Tabs onChange={handleTabs} value={tabValue} variant="scrollable">
            {allCategories.map((category, index) => {
              return <Tab label={category.name} key={index}></Tab>;
            })}
            <Tab label="All Products" />
          </Tabs>
          {allCategories.map((category, index) => {
            return (
              <TabContent
              key={index}
              value={tabValue}
              data={category.products}
              index={index}
            />
            )
          })}
          <TabAllProducts value={tabValue} data={allCategories} index={allCategories.length} />
        </div>
      )}
    </div>
  );
};

export default CategoriesTable;
