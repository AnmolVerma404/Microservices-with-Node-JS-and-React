import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Personalinfo = () => {
  const [college, setCollege] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const navigate = useNavigate();
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4002/api/signup/graduation",
      {
        college,
        graduationYear,
        degree,
        major,
      }
    );
    const { success, message } = resp.data;
    console.log(message);
    if (success == true) {
    //   setOtp("");
      navigate("/signup/personalinfo");
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

export default Personalinfo;
