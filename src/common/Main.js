import React from "react";
import { Switch, Route } from "react-router-dom";

import Routes from "../helpers/routes";

import CharactersList from "../containers/CharactersList";
import VehiclesList from "../containers/VehiclesList";
import PlanetsList from "../containers/PlanetsList";
import Details from "./Details";

export default () => (
  <main>
    <Switch>
      <Route exact path={Routes.MAIN} children={<CharactersList />} />
      <Route exact path={Routes.CHARACTERS} children={<CharactersList />} />
      <Route path={Routes.PLACES} children={<PlanetsList />} />
      <Route path={Routes.VEHICLES} children={<VehiclesList />} />
      <Route path={`${Routes.DETAILS}/:name`} children={<Details />} />
    </Switch>
  </main>
);
