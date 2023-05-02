import React from "react";

export const Footer = () => {
  return (
    <div
      style={{ height: 25 + "vh" }}
      className="d-flex justify-content-evenly align-items-center text-center"
    >
      <div className="d-flex flex-column contact-links">
        <a href="#" className="m-2">HOME</a>
        <a href="#" className="m-2">BENEFITS</a>
        <a href="#" className="m-2">ORDER</a>
      </div>
      <div className="d-flex flex-column contact-links">
        <a href="#" className="m-2">SHIPPING & RETURNS</a>
        <a href="#" className="m-2">STORE POLICY</a>
        <a href="#" className="m-2">FAQ</a>
      </div>
      <div className="d-flex flex-column contact-links">
        <a href="#" className="m-2">INSTAGRAM</a>
        <a href="#" className="m-2">YOUTUBE</a>
        <a href="#" className="m-2">TWITTER</a>
      </div>
    </div>
  );
};
