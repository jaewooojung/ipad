import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ScrollPositionProvider, ScrollPositionAPIContext } from "./context/scrollPosition";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScrollPositionProvider>
      <App />
    </ScrollPositionProvider>
  </React.StrictMode>
);
