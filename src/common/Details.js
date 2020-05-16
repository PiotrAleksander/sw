import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { name } = useParams();

  return <section>{name}</section>;
};
