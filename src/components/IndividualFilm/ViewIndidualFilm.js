import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ AllFilms }) => {
  const poster =
    AllFilms.image === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : AllFilms.image;
  return (
    <div className="AllFilms">
      <h2>{AllFilms.title}</h2>
      <div>
        <img
          width="200"
          // alt={`The AllFilms titled: ${AllFilms.title}`}
          src={poster}
        />
      </div>
      <p>({AllFilms.year})</p>
    </div>
  );
};

export default Movie;
