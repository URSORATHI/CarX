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

  function formatDate(d) {
    var date = new Date(d);

    if (isNaN(date.getTime())) {
      return d;
    } else {
      var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sept";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";

      var day = date.getDate();

      if (day < 10) {
        day = "0" + day;
      }

      return day + " " + month[date.getMonth()] + " " + date.getFullYear();
    }
  }

  return (
    <div className="row row-cols-1 row-cols-md-4 my-2">
      {product.products
        .slice(0)
        .reverse()
        .sort((first, second) => {
          return first.createdAt > second.createdAt ? 1 : -1;
        })
        .map((product) => (
          <Card
            img={generatePublicUrl(product.carPictures[0].img)}
            title={product.name}
            price={product.price}
            slug={product.slug}
            _id={product._id}
            onClick="View Detais"
            createdAt={formatDate(
              product.createdAt.slice(0, 10).toLocaleString("en-us", {
                month: "short",
              })
            )}
          />
        ))}
    </div>
  );
}
