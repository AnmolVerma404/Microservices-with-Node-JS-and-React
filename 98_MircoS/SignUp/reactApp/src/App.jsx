import { useState } from "react";
import axios from 'axios';
import "./App.css";
import Invcode from "./components/invcode.jsx";
import Signup from "./components/signup";
import {Routes,Route} from 'react-router-dom';

function App() {
  return(
    <Routes>
       <Route path={'/'} element={<Invcode/>}/>
       <Route path={'/signup'} element={<Signup/>}/>
    </Routes>
  );
}

export default App;
