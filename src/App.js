import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./Services/Services";
import Content from "./Services/Content";
import Eng from "./Eng/Eng";

function App() {
  return (
    <div className="APP">
      <Header/>
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/courses" element={<Services/>} /></Routes>
      <Routes><Route path="/courses/content" element={<Content/>} /></Routes>
      <Routes><Route path="/engineers" element={<Eng/>} /></Routes>


    </div>
  );

};

export default App;
