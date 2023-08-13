import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="brand-logo">
            <img
              src="https://assets.stickpng.com/images/612ce4761b9679000402af1c.png"
              className="logo__image"
            />
          </Link>
          <Link to="/my-team" className="btn btn-outline-primary">
            Make your team
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
