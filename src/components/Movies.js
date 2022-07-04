import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";
import RandomMovie from "./RandomMovie";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Casino } from "@mui/icons-material";

const Movies = () => {
  const [trend, setTrend] = useState([]);
  const [trendOverview, setTrendOverview] = useState([]);
  const [random, setRandom] = useState(12);

  function getRandom() {
    setRandom(Math.floor(Math.random() * 20));
    console.log(random);
  }

  useEffect(() => {
    var poster = [];
    var info = [];
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=f70ce7435c3578276abcef7d2aec257f",
    };
    axios
      .request(options)
      .then(function (response) {
        for (var key of Object.keys(response.data.results)) {
          poster.push(
            JSON.stringify(response.data.results[key].poster_path).replace(
              /["]+/g,
              ""
            )
          );
          info.push(JSON.stringify(response.data.results[key].overview));
          setTrend(poster);
          setTrendOverview(info);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [trend]);

  return (
    <div className={"text-center mt-6 overflow-x-scroll"}>
      <h1 className="text-4xl text-center text-gray-500 align-middle font-bold">
        Trending Movies
      </h1>
      <MovieGrid
        movie1={trend[0]}
        movie2={trend[1]}
        movie3={trend[2]}
        movie4={trend[3]}
        movie5={trend[4]}
        overview1={trendOverview[0]}
        overview2={trendOverview[1]}
        overview3={trendOverview[2]}
        overview4={trendOverview[3]}
        overview5={trendOverview[4]}
      />
      <RandomMovie random={trend[random]} overview={trendOverview[random]} />

      <IconButton onClick={getRandom}>
        <Casino fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Movies;
