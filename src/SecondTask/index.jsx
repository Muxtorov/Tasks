import * as React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [status, setStatus] = React.useState(true);

  const setToggle = () => {
    console.log("sasasa");
    setStatus(!status);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>
          Status:{" "}
          {status ? (
            <Box sx={{ display: "inline", color: "green" }}>Online</Box>
          ) : (
            <Box sx={{ display: "inline", color: "red" }}>Offline</Box>
          )}
        </Typography>
        <Button onClick={setToggle}>Toggle</Button>
      </Box>
    </>
  );
};
