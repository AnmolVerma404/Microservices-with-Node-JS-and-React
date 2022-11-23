import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const [roles, setRoles] = useState([]);
  const [unitRoles, setUnitRoles] = useState("");
  const navigate = useNavigate();
  const pushUnitRole = (e) => {
    e.preventDefault();
    setRoles((oldRoles) => [...oldRoles, unitRoles]);
    setUnitRoles("");
  };
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4002/api/signup/interests",
      {
        roles,
      }
    );
    const { success, message } = resp.data;
    console.log(message);
    if (success == true) {
      setRoles([]);
      setUnitRoles("");
      navigate("/signup/experience");
    }
  };
  return (
    <div>
      <input
        value={unitRoles}
        onChange={(e) => setUnitRoles(e.target.value)}
        placeholder="roles"
      ></input>
      <button onClick={pushUnitRole}>Add Role</button>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Experience;
