import React from "react";

const AvailableProductsTable = (props) => {
  console.log(props.products);
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
        {props.products
          .filter((value) => {
            if (value === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(props.searchTerm.toLowerCase())
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
                    src={props.url + product.photo_url}
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
