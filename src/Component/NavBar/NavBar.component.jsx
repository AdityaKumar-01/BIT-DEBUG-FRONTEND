import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../../assets/logo.png";

import "./NavBar.styles.css";
import Boards from "./UtilsComponent/Boards/Boards.util";
import Recent from "./UtilsComponent/Recent/Recent.util";
import Assigned from "./UtilsComponent/Assigned/Assigned.util";
import Project from './UtilsComponent/Project/Project.util';

const NavBar = () => {
  const [work, setWork] = useState(false);
  const [project, setProject] = useState(false);
  const [people, setPeople] = useState(false);
  const [dropDownContent, setDropDownContent]= useState(0)

  const handleClick = (name) => {
    switch (name) {
      case "work":
        setWork(!work);
        break;
      case "project":
        setProject(!project);
        break;
      case "people":
        setPeople(!people);
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar-container">
      <div>
        <img src={logo} alt="imt" className="navbar-logo" />
      </div>
      <div className="left-navbar">
        <div className="navbar-options">
          <div className="navbar-tiles" onClick={() => handleClick("work")}>
            <p>Your work</p>
            <KeyboardArrowDownIcon />
          </div>

          {work ? (
            <div className="navbar-dropdown">
              <div className="dropdown-options">
                <span
                  className={dropDownContent === 0 ? "active-drop-option" : ""}
                  onClick={() => setDropDownContent(0)}
                >
                  Assigned to me
                </span>
                <span
                  className={dropDownContent === 1 ? "active-drop-option" : ""}
                  onClick={() => setDropDownContent(1)}
                >
                  Recent
                </span>
                <span
                  className={dropDownContent === 2 ? "active-drop-option" : ""}
                  onClick={() => setDropDownContent(2)}
                >
                  Boards
                </span>
              </div>
              <div className="dropdown-content">
                {dropDownContent === 0 ? (
                  <Assigned />
                ) : dropDownContent === 1 ? (
                  <Recent />
                ) : (
                  <Boards />
                )}
              </div>
            </div>
          ) : null}
        </div>
        <div className="navbar-options">
          <div className="navbar-tiles" onClick={() => handleClick("project")}>
            <p>Projects</p>
            <KeyboardArrowDownIcon />
          </div>

          {project ? (
            <div className="navbar-dropdown">
              <Project/>
            </div>
          ) : null}
        </div>
        <div className="navbar-options">
          <div className="navbar-tiles" onClick={() => handleClick("people")}>
            <p>People</p>
            <KeyboardArrowDownIcon />
          </div>

          {people ? (
            <div className="navbar-dropdown">
              <div className="navbar-dropdown-item">dsd</div>
              <div className="navbar-dropdown-item">sd</div>
              <div className="navbar-dropdown-item">sdsd</div>
            </div>
          ) : null}
        </div>
        <div className="navbar-options">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
