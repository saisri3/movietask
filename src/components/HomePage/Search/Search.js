import { useState, useEffect } from "react";
import "./Search.css";

export default function Search(props) {
  // const SearchFunction = (event) => {

  //   searchterm=(event.target.value)
  //   return searchterm;

  // }

  // console.log(searchterm,"hii")

  return (
    <div className="search">
      <form>
        {/* <label htmlFor="header-search">
          <span className="visually-hidden">Search For LatestMovies</span>
        </label> */}
        <input
          type="text"
          id="header-search"
          placeholder="Search For LatestMovies..."
          onChange={(e) => props.SearchFunction(e.target.value)}
        />
      </form>
    </div>
  );
}
