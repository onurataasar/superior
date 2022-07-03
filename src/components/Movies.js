import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";

const Movies = () => {
  var [trend, setTrend] = useState([]);

  useEffect(() => {
    var poster = [];
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
          setTrend(poster);
        }

        console.log("poster " + JSON.stringify(trend[2]));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [trend]);

  return (
    <div className={"text-center mt-6"}>
      <h1 className="text-4xl text-center text-gray-500 align-middle font-bold">
        Trending Movies
      </h1>
      <MovieGrid
        movie1={trend[0]}
        movie2={trend[1]}
        movie3={trend[2]}
        movie4={trend[3]}
        movie5={trend[4]}
      />
      {
        <p className="text-xl mt-4 text-gray-500 text-center font-bold">
          Shows
        </p>
      }
    </div>
  );
};

export default Movies;
