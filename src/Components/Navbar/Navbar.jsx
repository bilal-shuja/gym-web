import { EncryptStorage } from 'encrypt-storage';
import React,{useState,useEffect} from 'react';
import baseURL from '../URL/BaseURL.js';
import {Link} from 'react-router-dom';
// import logo from '../img/logo.png';
import globalID from '../GlobalD.js';
import axios from 'axios';



const Navbar = () => {
  const [sociaLinks , setSociaLinks] = useState([])
  const encryptStorageTwo = new EncryptStorage('secret-key', {
    prefix: '@instance2',
  });

  const localStorage = async ()=>{

    try {
      let userID = await encryptStorageTwo.getItem('userID');
  
  
      if ( userID !== null) {
     
        gettingSociaLinks(userID)
      }
    } catch {
      return null;
    }
  }

  const gettingSociaLinks = (userID)=>{
    axios.get(`${baseURL}imageslist/${globalID}`)
    .then((res)=>{
      setSociaLinks(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  useEffect(() => {
    localStorage()
  }, [])
  
  return (
    <>
    {/* Header Section Begin */}
    <header className="header-section pb-3 ">
   <nav className="navbar navbar-expand-lg navbar-light  fixed-top " style={{backgroundColor:"#151515"}}>
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#" >
    <i className="fa-solid fa-dumbbell mt-2" style={{ color: "#e4381C", fontSize:"3em"}}></i>
    </a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/AboutUs">About us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link " to="/Schedule">Schedule</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Gallery">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/Contact">Contacts</Link>
        </li>
      
      
      </ul>
   
    </div>
    {
      sociaLinks.map((items)=>{
        return(
          <>
           <div className="top-social">
      <a href={`${items.link_one}`} target="_blank"><i className="fa fa-facebook" /></a>
      <a href={`${items.link_two}`} target="_blank"><i className="fa fa-instagram" /></a>
      <a href={`${items.link_two}`} target="_blank"><i className="fa fa-youtube-play" /></a>
    </div>
          
          </>
        )
      })
    }
   
  </div>
</nav>
</header>
    {/* Header End */}
    </>
  )
}

export default Navbar