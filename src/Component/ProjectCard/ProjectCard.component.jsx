import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";
import BugReportIcon from "@mui/icons-material/BugReport";

import Avatar from "react-avatar";

import "./ProjectCard.styles.css";
const ProjectCard = ({ title, type, issues, boards }) => {
  return (
    <div className="project-card-container">
      <Avatar
        name={title.split(" ").slice(0, 2).join(" ")}
        size="30"
        className="card-avatar"
        round={true}
        style={{ fontSize: "20px", padding: "10px" }}
      />
      <div className="project-card-detail">
        <span className="card-title">
          <p>{title}</p>
          <p>{type}</p>
        </span>
        <span
          className="util-title"
          style={{ fontSize: "13px", margin: "10px 0", color: "black" }}
        >
          Quick Links
        </span>
        <span className="card-issues-tab">
          <span className="issues-chips">
            <BugReportIcon />
            <span>Open issues</span>
          </span>
          <p>{issues}</p>
        </span>
        <span className="card-issues-tab">
          <span className="issues-chips">
            <FileDownloadDoneIcon />
            <span>Resolved issues</span>
          </span>

          <p>{issues}</p>
        </span>

        {/* <hr style={{ width: "100%", margin: "10px 0", backgroundColor: "black",outline:"none" }} /> */}
        <span className="issues-chips">
          <span>{boards.length} boards</span>
          <ArrowDropDownIcon sx={{ fontSize: "10px" }} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
