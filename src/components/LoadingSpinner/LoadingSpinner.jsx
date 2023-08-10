import React, { useState, useEffect } from "react";
import { Backdrop, CircularProgress, useTheme } from "@mui/material";
// Loading Spinner
const LoadingSpinner = ({ delay }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default LoadingSpinner;
