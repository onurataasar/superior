import React from "react";
import { Tooltip } from "@mui/material";
import MovieDialog from "./MovieDialog";

function RandomMovie(props) {
  const prefix = "https://image.tmdb.org/t/p/w220_and_h330_face";

  return (
    <div>
      <p className="text-2xl mt-4 text-gray-500 text-center font-bold">
        Roll a Dice
      </p>

      <img
        className="rounded-xl mx-auto mt-4"
        src={prefix + props.random}
        alt="random"
      ></img>

      <MovieDialog
        overview={props.overview}
        title={props.title}
        year={props.year}
        vote={props.vote}
      />
    </div>
  );
}

export default RandomMovie;
