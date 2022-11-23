import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [unitSkill, setUnitSkill] = useState("");
  const navigate = useNavigate();
  const pushUnitRole = (e) => {
    e.preventDefault();
    setSkills((oldSkill) => [...oldSkill, unitSkill]);
    setUnitSkill("");
  };
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4002/api/signup/skills",
      {
        skills,
      }
    );
    const { success, message } = resp.data;
    console.log(message);
    if (success == true) {
      setSkills([]);
      setUnitSkill("");
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <input
        value={unitSkill}
        onChange={(e) => setUnitSkill(e.target.value)}
        placeholder="skills"
      ></input>
      <button onClick={pushUnitRole}>Add Skills</button>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Skills;
