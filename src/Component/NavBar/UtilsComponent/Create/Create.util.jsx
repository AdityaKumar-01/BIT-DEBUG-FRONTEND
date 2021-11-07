import { useState } from "react";
import CreateIssue from "./CreateIssue.util";
import CreateProject from "./CreateProject.util";

import "./Create.styles.css";
const Create = ({ defaultOption, handleClose }) => {
  const [createOption, setCreateOption] = useState(0);

  return (
    <div className="modal-container">
      <div className="form-holder">
        <span className="form-title">Create</span>
        <div className="form-selector">
          <span
            onClick={() => setCreateOption(0)}
            className={createOption === 0 ? "active-meta-option" : ""}
          >
            Project
          </span>
          <span
            onClick={() => setCreateOption(1)}
            className={createOption === 1 ? "active-meta-option" : ""}
          >
            Issue
          </span>
        </div>

        <div className="form-types-holder">
          {createOption === 0 ? (
            <CreateProject handleClose={handleClose} />
          ) : (
            <CreateIssue handleClose={handleClose} />
          )}
        </div>
       
      </div>
    </div>
  );
};

export default Create;
