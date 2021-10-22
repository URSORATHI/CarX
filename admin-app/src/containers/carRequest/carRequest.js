import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Table,
} from "react-bootstrap";
import ModalImage from "react-modal-image";
import { useSelector, useDispatch } from "react-redux";
import { generatePublicUrl } from "../../urlConfig";

export default function CarRequest() {
  const product = useSelector((state) => state.product);
  const [productDetails, setProductDetails] = useState(null);
  const [productDetailModal, setProductDetailModal] = useState(false);

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
    console.log(product);
  };

  const carAdded = () => {
    alert("Car is added successfully!!");
  };
  const carRejected = () => {
    alert("Car is rejected!!");
  };

  const renderProducts = () => {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Inspection Score</th>
            <th>Category</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody id="deleteRow">
          {product.products.length > 0
            ? product.products
                .slice(product.products.length - 1)
                .map((product) => (
                  <tr>
                    <td>1</td>
                    <td
                      onClick={() => showProductDetailsModal(product)}
                      key={product._id}
                    >
                      {product.name}{" "}
                    </td>
                    <td>{product.price}</td>
                    <td>{product.inspectionScore}</td>
                    <td>{product.category.name}</td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-check-circle-fill"
                        viewBox="0 0 16 16"
                        style={{
                          color: "green",
                          marginLeft: "15px",
                          cursor: "pointer",
                        }}
                        onClick={() => carAdded()}
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </td>
                    <td>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-x-circle-fill"
                        viewBox="0 0 16 16"
                        style={{
                          color: "red",
                          marginLeft: "15px",
                          cursor: "pointer",
                        }}
                        onClick={() => carRejected()}
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                      </svg>
                    </td>
                  </tr>
                ))
            : null}
        </tbody>
      </Table>
    );
  };

  const handleCloseProductDetailModal = () => {
    setProductDetailModal(false);
  };

  const renderProductDetailsModal = () => {
    if (!productDetails) {
      return null;
    }
    return (
      <Modal
        show={productDetailModal}
        onHide={handleCloseProductDetailModal}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Car Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md="6">
              <label className="key">Name</label>
              <p className="value">{productDetails.name}</p>
            </Col>
            <Col md="6">
              <label className="key">Price</label>
              <p className="value">{productDetails.price}</p>
            </Col>
          </Row>

          <Row>
            <Col md="6">
              <label className="key">Inspection Score</label>
              <p className="value">{productDetails.inspectionScore}</p>
            </Col>
            <Col md="6">
              <label className="key">Category</label>
              <p className="value">{productDetails.category.name}</p>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <label className="key">Car Pictures</label>
              <div style={{ display: "flex" }}>
                {productDetails.carPictures.map((picture) => (
                  <div style={{ margin: "0 2px" }}>
                    <ModalImage
                      small={generatePublicUrl(picture.img)}
                      large={generatePublicUrl(picture.img)}
                      // alt={value.alt}
                      hideDownload={false}
                      hideZoom={true}
                    />
                  </div>

                  // <div
                  //   className="carImageContainer"
                  //   style={{ margin: "0 2px" }}
                  // >
                  //   <img src={generatePublicUrl(picture.img)} />
                  // </div>
                ))}
              </div>
            </Col>
          </Row>

          <hr />

          <Row className="mb-2">
            <Col md="12">
              <label className="sectionHeading">Car Overview</label>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <label className="key">Manufactured Year</label>
              <p className="value">{productDetails.manufacturedYear}</p>
            </Col>
            <Col md="4">
              <label className="key">Registration Year</label>
              <p className="value">{productDetails.regYear}</p>
            </Col>
            <Col md="4">
              <label className="key">Fuel</label>
              <p className="value">{productDetails.fuel}</p>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <label className="key">KMS Driven</label>
              <p className="value">{productDetails.kmsDriven}</p>
            </Col>
            <Col md="4">
              <label className="key">RTO</label>
              <p className="value">{productDetails.rto}</p>
            </Col>
            <Col md="4">
              <label className="key">Engine Displacement</label>
              <p className="value">{productDetails.engineDisplacement}</p>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <label className="key">Number of Owners</label>
              <p className="value">{productDetails.noOfOwners}</p>
            </Col>
            <Col md="4">
              <label className="key">Transmission</label>
              <p className="value">{productDetails.transmission}</p>
            </Col>
            <Col md="4">
              <label className="key">Insurance Type</label>
              <p className="value">{productDetails.insuranceType}</p>
            </Col>
          </Row>

          <hr />

          <Row className="mb-2">
            <Col md="12">
              <label className="sectionHeading">Inspection Report</label>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <label className="key">Interior Details</label>
              <p className="value">{productDetails.interiorDetails}</p>
            </Col>
            <Col md="4">
              <label className="key">Body & Frame</label>
              <p className="value">{productDetails.bodyNframe}</p>
            </Col>
            <Col md="4">
              <label className="key">Engine & Transmission</label>
              <p className="value">{productDetails.engineNtransmission}</p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <label className="key">Electricals</label>
              <p className="value">{productDetails.electricals}</p>
            </Col>
            <Col md="4">
              <label className="key">Tyre</label>
              <p className="value">{productDetails.tyre}</p>
            </Col>
            <Col md="4">
              <label className="key">Light</label>
              <p className="value">{productDetails.light}</p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <label className="key">Exterior Details</label>
              <p className="value">{productDetails.exteriorDetails}</p>
            </Col>
            <Col md="4">
              <label className="key">Other Details</label>
              <p className="value">{productDetails.otherDetails}</p>
            </Col>
          </Row>

          <hr />

          <Row className="mb-2">
            <Col md="12">
              <label className="sectionHeading">Car Specifications</label>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <label className="key">Mileage</label>
              <p className="value">{productDetails.mileage}</p>
            </Col>
            <Col md="4">
              <label className="key">Engine</label>
              <p className="value">{productDetails.engine}</p>
            </Col>
            <Col md="4">
              <label className="key">Max Power</label>
              <p className="value">{productDetails.maxPower}</p>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <label className="key">Torque</label>
              <p className="value">{productDetails.torque}</p>
            </Col>
            <Col md="4">
              <label className="key">Wheel Size</label>
              <p className="value">{productDetails.wheelSize}</p>
            </Col>
            <Col md="4">
              <label className="key">Seats</label>
              <p className="value">{productDetails.seats}</p>
            </Col>
          </Row>

          <hr />

          <Row className="mb-2">
            <Col md="12">
              <label className="sectionHeading">Car Features</label>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <label className="key">Car Comfort</label>
              <p className="value">{productDetails.carComfort}</p>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <label className="key">Car Safety</label>
              <p className="value">{productDetails.carSafety}</p>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <label className="key">Car Interior</label>
              <p className="value">{productDetails.carInterior}</p>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <label className="key">Car Exterior</label>
              <p className="value">{productDetails.carExterior}</p>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <label className="key">Car Entertainment</label>
              <p className="value">{productDetails.carEntertainment}</p>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseProductDetailModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      {renderProductDetailsModal()}
    </Layout>
  );
}
