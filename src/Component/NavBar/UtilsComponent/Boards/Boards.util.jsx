import "./Board.styles.css";
import TableChartRoundedIcon from "@mui/icons-material/TableChartRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
const Boards = () => {
  return (
    <div className="assigned-container">
      <span className="util-title">Worked On</span>
      <div className="assigned-card">
        <TableChartRoundedIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>in coding bots-201</span>
            <span className="person-stats">
              <GroupsRoundedIcon
                sx={{ fontSize: "20px", marginRight: "5px" }}
              />
              <span>20</span>
            </span>
          </span>
        </div>
      </div>
      <div className="assigned-card">
        <TableChartRoundedIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>in coding bots-201</span>
            <span className="person-stats">
              <GroupsRoundedIcon
                sx={{ fontSize: "20px", marginRight: "5px" }}
              />
              <span>20</span>
            </span>
          </span>
        </div>
      </div>
      <div className="assigned-card">
        <TableChartRoundedIcon sx={{ color: "#343f56" }} />
        <div className="assgined-card-info">
          <p>Btn error</p>
          <span className="assigned-card-detail">
            <span>in coding bots-201</span>
            <span className="person-stats">
              <GroupsRoundedIcon
                sx={{ fontSize: "20px", marginRight: "5px" }}
              />
              <span>20</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Boards;
