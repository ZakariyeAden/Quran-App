import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// Moment Library to fix the Date
import moment from "moment";

const Plan = () => {
  // HOOKS
  const plans = useSelector(state => state.plan);
  const dispatch = useDispatch();

  // Delete and Update by Id
  const handleById = id => {
    console.log("Id Table row from:", id);
    
    dispatch({ type: "DELETE_PLAN", payload: id });
    // dispatch({ type: "UPDATE_PLAN", payload: id });
  };

  // Load Plan
  useEffect(() => {
    dispatch({ type: "FETCH_PLAN" });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Chapter</TableCell>
            <TableCell align="right">Date:</TableCell>
            <TableCell align="right">Deadline:</TableCell>
            <TableCell align="right">Completed:</TableCell>
            <TableCell align="right">Edit:</TableCell>
            <TableCell align="right">Remove:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plans.map(row => {
            // Formatting the date with moment library without Time from Database
            // let currentDate = moment(row.current_date);
            // let deadline = moment(row.deadline);
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.current_date}</TableCell>
                <TableCell align="right">{row.deadline}</TableCell>
                <TableCell align="right">
                  <button onClick={() => handleById(row)}>Completed?</button>
                </TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">
                  <button onClick={() => handleById(row.id)}>Delete</button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Plan;
