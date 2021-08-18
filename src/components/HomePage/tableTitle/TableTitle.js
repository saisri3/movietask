import React from "react";
import "./TableTitle.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const TableTitle = (props) => {
  return (
    <div className="header">
      <p className="image_header">IMAGE</p>
      <p className="title_">TITLE</p>
      <p className="title_">YEAR</p>
      <p className="title_">RATING</p>
      <div>
        <button className="durat" onClick={() => props.SortBasedDuration()}>
          DURATION
        </button>
        <div className="arrows">
          {props.order === "ascending" ? (
            <AiOutlineArrowDown size="2x" />
          ) : (
            <AiOutlineArrowUp />
          )}
        </div>
      </div>
      {/* <p className="ACTIONS">ACTIONS</p> */}
    </div>
  );
};
export default TableTitle;
