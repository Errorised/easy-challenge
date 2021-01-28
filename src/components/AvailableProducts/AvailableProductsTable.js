import React from "react";
import _ from "lodash";

const AvailableProductsTable = (props) => {
  const { searchTerm, products, url } = props;
  //capitize all names for filtering&display
  const capitalized = products.map((element) => {
    return {
      name: _.capitalize(element.name),
      photo_url: element.photo_url,
      category_url: element.category_url,
      price: element.price
    };
  });
  //filter duplicates
  const filtered = _.uniqBy(capitalized, (element) => element.name)
  console.log(products)

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filtered
          .filter((value) => {
            if (value === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((product, index) => {
            return (
              <tr key={index}>
                <th>
                  <img
                    className="image"
                    src={url + product.photo_url}
                    alt="not available"
                  ></img>
                </th>
                <th>{product.name} </th>
                <th>{product.price} </th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AvailableProductsTable;
