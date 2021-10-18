import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";
import Card from "../Card/Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

export default function CarouselCard(props) {
  const carouselId = "carouselExampleCaptions" + props.id;
  const carouselButtonId = "#" + carouselId;

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
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   {product.products.map((product) => (
    //     <SwiperSlide>
    //       <Card
    //         img={generatePublicUrl(product.carPictures[0].img)}
    //         title="product.name"
    //         price="Rs. 500000"
    //         description="Mercedes-Benz, commonly referred to as Mercedes,is a German automotive..."
    //         onClick="View Detais"
    //         uploadTime="10 days ago"
    //       />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>

    <div
      id={carouselId}
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          {product.products
            .slice(0)
            .reverse()
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
        {/* <div className="carousel-item">
          <CardGroup />
        </div>
        <div className="carousel-item">
          <CardGroup />
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={carouselButtonId}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ height: "0rem" }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={carouselButtonId}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ height: "0rem" }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
