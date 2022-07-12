import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@emotion/react";
import { useState } from "react";

const MovieDialog = (props) => {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={false}
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.overview}</DialogContentText>
          <DialogContentText>
            <div className="float-right mt-2">
              <span className="font-bold">Release Date:</span> {props.year}{" "}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDialogClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        className="w-56"
        color="info"
        onClick={handleDialogOpen}
        variant="contained"
      >
        Show Details
      </Button>
    </div>
  );
};

export default MovieDialog;
