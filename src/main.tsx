import React from "react";
import ReactDOM from "react-dom/client";

import "@/styles/tokens.css";
import "@/styles/global.css";

import Page from "@/app/Page";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
