import React from "react";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";

import { useState } from "react";
import MovieDialog from "./MovieDialog";

const MovieGrid = (props) => {
  const prefix = "https://image.tmdb.org/t/p/w220_and_h330_face";

  return (
    <div className="overflow-auto whitespace-nowrap mx-auto h-full ">
      <div className="inline-block">
        <Stack
          sx={{ flexGrow: 1, marginTop: "20px" }}
          justifyContent="center"
          container="true"
          spacing={5}
          direction="row"
        >
          {props.overview.map((overview, ind) => (
            <div>
              <img
                style={{ width: 228, height: 330 }}
                src={prefix + props.movie[ind]}
                alt="movie1"
              ></img>

              <MovieDialog
                overview={overview}
                title={props.title[ind]}
                year={props.year[ind]}
              />
            </div>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default MovieGrid;
