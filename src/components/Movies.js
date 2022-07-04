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
  const [best, setBest] = useState([]);
  const [trendOverview, setTrendOverview] = useState([]);
  const [bestOverview, setBestOverview] = useState([]);
  const [random, setRandom] = useState(12);

  function getRandom() {
    setRandom(Math.floor(Math.random() * 20));
    console.log(random);
  }

  useEffect(() => {
    var posterTrend = [];
    var infoTrend = [];
    var posterBest = [];
    var infoBest = [];
    const optionsTrend = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=f70ce7435c3578276abcef7d2aec257f",
    };
    const optionsBest = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=f70ce7435c3578276abcef7d2aec257f",
    };
    axios
      .request(optionsTrend)
      .then(function (response) {
        for (var key of Object.keys(response.data.results)) {
          posterTrend.push(
            JSON.stringify(response.data.results[key].poster_path).replace(
              /["]+/g,
              ""
            )
          );
          infoTrend.push(JSON.stringify(response.data.results[key].overview));
          setTrend(posterTrend);
          setTrendOverview(infoTrend);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    axios
      .request(optionsBest)
      .then(function (response) {
        for (var key of Object.keys(response.data.results)) {
          posterBest.push(
            JSON.stringify(response.data.results[key].poster_path).replace(
              /["]+/g,
              ""
            )
          );
          infoBest.push(JSON.stringify(response.data.results[key].overview));
          setBest(posterBest);
          setBestOverview(infoBest);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [trend, best]);

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

      <div className="mt-8">
        <h1 className="text-4xl text-center text-gray-500 align-middle font-bold">
          Top Rated Movies
        </h1>

        <MovieGrid
          movie1={best[0]}
          movie2={best[1]}
          movie3={best[2]}
          movie4={best[3]}
          movie5={best[4]}
          overview1={bestOverview[0]}
          overview2={bestOverview[1]}
          overview3={bestOverview[2]}
          overview4={bestOverview[3]}
          overview5={bestOverview[4]}
        />
      </div>
      <RandomMovie random={best[random]} overview={trendOverview[random]} />

      <IconButton onClick={getRandom}>
        <Casino fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Movies;
