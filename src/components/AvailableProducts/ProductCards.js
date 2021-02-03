import React from "react";
import _ from "lodash";
import classes from "./productCard.module.css";

const ProductCard = (props) => {
  const { searchTerm, products, url } = props;
  //capitize all names for filtering&display
  const capitalized = products.map((element) => {
    return {
      name: _.capitalize(element.name),
      photo_url: element.photo_url,
      category_url: element.category_url,
      price: element.price,
    };
  });
  //filter duplicates
  const filtered = _.uniqBy(capitalized, (element) => element.name);
  console.log(filtered);
  return (
    <div className={classes.allCards}>
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
            <div className={classes.productCard} key= {index}>
              <img
                src={url + product.photo_url}
                className={classes.productImage}
                alt="not available"
              />
              <div className={classes.text}>
                <div className={classes.first}>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
