import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4001/api/signup/verifyEmail",
      { otp }
    );
    const { success, message } = resp.data;
    console.log(message);
    if (success == true) {
      setOtp("");
      navigate("/signup/location", { state: { email: location.state.email } });
    }
  };
  return (
    <div>
      <input value={otp} onChange={(e) => setOtp(e.target.value)}></input>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};
export default VerifyEmail;
