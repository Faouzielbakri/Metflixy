import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
// import requets from "./../Request";
import { Grid, Typography, Container } from "@material-ui/core";
import { API_KEY } from "./../Request";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { MainingMovie } from "../features/movieSlice";
function Row({ title, fetchUrl, moviekind = "movie", isLargeRow = false }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      // fetch(fetchUrl)
      //   .then((request) => console.log(request.body))
      //   .then((data) => setMovies(data));
      const request = await axios.get(fetchUrl);
      setMovies(request.data?.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies)

  async function sendToStore(kind, movieuid) {
    const movieurl = `https://api.themoviedb.org/3/${kind}/${movieuid}?api_key=${API_KEY}`;
    const request = await axios
      .get(movieurl)
      .then((request) => {
        dispatch(MainingMovie({ ...request.data }));
      })
      .then(() => {
        setTimeout(history.push(`/${kind}/${movieuid}`), 1000);
      });
  }
  return (
    <Container
      style={{ marginLeft: 0, marginRight: 0, minWidth: "100%", color: "snow" }}
      className="row"
    >
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      <Grid container spacing={2} justify="space-between">
        {movies.map((movie) => (
          <Grid
            item
            xs={6}
            sm={3}
            md={1}
            style={{ overflow: "hidden" }}
            className="row__movieitem"
          >
            {movie.id === 553301 ? console.log(movie) : console.log()}
            <img
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              onClick={() => {
                // console.log(movie);
                // dispatch(
                //   MainingMovie({
                //     ...movie,
                //   })
                // );
                sendToStore(moviekind, movie.id);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Row;
