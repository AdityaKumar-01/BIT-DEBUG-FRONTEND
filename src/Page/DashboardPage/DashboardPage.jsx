import React from "react";

import "./DashboardPage.css";

import NavBar from "./../../Component/NavBar/NavBar.component";
import ProjectCard from "./../../Component/ProjectCard/ProjectCard.component";

const DashboardPage = () => {
  const prj = [
    {
      title: "bug",
      type: "Software development",
      issues: 2,
      boards: ["front-end", "back-end"],
    },
    {
      title: "myntra clone",
      type: "Software development",
      issues: 12,
      boards: ["front-end", "back-end"],
    },
    {
      title: "myntra clone",
      type: "Software development",
      issues: 2,
      boards: ["front-end", "back-end"],
    },
  ];
  return (
    <div className="dashboard-container">
      <NavBar />
      <div className="dashboard-content">
        <div className="dashboard-title ">Your Work</div>
        <div className="dashboard-recent-projects">
          <div className="util-title">Recent projects</div>
          <div className="recent-projects-container">
            {prj.map((obj) => {
              return (
                <ProjectCard
                  title={obj.title}
                  type={obj.type}
                  issues={obj.issues}
                  boards={obj.boards}
                />
              );
            })}
          </div>
        </div>
        <div className="dashboard-meta">
          <div>
            <span>Worked on</span>
            <span>Assigned to me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
