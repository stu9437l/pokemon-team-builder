import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ name }) => {
  return (
    <section className="breadcrumb-section">
      <div className="breadcrumb">
        <Link to="/" className="btn btn-light">
          <i className="fa-solid fa-chevron-left"></i> Back
        </Link>
        <h3 className="pokemon__name">{name}</h3>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Breadcrumb;
