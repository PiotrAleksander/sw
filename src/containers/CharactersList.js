import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  charactersDataQuery,
  charactersCurrentPageState,
} from "../state/domain/Characters";
import PaginatedList from "../common/PaginatedList";

export default () => {
  const [currentPage, setCurrentPage] = useRecoilState(
    charactersCurrentPageState
  );
  const { pagesCount, results } = useRecoilValue(charactersDataQuery);

  const pagination = {
    currentPage,
    pagesCount,
    setCurrentPage,
  };

  return <PaginatedList resources={results} {...pagination} />;
};
