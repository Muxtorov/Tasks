import React from "react";
import FirstTask from "./FirstTask";
import SecondTask from "./SecondTask";
import ThirdTask from "./ThirdTask";
import { Routes, Route, Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function App() {
  return (
    <div>
      <Box>
        <Link to="/">
          <Button> FirstTask </Button>
        </Link>
        <Link to="/second">
          <Button>SecondTask</Button>
        </Link>
        <Link to="/third">
          {" "}
          <Button> ThirdTask </Button>
        </Link>
      </Box>
      <Routes>
        <Route path="/" element={<FirstTask />} />
        <Route path="second" element={<SecondTask />} />
        <Route path="third" element={<ThirdTask />} />
      </Routes>
    </div>
  );
}
