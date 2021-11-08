import { useState } from "react";

import Avatar from "react-avatar";

import Popper from "@mui/material/Popper";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProjectRow = ({ title, code, creator, type }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <tr>
      <td style={{ display: "flex", alignItems: "flex-end" }}>
        <Avatar
          name={title.split(" ").slice(0, 2).join(" ")}
          size="30"
          className="card-avatar"
          round={true}
          style={{ fontSize: "20px", padding: "10px", margin: "0 15px 0 0" }}
          color="#343F56"
        />
        <p style={{ cursor: "pointer" }}>{title}</p>
      </td>
      <td>{code}</td>
      <td>{type}</td>
      <td>{creator}</td>
      <td>
        <MoreVertIcon onClick={handleClick} style={{ cursor: "pointer" }} className="project-option"/>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <div className="popover-body" sx={{ border: 1, p: 1 }}>
            <span>Project Settings</span>
            <span>Move to Trash</span>
          </div>
        </Popper>
      </td>
    </tr>
  );
};

export default ProjectRow;
