import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";





function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer/>

    </>
  );
}

export default App;
