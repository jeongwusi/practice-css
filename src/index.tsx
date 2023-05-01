import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import PostCssApp from "./PostCSS/PostCssApp";
// import StyledComponentsApp from "./StyledComponents/StyledComponentsApp";
import TailwindCssApp from "./TailwindCSS/TailwindCssApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TailwindCssApp />
  </React.StrictMode>
);
