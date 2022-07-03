import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import { Card } from "@mui/material";

const StyledPaper = styled("div")({
  height: 330,
  width: 220,
  backgroundColor: "#FFF",
});
const MovieGrid = (props) => {
  const prefix = "https://image.tmdb.org/t/p/w220_and_h330_face";

  console.log(prefix);

  return (
    <Stack
      sx={{ flexGrow: 1, marginTop: "18px" }}
      justifyContent="center"
      container="true"
      spacing={4}
      direction="row"
    >
      <StyledPaper>
        <img src={prefix + props.movie1} alt="movie1"></img>
      </StyledPaper>

      <StyledPaper>
        <img src={prefix + props.movie2} alt="movie2"></img>
      </StyledPaper>
      <StyledPaper>
        {console.log("log: " + props.movie3)}
        <img src={prefix + props.movie3} alt="movie3"></img>
      </StyledPaper>
      <StyledPaper>
        {" "}
        <img src={prefix + props.movie4} alt="movie4"></img>
      </StyledPaper>
      <StyledPaper>
        {" "}
        <img src={prefix + props.movie5} alt="movie5"></img>
      </StyledPaper>
    </Stack>
  );
};

export default MovieGrid;
