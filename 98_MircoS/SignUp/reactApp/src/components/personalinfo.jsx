import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Personalinfo = () => {
  const [username, setUsername] = useState("");
  const [alternateEmail, setAlternateEmail] = useState("");
  const [mobile, setMobile] = useState(0);
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
    console.log(success, message);
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
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      ></input>
      <input
        value={alternateEmail}
        onChange={(e) => setAlternateEmail(e.target.value)}
        placeholder="alternateEmail"
      ></input>
      <input
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="mobile"
      ></input>
      <input
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
        placeholder="aboutMe"
      ></input>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Personalinfo;
