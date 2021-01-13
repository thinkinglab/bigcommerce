import React, { useEffect, useState } from "react";
import "./App.css";

import { Col, Row } from "react-bootstrap";
import easydruglogo from "./assets/easydruglogo.png";
import cart from "./assets/cart.png";
import search from "./assets/search.png";
import user from "./assets/user.png";
import options from "./assets/options.png";
import product from "./assets/product.png";
import easydrugApi from "./api/easydrugApi";
import axios from "axios";

const productData = [
  {
    name: "Product name",
    title: "product title",
    price: "$9.99",
  },
  {
    name: "Product name",
    title: "product title",
    price: "$9.99",
  },
  {
    name: "Product name",
    title: "product title",
    price: "$9.99",
  },
  {
    name: "Product name",
    title: "product title",
    price: "$9.99",
  },
  {
    name: "Product name",
    title: "product title",
    price: "$9.99",
  },
  {
    name: "Product name",
    title: "product title",
    price: "$9.99",
  },
];
function App() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    // try {
    //   easydrugApi.get("/categories").then((res) => console.log("RESS:", res));
    // } catch (error) {
    //   console.log("ERR", error);
    // }

    try {
      // axios
      //   .get(
      //     "https://api.bigcommerce.com/stores/cv9lqceyer/v3/catalog/products",
      //     {credentials: 'include'},
      //     {
      //       headers: {
      //         Accept: "application/json",
      //         "Content-Type": "application/json",
      //         "X-Auth-Token": "fs8uhl5uo8hh7qi0okmf5iydhidxxhf",
      //         "Access-Control-Allow-Origin": "*",
      //       },
      //     }
      //   )
      //   .then((res) => console.log("RES", res));

      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append("X-Auth-Token", "fs8uhl5uo8hh7qi0okmf5iydhidxxhf");
      
      var raw = "";
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://api.bigcommerce.com/stores/cv9lqceyer/v3/catalog/products", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    } catch (error) {
      console.log("ERR", error);
    }
  }, []);
  return (
    <div className=" container">
      {/* navigation */}
      <Row style={{ marginTop: "5vh" }}>
        <Col md={2}>
          <img style={{ width: 150 }} src={easydruglogo} alt="logo" />
        </Col>
        <Col md={7}>
          <Row style={{ marginLeft: 5, height: "100%" }}>
            <Col className="nav-item">Dashboard</Col>
            <Col className="nav-item">Priscription</Col>
            <Col className="nav-item">Talk To a Pharmacist</Col>
            <Col className="nav-item active">Shop</Col>
          </Row>
        </Col>
        <Col md={3}>
          <Row
            style={{
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: 15,
              marginLeft: 5,
              height: "100%",
              backgroundColor: "white",
            }}
          >
            <Col>
              <img src={search} alt="search" />
            </Col>
            <Col>
              <img src={cart} alt="search" />
            </Col>
            <Col>
              <img src={user} alt="search" />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Search section */}
      <Row style={{ marginTop: "5vh" }}>
        <Col md={11}>
          <input className="search-input" type="text" />
        </Col>
        <Col md={1}>
          <img
            style={{
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: 15,
              marginLeft: 5,
              height: "100%",
              backgroundColor: "white",
            }}
            src={user}
            alt="options"
          />
        </Col>
      </Row>

      {/* main */}
      <Row style={{ marginTop: "3vh" }}>
        <p style={{ fontSize: 24, fontWeight: "bold", textAlign: "left" }}>
          Shop By Category
        </p>
        {/* main division */}
        <Col>
          <Row>
            <Col className="side-panel" md={3}>
              <div className="side-panel-box">
                <div className="side-panel-content">
                  <p style={{ fontWeight: "bold" }}>Promotions</p>
                  <p>Antibiotics & Antiseptics</p>
                  <p>Cough & Cold</p>
                  <p>Digestive Health</p>
                  <p>Eye/Ear Care</p>
                  <p>Masks, Gloves & Sanitizers</p>
                  <p>Pain Relief</p>
                  <p>Vitamins</p>
                </div>
              </div>
            </Col>
            <Col className="main-panel" md={9}>
              <div className="main-panel-box">
                <Row>
                  <Col className="banner">banner</Col>
                </Row>
                {/* <Row>
                <p
                  style={{ fontSize: 22, textAlign: "left", marginTop: "5vh" }}
                >
                  Shop By Category
                </p>
                <Col style={{ overflow: "scroll", height: "30vh" }}>
                  <div style={{ display: "inline-block" }}>
                    <div className="category">
                      <div className="box"></div>
                      <p>Antibiotics & Antiseptics</p>
                    </div>
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <div className="category">
                      <div className="box"></div>
                      <p>Antibiotics & Antiseptics</p>
                    </div>
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <div className="category">
                      <div className="box"></div>
                      <p>Antibiotics & Antiseptics</p>
                    </div>
                  </div>
                  <div style={{ display: "inline-block" }}>
                    <div className="category">
                      <div className="box"></div>
                      <p>Antibiotics & Antiseptics</p>
                    </div>
                  </div>
                </Col>
              </Row> */}
                <Row>
                  <p
                    style={{
                      fontSize: 22,
                      textAlign: "left",
                      marginTop: "5vh",
                    }}
                  >
                    Recommended products
                  </p>
                  <Col>
                    {productData.map((d) => {
                      return (
                        <div className="product-card">
                          <div className="product-box">
                            <img
                              style={{ width: "55%" }}
                              src={product}
                              alt="product"
                            />
                            <p>
                              Product name here <br /> long title here
                            </p>
                            <div
                              style={{
                                width: "80%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>$9.99</p>
                              <p>plus</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
