import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Invcode = () => {
  const [inviteCode, setInviteCode] = useState("");
  const navigate = useNavigate();
  const checkInput = async (e) => {
    e.preventDefault();
    const resp = await axios.post(
      "http://localhost:4001/api/invite-code",
      { inviteCode }
    );
    const {success} = resp.data;
    if (success == true) {
      setInviteCode("");
      navigate("/signup");
    } else {
      console.log("Wrong Invite Code");
    }
  };
  return (
    <div>
      <input value={inviteCode} onChange={(e) => setInviteCode(e.target.value)}></input>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Invcode;
