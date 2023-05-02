import React from "react";

export const Contact = () => {
  return (
    <div
      style={{ height: 30 + "vh" }}
      className="contact-section d-flex justify-content-center align-items-center"
    >
      <h3 className="align-items-center me-4">Stay Connected</h3>
      <input type="text" placeholder="Enter email..." className="form-control" style={{width: 30 + 'em'}}/>
      <button className="btn btn-info ms-2">Subscribe</button>
    </div>
  );
};
