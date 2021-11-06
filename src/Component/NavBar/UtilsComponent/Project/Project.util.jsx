import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PageviewIcon from "@mui/icons-material/Pageview";
import CreateIcon from "@mui/icons-material/Create";
const Project = () => {
  return (
    <div className="assigned-container">
      <span className="util-title">Recent</span>
      <div
        className="assigned-card"
        style={{ justifyContent: "space-between" }}
      >
        <AccountTreeIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Coding Bots-201</p>
          <span className="assigned-card-detail">
            <span>CB2</span>
          </span>
        </div>
      </div>
      <div className="assigned-card">
        <AccountTreeIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>CB2</span>
          </span>
        </div>
      </div>
      <div className="assigned-card">
        <AccountTreeIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>CB2</span>
          </span>
        </div>
      </div>

      <hr style={{ margin: "10px 0" }} />
      <span
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        <PageviewIcon />
        <p style={{ marginLeft: "10px" }}>View all project</p>
      </span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        <CreateIcon />
        <p style={{ marginLeft: "10px" }}>Create project</p>
      </span>
    </div>
  );
};

export default Project;
