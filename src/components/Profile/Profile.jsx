import React from "react";
import { useSelector, useDispatch } from "react-redux";
// MUI and Assets
import {
  Avatar,
  Chip,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardOverflow,
  CardActions,
  IconButton,
  Typography,
  SvgIcon,
} from "@mui/joy";
import ProfileImg from "../Assets/Profile.jpg";

function Profile() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="user-heading profile-heading">Welcome, <span className="user">{user.username}!</span></h1>
      <div className="container profile-container">
        <Card
          sx={{
            width: 320,
            maxWidth: "100%",
            boxShadow: "lg",
          }}
        >
          <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
            <Avatar
              src={ProfileImg}
              sx={{ "--Avatar-size": "10rem", marginBottom: "1rem" }}
            />
            <Typography level="title-lg">{user.username}</Typography>
            <Typography
              level="body-sm"
              sx={{ maxWidth: "24ch", margin: "0.5rem 0" }}
            >
              Welcome, {user.username} to the noble Quran where you can read,
              study, memorize, and learn the Quran
            </Typography>
          </CardContent>
          <CardOverflow sx={{ bgcolor: "background.level1" }}>
            <CardActions buttonFlex="1">
              <ButtonGroup
                variant="outlined"
                sx={{ bgcolor: "background.surface" }}
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                <Button>Log out</Button>
              </ButtonGroup>
            </CardActions>
          </CardOverflow>
        </Card>
      </div>
    </>
  );
}

export default Profile;


