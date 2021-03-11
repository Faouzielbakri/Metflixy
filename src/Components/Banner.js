import axios from "../axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Banner.css";
import requets from "../Request";
import ReactTypingEffect from "react-typing-effect";
import { Paper } from "@material-ui/core";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requets.fetchNetflixOriginals);
      setMovie(
        request.data?.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    let newstring = string
      ? string?.length > n
        ? string.substr(0, n - 1) + "..."
        : string
      : "s ";

    return newstring[newstring.length - 1] === " "
      ? newstring
      : newstring.substr(0, newstring.lastIndexOf(" "));
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__butoons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner_description">
          <Paper
            elevation={0}
            style={{ backgroundColor: "transparent", color: "snow" }}
          >
            <ReactTypingEffect
              text={truncate(movie?.overview, 150)}
              speed={50}
              typingDelay={500}
              eraseDelay={500000}
            />
          </Paper>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
