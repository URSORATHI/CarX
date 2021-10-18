import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";
import { Link } from "react-router-dom";
import "./style.css";

export default function Card(props) {
  // const dispatch = useDispatch();
  // const product = useSelector((state) => state.product);

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, []);

  // const renderProducts = (products) => {
  //   let myProducts = [];
  //   for (let product of products) {
  //     myProducts.push(
  //       <li key={product.name}>
  //         {product.name}
  //         {product.children.length > 0 ? (
  //           <ul>{renderProducts(product.children)}</ul>
  //         ) : null}
  //       </li>
  //     );
  //   }
  //   return myProducts;
  // };

  return (
    <>
      <div>
        {/* {product.products.map((product) => ( */}
        <div className="card mx-2 my-4">
          <div className="productImgContainer">
            <img
              src={props.img}
              // src={generatePublicUrl(product.carPictures[0].img)}
              className="card-img-top"
              alt="..."
              style={{ width: "100%" }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1.00rem" }}>
              {props.title}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted bg-drak">
              {props.price}
            </h6>
            <p className="card-text" style={{ fontSize: "1.00rem" }}>
              {props.inspectionScore}
            </p>
            <Link
              to={`/${props.slug}/${props._id}/p`}
              style={{
                display: "block",
                textDecoration: "none",
                color: "#000",
              }}
              className="productContainer"
            >
              <a
                href="/"
                className="btn btn-primary"
                style={{ alignContent: "center" }}
              >
                View Details
              </a>
            </Link>
          </div>
          <div className="card-footer">
            <small className="text-muted">{props.uploadTime}</small>
          </div>
        </div>
        {/* ))} */}
      </div>
    </>
  );
}
