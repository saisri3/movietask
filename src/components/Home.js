import React from "react";
import AllFilms from "./HomePage/AllFilms";
import Search from "./HomePage/Search/Search";
import TableTitle from "./HomePage/tableTitle/TableTitle";
import AddForm from "./AddNewMovie/AddForm";
import data from "./MOCK_DATA";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleOnClick = (film) => history.push("/films", { film: film });
  let [movieList, setMovieList] = useState(data);
  // let [searchterm, set_searchterm] = useState("")

  const sorter = (obj1, obj2) => {
    return obj1.duration < obj2.duration
      ? -1
      : obj1.duration > obj2.duration
      ? 1
      : 0;
  };

  const addNewMovie = (new_movie) => {
    setMovieList([...movieList, new_movie]);
  };

  const [order, setorder] = useState("");
  const SortBasedDuration = () => {
    //if order ==== '' sort it in ascending order setOrder
    //else if order ==== 'ascending' sort it in 'descending' order and change the order using setOrder.
    //else sort it in ascending order and setOrder
    if (order === "") {
      setMovieList(movieList.sort(sorter));
      setorder("ascending");
    } else if (order === "ascending") {
      setMovieList(
        movieList
          .sort((obj1, obj2) => {
            return obj1.duration < obj2.duration
              ? -1
              : obj1.duration > obj2.duration
              ? 1
              : 0;
          })
          .reverse()
      );
      setorder("descending");
    } else {
      setMovieList(movieList.sort(sorter));
      setorder("ascending");
    }
  };

  useEffect(() => {
    SortBasedDuration();
  }, [movieList]);

  const SearchFunction = (searchterm) => {
    const FilteredFilms = movieList.filter((movieList) => {
      // console.log(movieList.title)
      return movieList.title.toLowerCase().includes(searchterm.toLowerCase());
    });
    setMovieList(FilteredFilms);
  };
  return (
    <div>
      <TableTitle SortBasedDuration={SortBasedDuration} />
      <Search SearchFunction={SearchFunction} />
      <AddForm addNewMovie={addNewMovie} />
      <AllFilms movieList={movieList} handleOnClick={handleOnClick} />
    </div>
  );
}

export default Home;
