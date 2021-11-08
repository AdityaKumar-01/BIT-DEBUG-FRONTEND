import { useState } from "react";
import { Formik, Field, Form } from "formik";

import bug from "../../../../assets/bugThumb.svg";
import task from "../../../../assets/taskThumb.svg";
import highest from "../../../../assets/highest.svg";
import high from "../../../../assets/high.svg";
import medium from "../../../../assets/medium.svg";
import low from "../../../../assets/low.svg";
import lowest from "../../../../assets/lowest.svg";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CreateIssue = ({ handleClose }) => {
  const [err, setErr] = useState("");
  const [selectedIssue, setIssue] = useState(null);
  const [selectedPriority, setPriority] = useState(null);
  const proj = [
    { title: "coding bots- 201", code: "CB201" },
    { title: "coding bots- 201", code: "CB201" },
    { title: "coding bots- 201", code: "CB201" },
  ];
  const options = [
    {
      title: "Task",
      val: "task",
      img: task,
    },
    {
      title: "Bug",
      val: "bug",
      img: bug,
    },
  ];

  const priority = [
    { img: highest, level: "highest", title: "Highest" },
    { img: high, level: "high", title: "High" },
    { img: medium, level: "medium", title: "Medium" },
    { img: low, level: "low", title: "Low" },
    { img: lowest, level: "lowest", title: "Lowest" },
  ];
  return (
    <Formik
      initialValues={{
        title: "",
        type: "",
        assignTo: "",
      }}
      onSubmit={async (values) => {
        let data = {
          title: values["title"],
          type: { selectedIssue },
        };

        var options = {
          url: `${process.env.REACT_APP_EXPRESS_SERVER}/api/login-user`,
          method: "POST",
          data: data,
        };
        if (selectedIssue) setErr("");
        else setErr("Choose template");
        //   axios
        //     .request(options)
        //     .then((res) => {
        //       console.log(res);
        //       if (res.data.status == 404) setError(res.data.msg);
        //       else {
        //         localStorage.setItem("username", values["username"]);
        //         history.push("/");
        //       }
        //     })
        //     .catch((err) => console.log(err));
      }}
    >
      <Form className="form-inputs">
        {err ? <span style={{ color: "red" }}>{err}</span> : null}
        <span className="input-label-bind">
          <span className="form-label">
            Project Title <span style={{ color: "red" }}>*</span>
          </span>

          <Field name="color" as="select" className="input">
            {proj.map((obj) => {
              return (
                <option value={obj.code}>
                  {obj.title} ({obj.code})
                </option>
              );
            })}
          </Field>
        </span>
        <span className="input-label-bind">
          <span className="form-label">
            Issue Type <span style={{ color: "red" }}>*</span>
          </span>
          <span className="select-issue-container">
            {options.map((obj) => {
              return (
                <div
                  onClick={() => setIssue(obj.val)}
                  className="issue-type-card"
                >
                  <img src={obj.img} height="20px" width="20px" alt="img" />
                  <span> {obj.title} </span>
                  {selectedIssue === obj.val ? (
                    <CheckCircleIcon
                      sx={{
                        color: "#7FFF00",
                        fontSize: "15px",
                        marginLeft: "5px",
                      }}
                    />
                  ) : (
                    " "
                  )}
                </div>
              );
            })}
          </span>
        </span>
        <span className="input-label-bind">
          <span className="form-label">
            Description <span style={{ color: "red" }}>*</span>
          </span>
          <Field
            type="text"
            name="desc"
            required
            autoComplete="off"
            className="input"
            placeholder="Try a project name, goal, target"
          />
        </span>
        <span className="input-label-bind">
          <span className="form-label">
            Priority <span style={{ color: "red" }}>*</span>
          </span>
          <span className="select-issue-container" style={{width:"100%"}}>
            {priority.map((obj) => {
              return (
                <div
                  onClick={() => setPriority(obj.level)}
                  className="issue-type-card"
                >
                  <img src={obj.img} height="20px" width="20px" alt="img" />
                  <span> {obj.title} </span>
                  {selectedPriority === obj.level ? (
                    <CheckCircleIcon
                      sx={{ color: "#7FFF00", fontSize: "15px" ,marginLeft:"5px"}}
                    />
                  ) : (
                    " "
                  )}
                </div>
              );
            })}
          </span>
        </span>
        <span className="form-btn">
          <button
            className="view-proj-btn"
            style={{ width: "70px" }}
            onClick={() => handleClose()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="view-proj-btn"
            style={{ width: "70px" }}
          >
            Create
          </button>
        </span>
      </Form>
    </Formik>
  );
};

export default CreateIssue;
