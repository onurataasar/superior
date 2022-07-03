import React from "react";
import { Stack } from "@mui/material";

const HrLogo = () => {
  return (
    <div className="mt-12 justify-evenly">
      <Stack direction="row" spacing={1}>
        <hr className="w-full h-1 bg-red-200" />

        <img
          src="https://cdn-icons-png.flaticon.com/512/1048/1048896.png"
          alt="logo"
          width="15"
        ></img>
        <hr className="w-full h-1 bg-red-200" />
      </Stack>
    </div>
  );
};

export default HrLogo;
