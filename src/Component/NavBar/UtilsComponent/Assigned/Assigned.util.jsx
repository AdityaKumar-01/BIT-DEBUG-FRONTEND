import CheckBoxIcon from "@mui/icons-material/CheckBox";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "./Assigned.styles.css"
const Assigned = () => {
  return (
    <div className="assigned-container">
      <span className="util-title">TO-DO</span>
      <div className="assigned-card">
        <CheckBoxIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>CB2</span>
            <span>
              <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
            </span>
            <span>coding-bots-201</span>
          </span>
        </div>
      </div>
      <div className="assigned-card">
        <CheckBoxIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>CB2</span>
            <span>
              <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
            </span>
            <span>coding-bots-201</span>
          </span>
        </div>
      </div>
      <div className="assigned-card">
        <CheckBoxIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>CB2</span>
            
              <FiberManualRecordIcon sx={{ fontSize: "10px" }} />
           
            <span>coding-bots-201</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Assigned;
