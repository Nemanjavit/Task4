import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
}

export default App;
