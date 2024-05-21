import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/footer"; // Ensure this matches the case exactly

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <footer />
    </Router>
  );
}
