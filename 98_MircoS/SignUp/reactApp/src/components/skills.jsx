import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [unitExperience, setUnitExperience] = useState("");
  const navigate = useNavigate();
  const pushUnitRole = (e) => {
    e.preventDefault();
    setExperience((oldExperience) => [...oldExperience, unitExperience]);
    setUnitExperience("");
  };
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4002/api/signup/experience",
      {
        areaOfExperience:experience,
      }
    );
    const { success, message } = resp.data;
    console.log(message);
    if (success == true) {
      setExperience([]);
      setUnitExperience("");
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <input
        value={unitExperience}
        onChange={(e) => setUnitExperience(e.target.value)}
        placeholder="experience"
      ></input>
      <button onClick={pushUnitRole}>Add Role</button>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Skills;
