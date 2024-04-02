import React, { useState, useEffect } from "react";
import "./Home.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../imgs/logo1.png";
import image1 from "../imgs/image1.jpg";
import image2 from "../imgs/image2.jpg";
import image3 from "../imgs/image3.jpg";
import image4 from "../imgs/image1.jpg";
import image5 from "../imgs/image2.jpg";
import image6 from "../imgs/image3.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change the interval time as needed (e.g., 5000 milliseconds for 5 seconds)
    return () => clearInterval(interval);
  }, []);

  const handleRadioChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
        <div className="radio-buttons">
          {images.map((image, index) => (
            <label key={index}>
              <input
                className="input"
                type="radio"
                checked={index === currentImageIndex}
                onChange={() => handleRadioChange(index)}
              />
              <span />
            </label>
          ))}
        </div>
      </div>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
          id="hea-der"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src={logo}
                alt=""
                style={{ width: "100px", height: "50px" }}
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "100px", height: "50px" }}
                  ></img>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="mob-ile">
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  id="header--link"
                >
                  <Nav.Link href="/">home</Nav.Link>
                  <Nav.Link href="/we-are">we are</Nav.Link>
                  <Nav.Link href="/Team">the team</Nav.Link>
                  <Nav.Link href="/Contact">contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Home;
