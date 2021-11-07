import { useState } from "react";
import { Formik, Field, Form } from "formik";
import sprint from "../../../../assets/sprint.png";
import bug from "../../../../assets/bug.png";
const CreateProject = ({ handleClose }) => {
  const [err, setErr] = useState("");
  const [activeCard, setCard] = useState(null);
  return (
    <Formik
      initialValues={{
        title: "",
        type: "",
      }}
      onSubmit={async (values) => {
        let data = {
          title: values["title"],
          type: { activeCard },
        };

        var options = {
          url: `${process.env.REACT_APP_EXPRESS_SERVER}/api/login-user`,
          method: "POST",
          data: data,
        };
        if (activeCard) setErr("");
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
          <Field
            type="text"
            name="title"
            required
            autoComplete="off"
            className="input"
            placeholder="Try a project name, goal, target"
          />
        </span>
        <span className="input-label-bind">
          <span className="form-label">
            Choose Template <span style={{ color: "red" }}>*</span>
          </span>
          <span className="type-card-holder">
            <span
              className={
                activeCard === "sprint"
                  ? "type-card active-card-type"
                  : "type-card"
              }
              onClick={() => setCard("sprint")}
            >
              <img src={sprint} alt="img" />
              <p>Scrum</p>
              <button type="none">Know More</button>
            </span>
            <span
              className={
                activeCard === "bug"
                  ? "type-card active-card-type"
                  : "type-card"
              }
              onClick={() => setCard("bug")}
            >
              <img src={bug} alt="img" />
              <p>Bug Tracking</p>
              <button type="none">Know More</button>
            </span>
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

export default CreateProject;
