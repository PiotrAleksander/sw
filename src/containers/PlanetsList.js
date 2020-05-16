import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  planetsDataQuery,
  planetsCurrentPageState,
} from "../state/domain/Planets";
import PaginatedList from "../common/PaginatedList";

export default () => {
  const [currentPage, setCurrentPage] = useRecoilState(planetsCurrentPageState);
  const { pagesCount, results } = useRecoilValue(planetsDataQuery);

  const pagination = {
    currentPage,
    pagesCount,
    setCurrentPage,
  };

  return <PaginatedList resources={results} {...pagination} />;
};
