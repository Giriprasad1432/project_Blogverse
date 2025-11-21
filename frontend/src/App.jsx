import { useContext } from "react";
import ProductCart from "./ProductCart";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext";

function App() {
  const { isOn } = useContext(AppContext);

  return (
    <div className={isOn ? "bg-gray-800" : ""}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
