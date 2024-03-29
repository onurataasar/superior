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
  const [trendTitle, setTrendTitle] = useState([]);
  const [trendYear, setTrendYear] = useState([]);
  const [trendVote, setTrendVote] = useState([]);
  const [bestOverview, setBestOverview] = useState([]);
  const [bestTitle, setBestTitle] = useState([]);
  const [bestYear, setBestYear] = useState([]);
  const [bestVote, setBestVote] = useState([]);
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
          setTrendTitle((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].title).replace(
              /["]+/g,
              ""
            ),
          ]);
          setTrendVote((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].vote_average).replace(
              /["]+/g,
              ""
            ),
          ]);
          setTrendYear((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].release_date)
              .replace(/["]+/g, "")
              .slice(0, 4),
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
          setBestTitle((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].title).replace(
              /["]+/g,
              ""
            ),
          ]);
          setBestVote((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].vote_average).replace(
              /["]+/g,
              ""
            ),
          ]);
          setBestYear((prev) => [
            ...prev,
            JSON.stringify(response.data.results[key].release_date)
              .replace(/["]+/g, "")
              .slice(0, 4),
          ]);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={"text-center mt-6 overflow-x-scroll"}>
      <h1 className="text-7xl font-bold text-slate-700">MOVIE TIME</h1>
      <RandomMovie
        random={best[random]}
        overview={bestOverview[random]}
        title={bestTitle[random]}
        year={bestYear[random]}
        vote={bestVote[random]}
      />
      <IconButton onClick={getRandom}>
        <Casino fontSize="large" />
      </IconButton>
      <h1 className="text-4xl text-center text-gray-500 align-middle font-bold mt-8">
        Trending Movies
      </h1>
      <MovieGrid
        movie={trend}
        overview={trendOverview}
        title={trendTitle}
        year={trendYear}
        vote={trendVote}
      />
      <div className="mt-8">
        <h1 className="text-4xl text-center text-gray-500 align-middle font-bold">
          Top Rated Movies
        </h1>

        <MovieGrid
          movie={best}
          overview={bestOverview}
          title={bestTitle}
          year={bestYear}
          vote={bestVote}
        />
      </div>
    </div>
  );
};

export default Movies;
