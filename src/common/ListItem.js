import React from "react";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";

export default ({ resource: { img, name } }) => {
  return (
    <Link to={`${routes.DETAILS}/${name}`}>
      <figure>
        <img src={img} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  );
};
