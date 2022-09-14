import Icon from "../Icon";
import React, { useEffect, useState } from "react";
import "./pagination.scss";
const Pagination = ({
  totalTitle = "Total: ",
  total = 0,
  showTotal = false,
  initPage = 0,
  showPageSize = false,
  pageSizeTitle = "page",
  showGotoPage = false,
  gotoPageTitle = "Go to",
  onChange,
  style={}
}) => {
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(initPage);
  const [amountPage, setAmountPage] = useState(
    Math.ceil(total / currentPageSize)
  );
  useEffect(() => {
    /**
     * When total or currentPageSize change, set current page = 0 and update amount page
     */
    setCurrentPage(0);
    setAmountPage(Math.ceil(total / currentPageSize));
  }, [total, currentPageSize]);
  useEffect(() => {
    /**
     * When currentPage and currentPageSize chage, call parent function to action.
     * onChange: return page (from 0), pageSize (10/25/50/100)
     */
    if (typeof onChange !== "undefined") {
      onChange(currentPage, currentPageSize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, currentPageSize]);
  const singlePageElement = (page) => {
    /**
     * Function use to render page <li> element, if this page is active, it will be color
     * @param  {} page (int, from 0)
     * Author: Cong Sy Nguyen
     * Created date: 2022/09/12
     */
    return (
      <li
        key={page}
        class={`page-item ${page === currentPage ? "active" : ""}`}
        onClick={() => setCurrentPage(page)}
      >
        <span class="page-link">{page + 1}</span>
      </li>
    );
  };
  const pageSizeElement = (
    // Select element to choose page size
    <li>
      <select
        class="form-select"
        aria-label="multiple select example"
        style={{ marginLeft: "20px", cursor: "pointer" }}
        defaultValue={10}
        onChange={(event) => {
          setCurrentPageSize(parseInt(event.target.value));
        }}
      >
        <option key={10} value={10}>
          {`10 / ${pageSizeTitle}`}
        </option>
        <option key={25} value={25}>{`25 / ${pageSizeTitle}`}</option>
        <option key={50} value={50}>{`50 / ${pageSizeTitle}`}</option>
        <option key={100} value={100}>{`100 / ${pageSizeTitle}`}</option>
      </select>
    </li>
  );
  const ellipsisElement = (
    // icon ellipsis element
    <li style={{ margin: "0px 8px", paddingTop: "16px" }}>
      <Icon
        name="pagination-dotdotdot.svg"
        color="#666666"
        width="20px"
        height="20px"
      ></Icon>
    </li>
  );

  const gotoPage = (page) => {
    /**
     * Function use to render page <li> element, if this page is active, it will be color
     * @param  {} page (int, from 0)
     * Author: Cong Sy Nguyen
     * Created date: 2022/09/12
     */
    return (
      <li className="li-total" style={{ marginLeft: "28px" }}>
        <span style={{ marginRight: "8px" }}>{gotoPageTitle}</span>
        <input
          type="number"
          data-bind="value:replyNumber"
          min="1"
          max={amountPage}
          className="input-goto"
          onKeyDown={(event) => {
            if (event.which === 13) {
              const inputValue = parseInt(event.target.value);
              setCurrentPage(inputValue - 1);
              if (inputValue > amountPage) {
                setCurrentPage(amountPage - 1);
              }
              event.target.value = "";
            }
          }}
        ></input>
      </li>
    );
  };
  const handlePages = () => {
    /**
     * Function use to handle case of amount page
     * Author: Cong Sy Nguyen
     * Created date: 2022/09/12
     */
    if (amountPage <= 6) {
      return (
        <>
          {Array.from(Array(amountPage).keys()).map((page) => {
            return singlePageElement(page);
          })}
        </>
      );
    } else {
      if (currentPage === 0 || currentPage === 1 || currentPage === 2) {
        return (
          <>
            {Array.from(Array(4).keys()).map((page) => {
              return singlePageElement(page);
            })}
            {ellipsisElement}
            {singlePageElement(amountPage - 1, amountPage - 1)}
          </>
        );
      } else if (
        currentPage === amountPage - 1 ||
        currentPage === amountPage - 2 ||
        currentPage === amountPage - 3
      ) {
        return (
          <>
            {singlePageElement(0)}
            {ellipsisElement}
            {singlePageElement(amountPage - 4)}
            {singlePageElement(amountPage - 3)}
            {singlePageElement(amountPage - 2)}
            {singlePageElement(amountPage - 1)}
          </>
        );
      } else {
        return (
          <>
            {singlePageElement(0)}
            {ellipsisElement}
            {singlePageElement(currentPage - 1)}
            {singlePageElement(currentPage)}
            {singlePageElement(currentPage + 1)}
            {ellipsisElement}
            {singlePageElement(amountPage - 1)}
          </>
        );
      }
    }
  };
  return (
    <div style={style}>
      <ul class="pagination">
        {!showTotal ? null : (
          <li className="li-total">
            <span style={{ marginRight: "8px" }}>{totalTitle}</span>
            <span>{total}</span>
          </li>
        )}

        <li class={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
          <div
            class="page-link"
            aria-label="Previous"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </div>
        </li>
        {handlePages()}
        <li
          class={`page-item ${
            currentPage === amountPage - 1 ? "disabled" : ""
          }`}
        >
          <div
            class="page-link"
            aria-label="Next"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </div>
        </li>
        {!showPageSize ? null : pageSizeElement}
        {!showGotoPage ? null : gotoPage()}
      </ul>
    </div>
  );
};

export default Pagination;
