import React, { useState } from "react";
import { Header } from "../components/Header";
// image
import imageProduct from "./img/image-product.jpg";

export const Productpage = () => {

  const [quantity, setQuantity] = useState(0);

  return (
    <section className="product-page">
      <Header />
      <div className="product-page-section d-flex justify-content-evenly align-items-center m-5">
        <img src={imageProduct} alt="product" className="img-fluid" />
        <div className="product-info">
          <h1>
            Fall Limited Edition <br />
            <span>Sneakers</span>
          </h1>
          <p className="mt-4">
            These low-profile sneakers are your perfect casual wear companion.
            <br /> Featuring a durable rubber outer sole, they'll withstand
            everything <br />
            the weather can offer.
          </p>
          <h2>$125.00</h2>
          <div className="d-flex quantity-prod">
            <button className="btn btn-light mt-2 mb-2" onClick={() => quantity <= 0 ? null : setQuantity(quantity - 1)}>-</button>
            <h2 className="mt-2 mb-2">{quantity}</h2>
            <button className="btn btn-light mt-2 mb-2"  onClick={() => setQuantity(quantity + 1)}>+</button>
            <button className="btn btn-info btn-lg m-2">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};
