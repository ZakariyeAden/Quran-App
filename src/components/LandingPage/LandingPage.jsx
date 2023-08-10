import React from "react";
// MUI and Assets
import { Grid } from "@mui/material";
import "./LandingPage.css";
import BackgroundVideo from "../Assets/LoginHeroVideo.mov";
// CUSTOM COMPONENTS
import Form from "../RegisterForm/Form";
function LandingPage() {
  return (
    <div className="background-video">
      {/* Background Video */}
      <video autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <Grid container={2}>
        <Grid item xs={8} md={8} lg={8} className="grid-helper-">
          <h2>Welcome to Al Quran </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra lacus
            ut ex molestie blandit. Etiam et turpis sit amet risus mollis
            interdum. Suspendisse et justo vitae metus bibendum fringilla sed
            sed justo. Aliquam sollicitudin dapibus lectus, vitae consequat odio
            elementum eget. Praesent efficitur eros vitae nunc interdum, eu
            interdum justo facilisis. Sed pulvinar nulla ac dignissim efficitur.
            Quisque eget eros metus. Vestibulum bibendum fringilla nibh a
            luctus. Duis a sapien metus.
          </p>
        </Grid>

        <Grid item xs={8} md={8} lg={8}>
          <div className="grid-helper">
            <Form />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
