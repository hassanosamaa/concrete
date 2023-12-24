import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./Services/Services";
import Content from "./Services/Content";
import Eng from "./Eng/Eng";
import Headertop from "./components/Headertop";
import Contenteng from "./Eng/Contenteng";

function App() {
  return (
    <div className="APP">
      <Headertop/>
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/courses" element={<Services/>} /></Routes>
      <Routes><Route path="/courses/content" element={<Content/>} /></Routes>
      <Routes><Route path="/engineers" element={<Eng/>} /></Routes>
      <Routes><Route path="/engineers/contenteng" element={<Contenteng/>} /></Routes>
      <Header/>
      <Footer/>




    </div>
  );

};

export default App;
