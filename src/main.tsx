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

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const normalized = path.replace(/^\/projetos-sociais(?=\/)/, "");
const Page = pages[normalized] ?? pages[path] ?? App;

if (window.location.hash) {
  const id = decodeURIComponent(window.location.hash.slice(1));
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
