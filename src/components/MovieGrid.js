import React from "react";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";
import { Tooltip } from "@mui/material";

const MovieGrid = (props) => {
  const prefix = "https://image.tmdb.org/t/p/w220_and_h330_face";

  return (
    <div className="overflow-auto whitespace-nowrap h-full ">
      <div className="inline-block">
        <Stack
          sx={{ flexGrow: 1, marginTop: "18px" }}
          justifyContent="center"
          container="true"
          spacing={4}
          direction="row"
        >
          {props.overview.map((overview, ind) => (
            <Tooltip title={overview} placement="bottom-end">
              <img
                style={{ width: 220, height: 330 }}
                src={prefix + props.movie[ind]}
                alt="movie1"
              ></img>
            </Tooltip>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default MovieGrid;
