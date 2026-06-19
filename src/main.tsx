import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ProjectsPage from "./ProjectsPage";
import "./styles.css";

const Page = window.location.pathname === "/projetos-sociais" ? ProjectsPage : App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
