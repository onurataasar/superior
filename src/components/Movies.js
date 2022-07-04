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
  }
  useEffect(() => {
    const axiosInstance = axios.create({
      method: "GET",
      baseURL: "https://api.themoviedb.org/3/",
    });

    axiosInstance
      .request("movie/popular?api_key=f70ce7435c3578276abcef7d2aec257f")
      .then(function (response) {
        for (let key of Object.keys(response.data.results)) {
          setTrend((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].poster_path).replace(
              /["]+/g,
              ""
            ),
          ]);
          setTrendOverview((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].overview),
          ]);
        }
      })
      .catch(function (error) {
        console.error(error);
      });

    axiosInstance
      .request("movie/top_rated?api_key=f70ce7435c3578276abcef7d2aec257f")
      .then(function (response) {
        for (let key of Object.keys(response.data.results)) {
          setBest((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].poster_path).replace(
              /["]+/g,
              ""
            ),
          ]);
          setBestOverview((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].overview),
          ]);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={"text-center mt-6 overflow-x-scroll"}>
      <h1 className="text-4xl text-center text-gray-500 align-middle font-bold">
        Trending Movies
      </h1>
      <MovieGrid movie={trend} overview={trendOverview} />
      <div className="mt-8">
        <h1 className="text-4xl text-center text-gray-500 align-middle font-bold">
          Top Rated Movies
        </h1>

        <MovieGrid movie={best} overview={bestOverview} />
      </div>
      <RandomMovie random={best[random]} overview={bestOverview[random]} />

      <IconButton onClick={getRandom}>
        <Casino fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Movies;
