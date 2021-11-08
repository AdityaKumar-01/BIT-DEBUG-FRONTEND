import React from "react";

import NavBar from "./../../Component/NavBar/NavBar.component";
import ProjectRow from "./../../Component/ProjectRow/ProjectRow.component";

import FilterProject from "./UtilComponent/FilterProject/FilterProject.util";
import SearchProject from "./UtilComponent/SearchProject/SearchProject.util";

import "./ProjectPage.css";
const ProjectPage = () => {
  const proj = [
    {
      title: "coding bots- 201",
      code: "CB201",
      creator: "Aditya",
      type: "Software development",
    },
    {
      title: "coding bots- 201",
      code: "CB201",
      creator: "Aditya",
      type: "Software development",
    },
    {
      title: "coding bots- 201",
      code: "CB201",
      creator: "Aditya",
      type: "Software development",
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="project-page-content">
        <div style={{ fontSize: "25px", marginBottom: "20px" }}>Projects</div>
        <div className="formatter-container">
          <SearchProject />
          <FilterProject />
        </div>
        <table className="project-table">
          <tr>
            <th>Title</th>
            <th>Code</th>
            <th>Type</th>
            <th>Lead</th>
            <th>Action</th>
          </tr>

          {proj.map((obj) => {
            return (
              <ProjectRow
                title={obj.title}
                code={obj.code}
                creator={obj.creator}
                type={obj.type}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ProjectPage;
