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
        key={`originals`}
        title={`NETFLIX ORIGINALS`}
        fetchUrl={requets.fetchNetflixOriginals}
        moviekind="tv"
        isLargeRow
      />
      <Row
        key={`Trending`}
        title={`Trending`}
        fetchUrl={requets.fetchTrending}
      />
      <Row
        key={`Toprated`}
        title={`Top Rated`}
        fetchUrl={requets.fetchTopRated}
      />
      <Row
        key={`Action`}
        title={`Action Movies`}
        fetchUrl={requets.fetchActionMovies}
      />
      <Row
        key={`Comedy`}
        title={`Comedy Movies`}
        fetchUrl={requets.fetchComedyMovies}
      />
      <Row
        key={`Horror`}
        title={`Horror Movies`}
        fetchUrl={requets.fetchHorrorMovies}
      />
      <Row
        key={`Romance`}
        title={`Romance Movies`}
        fetchUrl={requets.fetchRomanceMovies}
      />
      <Row
        key={`Documentaries`}
        title={`Documentaries`}
        fetchUrl={requets.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
