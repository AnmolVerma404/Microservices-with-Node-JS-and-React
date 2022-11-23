import "./App.css";
import Invcode from "./components/invcode.jsx";
import Signup from "./components/signup";
import VerifyEmail from "./components/verifyEmail";
import Location from "./components/location";
import Graduation from "./components/graduation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Invcode />} />
      <Route path={"/signup"}>
        <Route path={""} element={<Signup />} />
        <Route path={"verifyemail"} element={<VerifyEmail />} />
        <Route path={"location"} element={<Location />} />
        <Route path={"graduation"} element={<Graduation />} />
      </Route>
    </Routes>
  );
}

export default App;
