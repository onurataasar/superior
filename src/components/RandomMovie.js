import React from "react";
import { Tooltip } from "@mui/material";

function RandomMovie(props) {
  const prefix = "https://image.tmdb.org/t/p/w220_and_h330_face";

  return (
    <div>
      <p className="text-2xl mt-4 text-gray-500 text-center font-bold">
        Random Movie
      </p>
      <Tooltip title={props.overview} placement="left">
        <img
          className="rounded-xl mx-auto mt-4"
          src={prefix + props.random}
          alt="random"
        ></img>
      </Tooltip>
    </div>
  );
}

export default RandomMovie;
