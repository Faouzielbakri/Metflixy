import React from "react";
// import { useParams } from "react-router";
import Nav from "../Components/Nav";
import "./MoviePage.css";
import { useState } from "react";
// import axios from "../axios";
// import { API_KEY } from "./../Request";
// import Banner from "../Components/Banner";
import { useSelector } from "react-redux";
import { selectMovie } from "./../features/movieSlice";
import { Paper } from "@material-ui/core";

function MoviePage({ kind = "movie" }) {
  // const { movieuid } = useParams();
  const reduxmovie = useSelector(selectMovie);
  // eslint-disable-next-line
  const [movie, setMovie] = useState(
    reduxmovie || JSON.parse(localStorage.getItem("state"))
  );
  // const fetchUrl = `https://api.themoviedb.org/3/${kind}/${movieuid}?api_key=${API_KEY}`;
  const baseurl = "https://image.tmdb.org/t/p/original";

  window.onbeforeunload = function (event) {
    return localStorage.setItem("state", JSON.stringify(movie));
  };
  return (
    <div className="Moviepage">
      {}
      <Nav />
      <div
        className="Moviepage__mobilebackgound"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${baseurl + movie?.poster_path})`,
          backgroundPosition: "center ",
          backgroundSize: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <div
        className="Moviepage__desktopbackground"
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${baseurl + movie?.backdrop_path})`,
          backgroundPosition: "center ",
          backgroundSize: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <div className="Moviepage__content">
        <h1 className="Moviepage__title">
          {`${movie?.title || movie?.name || movie?.original_name} `}
        </h1>
        <div className="Moviepage_description">
          <Paper
            elevation={0}
            style={{
              padding: "15px 20px",
              backgroundColor: " rgba(0, 0, 0, 0.9)",
              color: "rgba(150, 150, 150,1)",
              alignItems: "center",
            }}
          >
            {" "}
            <span className="Moviepage__description__Title">Overview</span>{" "}
            <br />
            {movie.overview}
          </Paper>
          <div className="Moviepage__quickinfo">
            <span>{movie.vote_average}⭐</span>
            <span>
              Release date:
              <br />
              {movie.first_air_date || movie.release_date}
            </span>
            <span>
              Language :<br />
              {movie.original_language || movie.origin_country[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
