import { StrictMode, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ProjectDetailPage from "./ProjectDetailPage";
import ProjectsPage from "./ProjectsPage";
import TransparencyProjectsPage from "./TransparencyProjectsPage";
import "./styles.css";

const pages: Record<string, ComponentType> = {
  "/projetos-sociais": ProjectsPage,
  "/transparencia-dos-projetos": TransparencyProjectsPage,
  "/brilho-da-esmeralda": () => <ProjectDetailPage project="esmeralda" />,
  "/brilho-do-sol": () => <ProjectDetailPage project="sol" />,
};

const Page = pages[window.location.pathname] ?? App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
