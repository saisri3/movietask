import React, { useEffect } from "react";
import "./ViewFilm.css";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const ViewFilm = (props) => {
  console.log("Filmname", props.location.state.film);
  const poster =
    props.location.state.film.image === "N/A"
      ? DEFAULT_PLACEHOLDER_IMAGE
      : props.location.state.film.image;
  useEffect(() => {
    document.title = "Film";
  });
  const style = {
    backgroundImage: "url(" + { poster } + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="wrap" style={style}>
      <div class="main_card">
        <div class="card_left">
          <div class="card_datails">
            <h1>{props.location.state.film.title}</h1>
            <div class="card_cat">
              <p class="PG">{props.location.state.film.rating}</p>
              <p class="year1">{props.location.state.film.year}</p>
              <p class="genre">{props.location.state.film.genre} </p>
              <p class="time">{props.location.state.film.duration}</p>
            </div>
            <p class="disc">{props.location.state.film.description}</p>
            <a href={props.location.state.film.url} target="_blank">
              Read More
            </a>
          </div>
          <div className="Boxoffice">
            <p>BoxOffice</p>
            <p>{props.location.state.film.boxoffice}</p>
          </div>
        </div>
        <div class="card_right">
          <div class="img_container">
            <img
              width="200"
              // alt={`The AllFilms titled: ${AllFilms.title}`}
              src={poster}
              src={process.env.PUBLIC_URL + "/images/" + poster}
            />
          </div>
          <div class="play_btn">
            <a href={props.location.state.film.url} target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewFilm;
