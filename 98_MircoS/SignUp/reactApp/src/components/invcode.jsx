import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Invcode = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const checkInput = (e) => {
    e.preventDefault();
    if (input == "123456") {
      setInput("");
      navigate("/signup");
    }
  };
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={checkInput}>Submit</button>
    </div>
  );
};

export default Invcode;
