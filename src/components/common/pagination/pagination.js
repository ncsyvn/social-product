import Icon from "../Icon";
import React, { useEffect, useState } from "react";

const pageSize = [10, 25, 50, 100];
const Pagination = ({ total = 0, initPage = 0 }) => {
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [amountPage, setAmountPage] = useState(
    Math.ceil(total / currentPageSize)
  );
  useEffect(() => {
    setAmountPage(Math.ceil(total / currentPageSize));
  }, [total, currentPageSize]);
  return (
    <div>
      <ul class="pagination">
        <li class="page-item">
          <div class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </div>
        </li>
        {amountPage <= 6
          ? null
          : currentPage === 1
          ? null
          : currentPage === 2
          ? null
          : currentPage === amountPage
          ? null
          : currentPage == amountPage - 1
          ? null
          : null}
        {Array.from(Array(amountPage).keys()).map((element, index) => {
          if (amountPage <= 6) {
            return (
              <li
                class={`page-item ${index === currentPage ? "active" : ""}`}
                onClick={() => setCurrentPage(index)}
                key={index}
              >
                <span class="page-link">{element + 1}</span>
              </li>
            );
          } else {
            return (
              <li
                class={`page-item ${index === currentPage ? "active" : ""}`}
                onClick={() => setCurrentPage(index)}
                key={index}
              >
                <span class="page-link">{element + 1}</span>
              </li>
            );
          }
        })}
        <li class="page-item">
          <div class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

{
  /* <li style={{ margin: "0px 8px", paddingTop: "16px" }}>
<Icon
  name="pagination-dotdotdot.svg"
  color="#666666"
  width="20px"
  height="20px"
></Icon>
</li> */
}
