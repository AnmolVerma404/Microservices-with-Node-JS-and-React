import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Interests = () => {
  const [username, setUsername] = useState("");
  const [alternateEmail, setAlternateEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const navigate = useNavigate();
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4002/api/signup/personalinfo",
      {
        username,
        alternateEmail,
        mobile,
        aboutMe,
      }
    );
    const { success, message } = resp.data;
    console.log(message);
    if (success == true) {
      setUsername("");
      setAlternateEmail("");
      setMobile("");
      setAboutMe("");
      navigate("/signup/interests");
    }
  };
  return (
    <div>
      <input
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        placeholder="college"
      ></input>
      <input
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
        placeholder="graduationYear"
      ></input>
      <input
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        placeholder="degree"
      ></input>
      <input
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        placeholder="major"
      ></input>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Interests;
