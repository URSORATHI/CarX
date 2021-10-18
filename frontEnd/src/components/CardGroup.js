import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../actions/index";
import { generatePublicUrl } from "../urlConfig";
import Card from "./Card/Card";

export default function CardGroup(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const renderProducts = (products) => {
    let myProducts = [];
    for (let product of products) {
      myProducts.push(
        <li key={product.name}>
          {product.name}
          {product.children.length > 0 ? (
            <ul>{renderProducts(product.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myProducts;
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 my-2">
      {product.products
        .sort((first, second) => {
          return first.inspectionScore < second.inspectionScore ? 1 : -1;
        })
        .map((product) => (
          <Card
            img={generatePublicUrl(product.carPictures[0].img)}
            title={product.name}
            price={product.price}
            slug={product.slug}
            _id={product._id}
            onClick="View Detais"
            uploadTime="10 days ago"
          />
        ))}
    </div>
  );
}
