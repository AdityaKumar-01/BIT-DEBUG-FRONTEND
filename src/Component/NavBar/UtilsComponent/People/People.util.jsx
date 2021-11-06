import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const People = () => {
  return (
    <div className="assigned-container">
      <span className="util-title">your collaborator</span>

      <div
        className="assigned-card"
        style={{ justifyContent: "space-between" }}
      >
        <PersonAddIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Add a teammate</p>
        </div>
      </div>
      <span className="util-title" style={{ marginTop: "20px" }}>
        your teams
      </span>
      <div className="assigned-card">
        <NoteAddIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Start a team</p>
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
        <PersonSearchIcon />
        <p style={{ marginLeft: "10px", wordWrap:"break-word" }} >Search for <br/>people or teams</p>
      </span>
    </div>
  );
};

export default People;
