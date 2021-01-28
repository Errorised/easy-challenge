import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import AvailableProductsTable from "./AvailableProductsTable";

const AvailableProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //get products from API
  const getProducts = async () => {
    const res = await axios.get(props.url + "/shop/products/");
    const allProducts = res.data.products;

    const getPriceUrl = await allProducts.map((product) => {
      return props.url + product.product_url;
    });
    //promises for every url
    const getPrice = await getPriceUrl.map((url) => {
      return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    });

    axios.all(getPrice).then((res) => setProducts(res));

  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <SearchBar
        products={products}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <AvailableProductsTable
        searchTerm={searchTerm}
        products={products}
        url={props.url}
      />
    </div>
  );
};

export default AvailableProducts;
