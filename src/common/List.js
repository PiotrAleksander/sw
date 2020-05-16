import React from "react";
import ListItem from "./ListItem";

export default ({ resources }) =>
  resources.map((resource) => (
    <ListItem key={resource.name} resource={resource} />
  ));
