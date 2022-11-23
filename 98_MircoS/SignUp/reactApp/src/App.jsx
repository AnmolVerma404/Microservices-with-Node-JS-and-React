import "./App.css";
import { Routes, Route } from "react-router-dom";
import Invcode from "./components/invcode.jsx";
import Signup from "./components/signup";
import VerifyEmail from "./components/verifyEmail";
import Location from "./components/location";
import Graduation from "./components/graduation";
import Personalinfo from "./components/personalinfo";
import Interests from "./components/interests";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Invcode />} />
      <Route path={"/signup"}>
        <Route path={""} element={<Signup />} />
        <Route path={"verifyemail"} element={<VerifyEmail />} />
        <Route path={"location"} element={<Location />} />
        <Route path={"graduation"} element={<Graduation />} />
        <Route path={"personalinfo"} element={<Personalinfo />} />
        <Route path={"interests"} element={<Interests />} />
        <Route path={"personalinfo"} element={<Personalinfo />} />
        <Route path={"experience"} element={<Experience />} />
        <Route path={"skills"} element={<Skills />} />
      </Route>
      <Route path={"dashboard"} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
