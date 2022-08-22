import Main from './Components/Main.jsx';
import About from './Components/AboutUs/About.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Gallery from './Components/Gallery/Gallery.jsx';
import Schedule from './Components/Schedules/Schedule.jsx';
import Contact from './Components/ContactUs/ContactUs.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {


  
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
      <Route  path="/" element= {<Main/>} />         
      <Route  path="/AboutUs" element= {<About/>} />  
      <Route  path="/Gallery" element={ <Gallery/>}/>  
      <Route  path="/Schedule" element={ <Schedule/>}/>
      <Route  path="/Contact" element={ <Contact/>}/>

     
     
      </Routes>
      <Footer/>
      </Router>

    </div>
  );
}

export default App;
