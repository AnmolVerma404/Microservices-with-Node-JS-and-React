import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Location = () => {
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const navigate = useNavigate();
  const locationObj = useLocation();
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:4002/api/signup/location", {
      email: locationObj.state.email,
      location,
      timezone,
    });
    const { success, message } = resp.data;
    console.log(message);
    if (success == true) {
      setLocation("");
      setLocation("");
      navigate("/signup/graduation");
    }
  };
  return (
    <div>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="location"
      ></input>
      <input
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        placeholder="timezone"
      ></input>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Location;
