import React from 'react'
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "./DashboardMetaCard.styles.css"
const DashboardMetaCard = ({title, board, projTitle, activity, people, type}) => {
    return (
      <div className="dashboard-meta-card-container">
        <div
          className="assigned-card meta-card meta-col"
          style={{ width: "auto" }}
        >
          <CheckBoxIcon sx={{ color: "#343f56" }} />
          <div className="assgined-card-info">
            <p>{title}</p>
            <span className="assigned-card-detail">
              <span>{board}</span>
              <span>
                <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
              </span>
              <span>{projTitle}</span>
            </span>
          </div>
        </div>
        <div className="meta-col">{activity}</div>
        <div className="meta-col">{type === "work" ? "people" : null}</div>
      </div>
    );
}

export default DashboardMetaCard
