import React from "react";
// MUI and Assets
import { Grid } from "@mui/material";
import LinkedInCode from "../Assets/LinkedInBarcode.jpeg";
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container about-container">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} lg={6}>
          <div className="img-box">
            <img
              src={LinkedInCode}
              alt="Linkedin Barcode"
              className="linkedin-img"
            />
            <span className="linkedin">LinkedIn</span>
          </div>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <h1 className="about-heading">About</h1>
          {/* Technologies */}
          <h3>Technologies used:</h3>
          <ul>
            <li>CSS</li>
            <li>Material Ui</li>
            <li>Sweet Alerts</li>
            <li>React</li>
            <li>Redux Sagas</li>
            <li>Al Quran API (for Verses)</li>
            <li>Quran API (for Audio)</li>
            <li>ExpressJs</li>
            <li>PostgreSQL</li>
            <li>Postman</li>
            <li>Figma</li>
          </ul>
          {/* Challenges */}
          <h3>Challenges:</h3>
          <ul>
            <li>
              Despite having only two weeks to complete my solo project, I had
              numerous ideas to implement in my project
            </li>
          </ul>
          {/* Features */}
          <h3>What are your coming features?</h3>
          <ul>
            <li>
              Have Verses be highlighed while the audio is playing along! Making
              it easier for user to follow along with the Quran.
            </li>
            <li>Better User Interaction</li>
            <li>English translation for each chapter</li>
          </ul>

          {/* Thank You! */}
          <h3>Thank You</h3>
          <p>
            I wanna give thanks to Prime Digital Academy for teaching us tools
            to build these exceptional projects! A big thank you goes out to my
            cohort as well, for their support,compassion, and collaborative
            spirit in bringing group projects!Lastly,thanks to my
            family, friends, and the previous cohort for their continuous
            support throughout my journey.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutPage;
