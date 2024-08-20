import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Gallery from "./components/Gallery.jsx";
import VanApp from "./vans/pages/App.jsx"; //vans app

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <VanApp /> */}
    <Gallery />
  </React.StrictMode>
);
