import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  vehiclesDataQuery,
  vehiclesCurrentPageState,
} from "../state/domain/Vehicles";
import PaginatedList from "../common/PaginatedList";

export default () => {
  const [currentPage, setCurrentPage] = useRecoilState(
    vehiclesCurrentPageState
  );
  const { pagesCount, results } = useRecoilValue(vehiclesDataQuery);

  const pagination = {
    currentPage,
    pagesCount,
    setCurrentPage,
  };

  return <PaginatedList resources={results} {...pagination} />;
};
