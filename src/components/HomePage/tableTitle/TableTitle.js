import React from "react";
import "./TableTitle.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const TableTitle = (props) => {
  return (
    <div>
      <container className="header">
        <p className="image_header">IMAGE</p>
        <p className="title_">TITLE</p>
        <p className="title_">YEAR</p>
        <p className="title_">RATING</p>
        <div>
          <p className="durat" onClick={() => props.SortBasedDuration()}>
            DURATION
          </p>
          <div className="arrows">
            {props.order === "ascending" ? (
              <AiOutlineArrowDown size="2x" />
            ) : (
              <AiOutlineArrowUp />
            )}
          </div>
        </div>
        {/* <p className="ACTIONS">ACTIONS</p> */}
      </container>
    </div>
  );
};
export default TableTitle;
