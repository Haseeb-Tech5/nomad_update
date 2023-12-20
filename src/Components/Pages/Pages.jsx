import React from "react";
import Video from "../Video/Video";
import Story from "../Story/Story";
import Nurse from "../Nurse/Nurse";
import Testimonials from "../Testimonials/Testimonials";

const Pages = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1440px" }}>
        <Video />
        <Story />
        <Nurse />
        <Testimonials />
      </div>
    </div>
  );
};

export default Pages;
