import FilmDetails from "../Table/FilmDetails";

export default function AllFilms(props) {
  // console.log(props);
  return (
    <div className="films">
      {props.movieList.map((film, index) => {
        return (
          <FilmDetails
            key={index}
            film={film}
            handleOnClick={props.handleOnClick}
          />
        );
      })}
    </div>
  );
}
