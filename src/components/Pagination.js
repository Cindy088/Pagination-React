import React, { useState, useEffect } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
  updateActivePage,
}) => {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      arr.push(i);
    }
    setPageNumbers(arr);
  }, [totalPosts, postsPerPage]); //must pass in props and states, otherwise the initial render can be empty

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.length > 0 &&
          pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                style={{
                  backgroundColor: currentPage === number ? "lightblue" : null,
                }}
                // onClick={() => setCurrentPage(number)}
                onClick={() => updateActivePage(number)}
                className="page-btn"
              >
                {number}
              </button>
            </li>
            //button use arrow function, otherwise it will be called many times
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
