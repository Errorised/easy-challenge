import React, {useState, useEffect} from "react";
import axios from "axios";

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        const res = await axios.get(props.url + "/shop/products/");
        const allProducts = res.data.products;

        const getPriceUrl = await allProducts.map((product) => {
            return (props.url + product.product_url)
        })

        const getPrice = await getPriceUrl.map((url) => {

            return axios
                .get(url)
                .then(res => res.data)
                .catch(err => console.log(err));
        })

        axios.all(getPrice).then(res => setProducts(res));      
    }
    useEffect(() => {
        getProducts();

    }, []);
    return (
        <div>
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
                <th><img className="image" src={props.url + product.photo_url} alt="no image"></img></th>
                <th>{product.name} </th>
                <th>{product.price} </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    )
}

export default AllProducts;