import React from "react";
import PageWrapper from "../components/PageWrapper";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <PageWrapper>
      <h1>Projects</h1>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          padding: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <ProjectCard
          title="3D Portfolio"
          desc="An immersive portfolio built with React Three Fiber."
        />
        <ProjectCard
          title="E-commerce Store"
          desc="A MERN stack store with real-time cart."
        />
        <ProjectCard
          title="Blog Platform"
          desc="Blogging engine with markdown support."
        />
      </div>
    </PageWrapper>
  );
}
