import React from "react";
import spinner from "./spinner.gif";

export const Spinner = () => (
  <>
    <img
      src={spinner}
      style={{ width: "75px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </>
);
