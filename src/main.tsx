import { createRoot } from "react-dom/client";
import App from "./main/App.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
