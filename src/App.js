import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"


function App() {

  const [products, setProducts] = useState([]);
  const apiUrl = "https://api.predic8.de";


  const getProducts = async () => {

    const res = await axios.get(apiUrl + "/shop/products/");
    const allProducts = res.data.products;

    const getPriceUrl = await allProducts.map((product) => {
      return (apiUrl + product.product_url)
    })

    const getPrice = await getPriceUrl.map((url) => {

      return axios
        .get(url)
        .then(res => res.data)
        .catch(err => console.log(err));
    })

    axios.all(getPrice).then(res => setProducts(res));
  }


  console.log(products);
  useEffect(() => {
    getProducts();

  }, []);


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr>
                <th><img className="image" src={apiUrl + product.photo_url} alt="no img"></img></th>
                <th>{product.name} </th>
                <th>{product.price} </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
