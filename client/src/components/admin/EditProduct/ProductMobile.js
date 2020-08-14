import React, { useState } from "react";
import $ from "jquery";
// import "./css/ProductMobile.css";
import { Modal, Button } from "react-bootstrap";
import addImage from "./images/addImage.PNG";

const ProductMobile = ({ img1, img2, img3, img4 }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePreview = (value, imgclass) => {
    value != ""
      ? $(`.${imgclass}`).attr("src", value)
      : $(`.${imgclass}`).attr("src", addImage);
  };

  return (
    <div className="product-image-container mobile">
      <div className="cover-image">
        <img className="prod-img-1" src={addImage} alt="add Image" />
      </div>
      <div className="not-cover-image">
        <div>
          <img
            onClick={handleShow}
            className="prod-img-1"
            src={addImage}
            alt="add image"
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Enter Image Url</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                onChange={(e) => {
                  img1(e.target.value);
                  handlePreview(e.target.value, "prod-img-1");
                }}
                style={{ width: "100%", fontSize: "2rem" }}
                type="text"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <img
            onClick={handleShow}
            className="prod-img-2"
            src={addImage}
            alt="add image"
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Enter Image Url</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                onChange={(e) => {
                  img2(e.target.value);
                  handlePreview(e.target.value, "prod-img-2");
                }}
                style={{ width: "100%", fontSize: "2rem" }}
                type="text"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <img
            onClick={handleShow}
            className="prod-img-3"
            src={addImage}
            alt="add image"
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Enter Image Url</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                onChange={(e) => {
                  img3(e.target.value);
                  handlePreview(e.target.value, "prod-img-3");
                }}
                style={{ width: "100%", fontSize: "2rem" }}
                type="text"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <img
            onClick={handleShow}
            className="prod-img-4"
            src={addImage}
            alt="add image"
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Enter Image Url</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                onChange={(e) => {
                  img4(e.target.value);
                  handlePreview(e.target.value, "prod-img-4");
                }}
                style={{ width: "100%", fontSize: "2rem" }}
                type="text"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProductMobile;
