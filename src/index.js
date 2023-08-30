import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "styles/global.scss";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
