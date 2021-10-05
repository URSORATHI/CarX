import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";

const Products = (props) => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [inspectionScore, setInspectionScore] = useState("");
  // const [carPictures, setCarPictures] = useState([]);
  // const [category, setCategory] = useState("");
  // // const { ...carOverview } = carOverview;
  // const [carOverview, setCarOverview] = useState([]);
  // // const { ...inspectionReport } = inspectionReport;
  // const [inspectionReport, setInspectionReport] = useState([]);
  // // const { ...carSpecifications } = carSpecifications;
  // const [carSpecifications, setCarSpecifications] = useState([]);
  // // const { ...carFeatures } = carFeatures;
  // const [carFeatures, setCarFeatures] = useState([]);

  return (
    <Layout sidebar>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                value={categoryName}
                placeholder={"Product Name"}
                onChange={(e) => setCategoryName(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Layout>
  );
};

export default Products;
