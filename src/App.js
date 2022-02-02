import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Content
import Home from './Content/Home';
import About from './Content/About';
import NavbarResponsive from './Component/NavbarResponsive';
import FirstPage from './Content/FirstPage';
import Navbar from './Component/Navbar';
import Education from './Content/Education';
import Project from './Content/Project';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <NavbarResponsive/>
      <Routes>
      <Route exact path="/" element={<FirstPage/>} activestyle/>
      <Route exact path="/home" element={<Home/>} activestyle/>
      <Route path="/about" element={<About/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/project" element={<Project/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
