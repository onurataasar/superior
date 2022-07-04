import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";
import { Tooltip } from "@mui/material";

const StyledPaper = styled("div")({
  /*   height: 330,
  width: 220, */
});
const MovieGrid = (props) => {
  const prefix = "https://image.tmdb.org/t/p/w220_and_h330_face";

  return (
    <div className="overflow-x-scroll">
      <Stack
        sx={{ flexGrow: 1, marginTop: "18px" }}
        justifyContent="center"
        container="true"
        spacing={4}
        direction="row"
      >
        <Tooltip title={props.overview1} placement="bottom-end">
          <StyledPaper>
            <img src={prefix + props.movie1} alt="movie1"></img>
          </StyledPaper>
        </Tooltip>

        <Tooltip title={props.overview2} placement="top-end">
          <StyledPaper>
            <img src={prefix + props.movie2} alt="movie2"></img>
          </StyledPaper>
        </Tooltip>

        <Tooltip title={props.overview3} placement="top-end">
          <StyledPaper>
            <img src={prefix + props.movie3} alt="movie3"></img>
          </StyledPaper>
        </Tooltip>

        <Tooltip title={props.overview4} placement="top-end">
          <StyledPaper>
            <img src={prefix + props.movie4} alt="movie4"></img>
          </StyledPaper>
        </Tooltip>
        <Tooltip title={props.overview5} placement="top-end">
          <StyledPaper>
            <img src={prefix + props.movie5} alt="movie5"></img>
          </StyledPaper>
        </Tooltip>
      </Stack>
    </div>
  );
};

export default MovieGrid;
