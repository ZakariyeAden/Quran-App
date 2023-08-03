import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Plan = () => {
  // HOOKS
  const plans = useSelector(state => state.plan);
  const dispatch = useDispatch();

  // Load Plan
  useEffect(() => {
    dispatch({ type: "FETCH_PLAN" });
  }, []);
  return <div>Plan in Progress...</div>;
};

export default Plan;
