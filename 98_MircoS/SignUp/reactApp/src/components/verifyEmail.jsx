import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:4001/signup/verifyEmail", {otp});
    const {success,message} = resp.data;
    console.log(message);
    if(success == true){
        setOtp('');
        navigate('/signup/location')
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
