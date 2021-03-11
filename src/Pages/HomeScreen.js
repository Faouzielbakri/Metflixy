import React from "react";
import Nav from "./../Components/Nav";
import Banner from "./../Components/Banner";
import Row from "../Components/Row";
import requets from "./../Request";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* nav bar */}
      <Nav />
      {/* main banner */}
      <Banner />
      {/* rows */}
      <Row
        title={`NETFLIX ORIGINALS`}
        fetchUrl={requets.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={`Trending`} fetchUrl={requets.fetchTrending} />
      <Row title={`Top Rated`} fetchUrl={requets.fetchTopRated} />
      <Row title={`Action Movies`} fetchUrl={requets.fetchActionMovies} />
      <Row title={`Comedy Movies`} fetchUrl={requets.fetchComedyMovies} />
      <Row title={`Horror Movies`} fetchUrl={requets.fetchHorrorMovies} />
      <Row title={`Romance Movies`} fetchUrl={requets.fetchRomanceMovies} />
      <Row title={`Documentaries`} fetchUrl={requets.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
