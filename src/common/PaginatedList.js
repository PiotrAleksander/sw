import React from "react";
import List from "./List";

const Pagination = ({ currentPage, pagesCount, setCurrentPage }) => {
  const onFirstClick = () => {
    setCurrentPage(1);
  };

  const onPreviousClick = () => {
    setCurrentPage((page) => page - 1);
  };
  const onNextClick = () => {
    setCurrentPage((page) => page + 1);
  };

  const onLastClick = () => {
    setCurrentPage(pagesCount);
  };

  return (
    <footer>
      <nav>
        <button
          disabled={currentPage < 2}
          className="paginated-list__nav-button"
          onClick={onFirstClick}
        >
          First
        </button>
        <button
          disabled={currentPage < 2}
          className="paginated-list__nav-button"
          onClick={onPreviousClick}
        >
          Previous
        </button>
        <button
          disabled={currentPage === pagesCount}
          className="paginated-list__nav-button"
          onClick={onNextClick}
        >
          Next
        </button>
        <button
          disabled={currentPage === pagesCount}
          className="paginated-list__nav-button"
          onClick={onLastClick}
        >
          Last
        </button>
      </nav>
    </footer>
  );
};

export default ({ resources, ...pagination }) => (
  <section>
    <List resources={resources} />
    <Pagination {...pagination} />
  </section>
);
