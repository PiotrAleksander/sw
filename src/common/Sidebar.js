import React from "react";
import { Link } from "react-router-dom";

import Routes from "../helpers/routes";

export default () => (
  <nav>
    <ul>
      <li>
        <Link to={Routes.CHARACTERS}>Characters</Link>
      </li>
      <li>
        <Link to={Routes.PLACES}>Places</Link>
      </li>
      <li>
        <Link to={Routes.VEHICLES}>Vehicles</Link>
      </li>
    </ul>
  </nav>
);
