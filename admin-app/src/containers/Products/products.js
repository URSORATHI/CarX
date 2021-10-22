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
import "./style.css";
import { generatePublicUrl } from "../../urlConfig";
import { addProduct } from "../../actions";

const Products = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inspectionScore, setInspectionScore] = useState("");
  const [carPictures, setCarPictures] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const [manufacturedYear, setManufacturedYear] = useState("");
  const [regYear, setRegYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [kmsDriven, setKmsDriven] = useState("");
  const [engineDisplacement, setEngineDisplacement] = useState("");
  const [noOfOwners, setNoOfOwners] = useState("");
  const [rto, setRto] = useState("");
  const [transmission, setTransmission] = useState("");
  const [insuranceType, setInsuranceType] = useState("");

  const [interiorDetails, setInteriorDetails] = useState("");
  const [bodyNframe, setBodyNframe] = useState("");
  const [engineNtransmission, setEngineNtransmission] = useState("");
  const [electricals, setElectricals] = useState("");
  const [tyre, setTyre] = useState("");
  const [light, setLight] = useState("");
  const [exteriorDetails, setExteriorDetails] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  const [mileage, setMileage] = useState("");
  const [engine, setEngine] = useState("");
  const [maxPower, setMaxPower] = useState("");
  const [torque, setTorque] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [seats, setSeats] = useState("");

  const [carComfort, setCarComfort] = useState("");
  const [carSafety, setCarSafety] = useState("");
  const [carInterior, setCarInterior] = useState("");
  const [carExterior, setCarExterior] = useState("");
  const [carEntertainment, setCarEntertainment] = useState("");

  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const [productDetails, setProductDetails] = useState(null);
  const [productDetailModal, setProductDetailModal] = useState(false);

  // const [nestedCarOverview, setNestedCarOverview] = useState({
  //   // carOverview: [
  //   //   {
  //   manufacturedYear: "",
  //   regYear: "",
  //   fuel: "",
  //   kmsDriven: "",
  //   engineDisplacement: "",
  //   noOfOwners: "",
  //   rto: "",
  //   transmission: "",
  //   insuranceType: "",
  //   //   },
  //   // ],
  // });
  // const [nestedInspectionReport, setNestedInspectionReport] = useState({
  //   // inspectionReport: [
  //   //   {
  //   interiorDetails: "",
  //   bodyNframe: "",
  //   engineNtransmission: "",
  //   electricals: "",
  //   tyre: "",
  //   light: "",
  //   exteriorDetails: "",
  //   otherDetails: "",
  //   //   },
  //   // ],
  // });
  // const [nestedCarSpecifications, setNestedCarSpecifications] = useState({
  //   // carSpecifications: [
  //   //   {
  //   mileage: "",
  //   engine: "",
  //   maxPower: "",
  //   torque: "",
  //   wheelSize: "",
  //   seats: "",
  //   //   },
  //   // ],
  // });
  // const [nestedCarFeatures, setNestedCarFeatures] = useState({
  //   // carFeatures: [
  //   //   {
  //   carComfort: "",
  //   carSafety: "",
  //   carInterior: "",
  //   carExterior: "",
  //   carEntertainment: "",
  //   //   },
  //   // ],
  // });
  const dispatch = useDispatch();

  const handleClose = (e) => {
    const form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("inspectionScore", inspectionScore);
    form.append("category", categoryId);

    form.append("manufacturedYear", manufacturedYear);
    form.append("regYear", regYear);
    form.append("fuel", fuel);
    form.append("kmsDriven", kmsDriven);
    form.append("engineDisplacement", engineDisplacement);
    form.append("noOfOwners", noOfOwners);
    form.append("rto", rto);
    form.append("transmission", transmission);
    form.append("insuranceType", insuranceType);

    form.append("interiorDetails", interiorDetails);
    form.append("bodyNframe", bodyNframe);
    form.append("engineNtransmission", engineNtransmission);
    form.append("electricals", electricals);
    form.append("tyre", tyre);
    form.append("light", light);
    form.append("exteriorDetails", exteriorDetails);
    form.append("otherDetails", otherDetails);

    form.append("mileage", mileage);
    form.append("engine", engine);
    form.append("maxPower", maxPower);
    form.append("torque", torque);
    form.append("wheelSize", wheelSize);
    form.append("seats", seats);

    form.append("carComfort", carComfort);
    form.append("carSafety", carSafety);
    form.append("carInterior", carInterior);
    form.append("carExterior", carExterior);
    form.append("carEntertainment", carEntertainment);
    for (let pic of carPictures) {
      form.append("carPictures", pic);
    }
    // for (let data in nestedCarOverview) {
    //   console.log("1");
    //   form.append(`${data}`, nestedCarOverview[data]);
    //   console.log("1");
    // }
    // for (let data in nestedInspectionReport) {
    //   console.log("2");
    //   form.append(`${data}`, nestedInspectionReport[data]);
    // }
    // for (let data in nestedCarSpecifications) {
    //   console.log("3");
    //   form.append(`${data}`, nestedCarSpecifications[data]);
    // }
    // for (let data in nestedCarFeatures) {
    //   console.log("4");
    //   form.append(`${data}`, nestedCarFeatures[data]);
    // }

    dispatch(addProduct(form));
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleCarPictures = (e) => {
    setCarPictures([...carPictures, e.target.files[0]]);
  };
  console.log(carPictures);

  const renderProducts = () => {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Inspection Score</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0
            ? product.products.map((product) => (
                <tr
                  onClick={() => showProductDetailsModal(product)}
                  key={product._id}
                >
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.inspectionScore}</td>
                  <td>{product.category.name}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  const renderAddProductModal = () => {
    return (
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md="6">
                <Form.Control
                  type="text"
                  value={name}
                  style={{ marginTop: "10px" }}
                  placeholder={"Product Name"}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="6">
                <Form.Control
                  type="text"
                  value={price}
                  style={{ marginTop: "10px" }}
                  placeholder={"Product Price"}
                  onChange={(e) => setPrice(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <Form.Control
                  type="text"
                  value={inspectionScore}
                  style={{ marginTop: "10px" }}
                  placeholder={"Inspection Score"}
                  onChange={(e) => setInspectionScore(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="6">
                <select
                  className="form-control"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  style={{ marginTop: "10px" }}
                >
                  <option>Select Category</option>
                  {createCategoryList(category.categories).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                {carPictures.length > 0
                  ? carPictures.map((pic, index) => (
                      <div key={index}>{JSON.stringify(pic.name)}</div>
                    ))
                  : null}

                <Form.Control
                  type="file"
                  name="carPictures"
                  onChange={handleCarPictures}
                  className="mb-3 mt-3"
                ></Form.Control>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col md="12">
                <label className="addSectionHeading">Car Overview</label>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.manufacturedYear}
                  value={manufacturedYear}
                  style={{ marginTop: "10px" }}
                  placeholder={"Manufactured Year"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     manufacturedYear: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setManufacturedYear(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.regYear}
                  value={regYear}
                  style={{ marginTop: "10px" }}
                  placeholder={"Registration Year"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     regYear: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setRegYear(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.fuel}
                  value={fuel}
                  style={{ marginTop: "10px" }}
                  placeholder={"Fuel"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     fuel: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setFuel(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.kmsDriven}
                  value={kmsDriven}
                  style={{ marginTop: "10px" }}
                  placeholder={"KMS Driven"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     kmsDriven: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setKmsDriven(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.rto}
                  value={rto}
                  style={{ marginTop: "10px" }}
                  placeholder={"RTO"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     rto: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setRto(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.engineDisplacement}
                  value={engineDisplacement}
                  style={{ marginTop: "10px" }}
                  placeholder={"Engine Displacement"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     engineDisplacement: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setEngineDisplacement(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>

            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.noOfOwners}
                  value={noOfOwners}
                  style={{ marginTop: "10px" }}
                  placeholder={"Number of Owners"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     noOfOwners: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setNoOfOwners(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.transmission}
                  value={transmission}
                  style={{ marginTop: "10px" }}
                  placeholder={"Transmission"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     transmission: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setTransmission(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarOverview.insuranceType}
                  value={insuranceType}
                  style={{ marginTop: "10px" }}
                  placeholder={"Insurance Type"}
                  // onChange={(e) =>
                  //   setNestedCarOverview({
                  //     ...nestedCarOverview,
                  //     insuranceType: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setInsuranceType(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col md="12">
                <label className="addSectionHeading">Inspection Report</label>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.interiorDetails}
                  value={interiorDetails}
                  style={{ marginTop: "10px" }}
                  placeholder={"Interior Details"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     interiorDetails: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setInteriorDetails(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.bodyNframe}
                  value={bodyNframe}
                  style={{ marginTop: "10px" }}
                  placeholder={"Body & Frame"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     bodyNframe: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setBodyNframe(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.engineNtransmission}
                  value={engineNtransmission}
                  style={{ marginTop: "10px" }}
                  placeholder={"Engine & Transmission"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     engineNtransmission: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setEngineNtransmission(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.electricals}
                  value={electricals}
                  style={{ marginTop: "10px" }}
                  placeholder={"Electricals"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     electricals: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setElectricals(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.tyre}
                  value={tyre}
                  style={{ marginTop: "10px" }}
                  placeholder={"Tyre"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     tyre: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setTyre(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.light}
                  value={light}
                  style={{ marginTop: "10px" }}
                  placeholder={"Light"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     light: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setLight(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.exteriorDetails}
                  value={exteriorDetails}
                  style={{ marginTop: "10px" }}
                  placeholder={"Exterior Details"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     exteriorDetails: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setExteriorDetails(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedInspectionReport.otherDetails}
                  value={otherDetails}
                  style={{ marginTop: "10px" }}
                  placeholder={"Other Details"}
                  // onChange={(e) =>
                  //   setNestedInspectionReport({
                  //     ...nestedInspectionReport,
                  //     otherDetails: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setOtherDetails(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>

            <hr />

            <Row>
              <Col md="12">
                <label className="addSectionHeading">Car Specifications</label>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarSpecifications.mileage}
                  value={mileage}
                  style={{ marginTop: "10px" }}
                  placeholder={"Mileage"}
                  // onChange={(e) =>
                  //   setNestedCarSpecifications({
                  //     ...nestedCarSpecifications,
                  //     mileage: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setMileage(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarSpecifications.engine}
                  value={engine}
                  style={{ marginTop: "10px" }}
                  placeholder={"Engine"}
                  // onChange={(e) =>
                  //   setNestedCarSpecifications({
                  //     ...nestedCarSpecifications,
                  //     engine: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setEngine(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarSpecifications.maxPower}
                  value={maxPower}
                  style={{ marginTop: "10px" }}
                  placeholder={"Max Power"}
                  // onChange={(e) =>
                  //   setNestedCarSpecifications({
                  //     ...nestedCarSpecifications,
                  //     maxPower: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setMaxPower(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarSpecifications.torque}
                  value={torque}
                  style={{ marginTop: "10px" }}
                  placeholder={"Torque"}
                  // onChange={(e) =>
                  //   setNestedCarSpecifications({
                  //     ...nestedCarSpecifications,
                  //     torque: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setTorque(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarSpecifications.wheelSize}
                  value={wheelSize}
                  style={{ marginTop: "10px" }}
                  placeholder={"Wheel Size"}
                  // onChange={(e) =>
                  //   setNestedCarSpecifications({
                  //     ...nestedCarSpecifications,
                  //     wheelSize: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setWheelSize(e.target.value)}
                ></Form.Control>
              </Col>
              <Col md="4">
                <Form.Control
                  type="text"
                  // value={nestedCarSpecifications.seats}
                  value={seats}
                  style={{ marginTop: "10px" }}
                  placeholder={"Seats"}
                  // onChange={(e) =>
                  //   setNestedCarSpecifications({
                  //     ...nestedCarSpecifications,
                  //     seats: e.target.value,
                  //   })
                  // }
                  onChange={(e) => setSeats(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>

            <hr />

            <Row className="mb-2">
              <Col md="12">
                <label className="addSectionHeading">Car Features</label>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Car Comfort</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={carComfort}
                    placeholder={"Car Comfort"}
                    onChange={(e) => setCarComfort(e.target.value)}
                  />
                </Form.Group>

                {/* <FloatingLabel
                  controlId="floatingTextarea"
                  label="Car Comfort"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    // value={nestedCarFeatures.carComfort}
                    value={carComfort}
                    placeholder={"Car Comfort"}
                    // onChange={(e) =>
                    //   setNestedCarFeatures({
                    //     ...nestedCarFeatures,
                    //     carComfort: e.target.value,
                    //   })
                    // }
                    onChange={(e) => setCarComfort(e.target.value)}
                  />
                </FloatingLabel> */}

                {/* <Form.Control
                  type="text"
                  value={nestedCarFeatures.carComfort}
                  style={{ marginTop: "10px" }}
                  placeholder={"Car Comfort"}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control> */}
              </Col>
              <Col md="12">
                {/* <Form.Control
                  type="text"
                  value={nestedCarFeatures.carSafety}
                  style={{ marginTop: "10px" }}
                  placeholder={"Car Safety"}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control> */}
                {/* <FloatingLabel
                  controlId="floatingTextarea"
                  label="Car Safety"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    // value={nestedCarFeatures.carSafety}
                    value={carSafety}
                    style={{ marginTop: "10px" }}
                    placeholder={"Car Safety"}
                    // onChange={(e) =>
                    //   setNestedCarFeatures({
                    //     ...nestedCarFeatures,
                    //     carSafety: e.target.value,
                    //   })
                    // }
                    onChange={(e) => setCarSafety(e.target.value)}
                  />
                </FloatingLabel> */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Car Comfort</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={carSafety}
                    placeholder={"Car Safety"}
                    onChange={(e) => setCarSafety(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md="12">
                {/* <Form.Control
                  type="text"
                  value={nestedCarFeatures.carInterior}
                  style={{ marginTop: "10px" }}
                  placeholder={"Car Interior"}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control> */}
                {/* <FloatingLabel
                  controlId="floatingTextarea"
                  label="Car Interior"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    // value={nestedCarFeatures.carInterior}
                    value={carInterior}
                    style={{ marginTop: "10px" }}
                    placeholder={"Car Interior"}
                    // onChange={(e) =>
                    //   setNestedCarFeatures({
                    //     ...nestedCarFeatures,
                    //     carInterior: e.target.value,
                    //   })
                    // }
                    onChange={(e) => setCarInterior(e.target.value)}
                  />
                </FloatingLabel> */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Car Comfort</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={carInterior}
                    placeholder={"Car Interior"}
                    onChange={(e) => setCarInterior(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md="12">
                {/* <Form.Control
                  type="text"
                  value={nestedCarFeatures.carExterior}
                  style={{ marginTop: "10px" }}
                  placeholder={"Car Exterior"}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control> */}
                {/* <FloatingLabel
                  controlId="floatingTextarea"
                  label="Car Exterior"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    // value={nestedCarFeatures.carExterior}
                    value={carExterior}
                    style={{ marginTop: "10px" }}
                    placeholder={"Car Exterior"}
                    // onChange={(e) =>
                    //   setNestedCarFeatures({
                    //     ...nestedCarFeatures,
                    //     carExterior: e.target.value,
                    //   })
                    // }
                    onChange={(e) => setCarExterior(e.target.value)}
                  />
                </FloatingLabel> */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Car Comfort</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={carExterior}
                    placeholder={"Car Exterior"}
                    onChange={(e) => setCarExterior(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md="12">
                {/* <Form.Control
                  type="text"
                  value={nestedCarFeatures.carEntertainment}
                  style={{ marginTop: "10px" }}
                  placeholder={"Car Entertainment"}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control> */}
                {/* <FloatingLabel
                  controlId="floatingTextarea"
                  label="Car Entertainment"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    // value={nestedCarFeatures.carEntertainment}
                    value={carEntertainment}
                    style={{ marginTop: "10px" }}
                    placeholder={"Car Entertainment"}
                    // onChange={(e) =>
                    //   setNestedCarFeatures({
                    //     ...nestedCarFeatures,
                    //     carEntertainment: e.target.value,
                    //   })
                    // }
                    onChange={(e) => setCarEntertainment(e.target.value)}
                  />
                </FloatingLabel> */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  {/* <Form.Label>Car Comfort</Form.Label> */}
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={carEntertainment}
                    placeholder={"Car Entertainment"}
                    onChange={(e) => setCarEntertainment(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleCloseProductDetailModal = () => {
    setProductDetailModal(false);
  };

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
    console.log(product);
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
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      {renderAddProductModal()}
      {renderProductDetailsModal()}
    </Layout>
  );
};

export default Products;
