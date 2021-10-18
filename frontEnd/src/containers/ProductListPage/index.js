import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsBySlug } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar";

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <>
      <Navbar />
      <div className="row row-cols-1 row-cols-md-4 my-2">
        {/* {Object.keys(product.products).map((key, index) => { */}
        {/* return ( */}
        {/* // <Link
            //   style={{
            //     width: "calc(100% - 40px)",
            //     margin: "20px",
            //   }}
            // > */}
        {/* <div style={{ display: "flex" }}> */}
        {product.products.map((product) => (
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
        {/* </div> */}
        {/* // </Link> */}
        {/* ); */}
        {/* })} */}
      </div>
    </>
  );
};

export default ProductListPage;
