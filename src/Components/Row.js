import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import requets from "./../Request";
import {
  Grid,
  Typography,
  Paper,
  Container,
  IconButton,
} from "@material-ui/core";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data?.results);
      return requets;
    }
    fetchData();
  }, [fetchUrl]);
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
          <Grid item xs={6} sm={2} md={1}>
            <Paper
              key={movie.id}
              elevation={3}
              style={{
                objectFit: "cover",
                backgroundImage: `url(${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                })`,
                backgroundSize: "cover ",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                minHeight: `${isLargeRow ? 250 : 125}px`,
              }}
              className="row__paper"
              onClick={() => {
                console.log(`click on ${movie.name}`);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>

    // <div className="row">
    //   <h2>{title}</h2>
    //   <div className="row__posters">
    //     {movies.map(
    //       (movie) =>
    //         ((isLargeRow && movie.poster_path) ||
    //           (!isLargeRow && movie.backdrop_path)) && (
    //           <div className={`n ${isLargeRow && "nn"}`}>
    //             <img
    //               className={`row__poster ${isLargeRow && "row__posterLarge"}`}
    //               key={movie.id}
    //               src={`${base_url}${
    //                 isLargeRow ? movie.poster_path : movie.backdrop_path
    //               } `}
    //               alt={movie.name}
    //             />
    //             <h3>{movie?.title || movie?.name || movie?.original_name}</h3>
    //           </div>
    //         )
    //     )}
    //   </div>
    // </div>
  );
}

export default Row;
