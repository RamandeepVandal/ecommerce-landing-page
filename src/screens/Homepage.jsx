import React from "react";
import { useNavigate } from "react-router-dom";
// components
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
// product images
import shoe1 from "./img/product1.jpg";
import shoe2 from "./img/product2.jpg";
import shoe3 from "./img/product3.jpg";
// brand images
import nike from "./img/brand-img/Nike-Logo.png";
import adidas from "./img/brand-img/Adidas_logo.png";
import puma from "./img/brand-img/Puma-logo.png";
import converse from "./img/brand-img/converse-logo.png";
import under from "./img/brand-img/under-logo.png";
// promotion images
import promotion from "./img/promotion.png";

export const Homepage = () => {
  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/product");

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ height: 100 + "vh" }} className="hero-section">
        <Header />
        <div className="d-flex justify-content-center align-items-center ">
          <div className="hero m-5 p-5">
            <p>Jordan 1s - High</p>
            <h1>
              <span>Reinventing</span> <br /> Running Experience
            </h1>
            <button
              className="mt-4 btn btn-outline-info btn-lg btn-block"
              onClick={handleClick}
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* PROUDUCT PROMOTION SECTION */}
      <section
        style={{ height: 100 + "vh" }}
        className="product-section d-flex justify-content-center align-items-center flex-column"
      >
        <div className="product-box-section">
          <h1>NOW ON SALE</h1>
          <p>UP TO 50% OFF</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card card-boxes m-3" style={{ width: 20 + "em" }}>
            <img
              src={shoe1}
              alt="Shoe 1"
              className="card-img-top img-fluid"
              style={{ height: 300 + "px" }}
            />
            <button className="btn btn-outline-light mt-4">View Details</button>
          </div>
          <div className="card card-boxes m-3" style={{ width: 20 + "em" }}>
            <img
              src={shoe2}
              alt="Shoe 2"
              className="card-img-top img-fluid"
              style={{ height: 300 + "px" }}
            />
            <button className="btn btn-outline-light mt-4">View Details</button>
          </div>
          <div className="card card-boxes m-3" style={{ width: 20 + "em" }}>
            <img
              src={shoe3}
              alt="Shoe 3"
              className="card-img-top img-fluid"
              style={{ height: 300 + "px" }}
            />
            <button className="btn btn-outline-light mt-4">View Details</button>
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section>
        <div className="d-flex justify-content-center align-items-center m-5 p-5 brand-section">
          <img className="m-5" src={nike} alt="nike" />
          <img className="m-5" src={adidas} alt="nike" />
          <img className="m-5" src={puma} alt="nike" />
          <img className="m-5" src={under} alt="nike" />
          <img className="m-5" src={converse} alt="nike" />
        </div>
      </section>

      {/* PROMOTIONS SECTION */}
      <section style={{ height: 75 + "vh" }} className="promotion-section">
        <div className="d-flex justify-content-between align-items-center m-5 p-3 promotion">
          <img src={promotion} alt="promotion shoe" />
          <div style={{ width: 40 + "em" }}>
            <h2 style={{ fontSize: 60 + "px" }}>
              <span>Shoes Like You've</span> <br /> Never Worn Before
            </h2>
            <p style={{ fontSize: 20 + "px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsam saepe exercitationem distinctio dignissimos praesentium
              deserunt qui porro voluptatem.
            </p>
            <button
              className="btn btn-outline-light btn-lg"
              onClick={handleClick}
            >
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Contact />

      {/* FOOTER SECTION */}
      <Footer />
    </main>
  );
};
