import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({ name }) => {
  const navigate = useNavigate();
  const handleLinkClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <section className="breadcrumb-section">
      <div className="breadcrumb">
        <button className="btn btn-light" onClick={handleLinkClick}>
          <i className="fa-solid fa-chevron-left"></i> Back
        </button>
        <h3 className="pokemon__name">{name}</h3>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Breadcrumb;
