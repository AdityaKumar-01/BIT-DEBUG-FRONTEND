import { useState, useEffect, useRef } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import logo from "../../assets/logoFull.png";

import "./NavBar.styles.css";
import Boards from "./UtilsComponent/Boards/Boards.util";
import Recent from "./UtilsComponent/Recent/Recent.util";
import Assigned from "./UtilsComponent/Assigned/Assigned.util";
import Project from "./UtilsComponent/Project/Project.util";
import People from "./UtilsComponent/People/People.util";

const NavBar = () => {
  const [work, setWork] = useState(false);
  const [project, setProject] = useState(false);
  const [people, setPeople] = useState(false);
  const [dropDownContent, setDropDownContent] = useState(0);

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
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log(work,project,people)
           setWork(false);
           setProject(false);
           setPeople(false);
          
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div className="navbar-container">
      <div>
        <img src={logo} alt="imt" className="navbar-logo" />
      </div>

      <div className="left-navbar" ref={wrapperRef}>
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
              <Project />
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
              <People />
            </div>
          ) : null}
        </div>
        <div className="navbar-options">
          <AccountCircleIcon sx={{ fontSize: "35px" }} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
