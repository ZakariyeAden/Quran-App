import {useState} from "react";
// Loading Spinner
const LoadingSpinner = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default LoadingSpinner;
