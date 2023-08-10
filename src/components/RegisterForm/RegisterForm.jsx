import React from "react";
// Assets
import BackgroundVideo from "../Assets/LoginHeroVideo.mov";
// CUSTOM COMPONENTS
import Form from "./Form";
function RegisterForm() {
  return (
    <div className="background-video form-section">
      {/* Background Video */}
      <video autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <Form />
    </div>
  );
}

export default RegisterForm;
