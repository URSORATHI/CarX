import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
// import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { addToWishlist } from "../../actions";
import { Button } from ".react-bootstrap-0JNMiNJT";

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId,
      },
    };

    dispatch(getProductDetailsById(payload));
  }, []);

  return (
    <div>
      <Navbar />
      <div class="body">
        <div class="container-fluid">
          <div class="row mx-2">
            <nav class="nav" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  Car Details
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {product.productDetails.name}
                </li>
              </ol>
            </nav>
          </div>

          <div class="row mx-5">
            <div class="card border-0">
              <div class="card-body">{product.productDetails.name}</div>
            </div>
          </div>

          <div class="row mx-3 mb-5 g-4">
            <div className="col-md-7">
              <div className="card">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* <Carousel>
                    <Carousel.Item>
                      <img
                        src={car}
                        className="d-block w-100"
                        alt="First slide"
                      />
                      <Carousel.Caption className="carousel-caption d-none d-md-block"></Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img src={car} className="d-block w-100" alt="..." />
                      <Carousel.Caption className="carousel-caption d-none d-md-block"></Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img src={car} className="d-block w-100" alt="..." />
                      <Carousel.Caption className="carousel-caption d-none d-md-block"></Carousel.Caption>
                    </Carousel.Item>
                  </Carousel> */}
                </div>
              </div>
            </div>

            <div class="col-md-1"></div>

            <div class="col-md-4 px-4">
              <div class="card h-80 text-center">
                <div class="card-header text-white bg-dark">2 Days Ago</div>
                <div class="card-body">
                  <h6 class="card-title">{product.productDetails.name}</h6>
                  <p class="card-text">
                    <li>{product.productDetails.transmission}</li>
                    <li>{product.productDetails.fuel}</li>
                    <li>Second Owner</li>
                  </p>
                  <a
                    href="#"
                    class="btn btn-success w-75"
                    onClick={() => {
                      const { _id, name, price } = product.productDetails;
                      const img = product.productDetails.productPictures[0].img;
                      dispatch(addToWishlist({ _id, name, price, img }));
                      props.history.push(`/cart`);
                    }}
                  >
                    Add to Wishlist
                  </a>
                </div>
                <div class="card-footer text-white bg-dark ">
                  <strike>₹5,12,499</strike>
                  <span> ₹5,00,499</span>
                </div>
              </div>
            </div>
          </div>

          <div class="row mx-3 mb-5 g-4">
            <div className="col-md-8">
              <div class="card">
                <div class="card-header text-white bg-dark">Car Details</div>
                <ul
                  class="list-group list-group-flush"
                  style={{ fontSize: 15 }}
                >
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row ">
                        <div class="col-sm-5">Model</div>
                        <div class="col-sm-7">
                          {product.productDetails.name}
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">Manufactured Year</div>
                        <div class="col-sm-7">
                          {product.productDetails.manufacturedYear}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">Fuel Type</div>
                        <div class="col-sm-7">
                          {product.productDetails.fuel}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">Registration Year</div>
                        <div class="col-sm-7">
                          {product.productDetails.regYear}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">Engine Displacement</div>
                        <div class="col-sm-7">
                          {product.productDetails.engineDisplacement}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">KMS Driven</div>
                        <div class="col-sm-7">
                          {product.productDetails.kmsDriven}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">RTO</div>
                        <div class="col-sm-7">{product.productDetails.rto}</div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">Price</div>
                        <div class="col-sm-7">
                          {product.productDetails.price}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">Number of Owners</div>
                        <div class="col-sm-7">
                          {product.productDetails.noOfOwners}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-5">Insurance Type</div>
                        <div class="col-sm-7">
                          {product.productDetails.insuranceType}
                        </div>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            <div class="col-md-4 px-4">
              <div class="card text-white bg-dark mb-3">
                <div class="card-header">
                  <h6 class="card-title">Car Discrepancies</h6>
                </div>
                <div class="card-body" style={{ fontSize: 15 }}>
                  <li>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </li>
                  <li>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="row mx-3 mb-5 g-4">
            <div className="col-md-7">
              <div class="card">
                <div class="card-header text-white bg-dark">
                  Inspection Score
                </div>
                <ul
                  class="list-group list-group-flush"
                  style={{ fontSize: 15 }}
                >
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row ">
                        <div class="col-sm-9">Interior Details</div>
                        <div class="col-sm-3">
                          {product.productDetails.interiorDetails}
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-9">Body and Frame</div>
                        <div class="col-sm-3">
                          {product.productDetails.bodyNframe}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-9">Engine and Transmission</div>
                        <div class="col-sm-3">
                          {product.productDetails.engineNtransmission}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-9">Electricals</div>
                        <div class="col-sm-3">
                          {product.productDetails.electricals}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-9">Tyre</div>
                        <div class="col-sm-3">
                          {product.productDetails.tyre}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-9">Light</div>
                        <div class="col-sm-3">
                          {product.productDetails.light}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-9">Exterior Details</div>
                        <div class="col-sm-3">
                          {product.productDetails.exteriorDetails}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-9">Other Details</div>
                        <div class="col-sm-3">
                          {product.productDetails.otherDetails}
                        </div>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            <div className="col-md-5">
              <div class="card">
                <div class="card-header text-white bg-dark">
                  Car Specifications
                </div>
                <ul
                  class="list-group list-group-flush"
                  style={{ fontSize: 15 }}
                >
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row ">
                        <div class="col-sm-8">Mileage</div>
                        <div class="col-sm-4">
                          {product.productDetails.mileage}
                        </div>
                      </div>
                    </li>

                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-8">Engine</div>
                        <div class="col-sm-4">
                          {product.productDetails.engine}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-8">Max Power</div>
                        <div class="col-sm-4">
                          {product.productDetails.maxPower}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-8">Torque</div>
                        <div class="col-sm-4">
                          {product.productDetails.torque}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-8">Wheel Size</div>
                        <div class="col-sm-4">
                          {product.productDetails.wheelSize}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-8">Seats</div>
                        <div class="col-sm-4">
                          {product.productDetails.seats}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-8">Transmission</div>
                        <div class="col-sm-4">
                          {product.productDetails.transmission}
                        </div>
                      </div>
                    </li>
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-8">Fuel Type</div>
                        <div class="col-sm-4">
                          {product.productDetails.fuel}
                        </div>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          <div class="row mx-3 mb-5 g-4">
            <div className="col-md-12">
              <div class="card">
                <div class="card-header text-white bg-dark">Car Features</div>
                <ul
                  class="list-group list-group-flush"
                  style={{ fontSize: 15 }}
                >
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row ">
                        <div class="col-sm-3">Car Comfort</div>
                        <div class="col-sm-9">
                          {product.productDetails.carComfort}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-3">Car Safety</div>
                        <div class="col-sm-9">
                          {product.productDetails.carSafety}
                        </div>
                      </div>
                    </li>
                  </ul>

                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-3">Car Interior</div>
                        <div class="col-sm-9">
                          {product.productDetails.carInterior}
                        </div>
                      </div>
                    </li>
                  </ul>

                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-3">Car Exterior</div>
                        <div class="col-sm-9">
                          {product.productDetails.carExterior}
                        </div>
                      </div>
                    </li>
                  </ul>

                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item border-1 w-100">
                      <div class="row">
                        <div class="col-sm-3">Car Entertainment</div>
                        <div class="col-sm-9">
                          {product.productDetails.carEntertainment}
                        </div>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
