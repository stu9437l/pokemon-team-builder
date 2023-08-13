import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Threedigit } from "../utils";

const Pokemon = ({
  color,
  id,
  image,
  index,
  name,
  types,
  StoreID,
  removeId,
  idAddButton,
  isRemoveButton,
}) => {
  return (
    <div className="col-6 col-lg-4 col-xl-3" key={index}>
      <div className="pokemon-card" style={{ backgroundColor: `${color}` }}>
        {idAddButton && (
          <button
            className="add-to-team"
            title="Add to your team"
            onClick={() => StoreID(id)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        )}
        {isRemoveButton && (
          <button
            className="remove__button"
            title="remove from team"
            onClick={() => removeId(id)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
        )}

        <div className="pokemon__image">
          <Link to={`/pokemon/${id}`}>
            <img src={image} />
          </Link>
        </div>
        <div className="text-center">
          <div className="d-flex align-items-center justify-content-center">
            <div className="pokemon__identity">#{Threedigit(index + 1)}</div>
          </div>
          <Link to={`/pokemon/${id}`}>
            <h3 className="pokemon__name">{name}</h3>
          </Link>
          <div className="pokemon__type">Type: {types.join(" , ")}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
