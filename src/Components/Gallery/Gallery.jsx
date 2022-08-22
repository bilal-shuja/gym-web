import React,{useState, useEffect} from 'react';
import AboutBread from '../img/about-bread.jpg';
import {Link} from 'react-router-dom';

import GalleryOne from '../img/gallery/gallery-1.jpg';
import GalleryTwo from '../img/gallery/gallery-2.jpg';
import GalleryThree from '../img/gallery/gallery-3.jpg';
import GalleryFour from '../img/gallery/gallery-4.jpg';

import GalleryFive from '../img/gallery/gallery-5.jpg';
import GallerySix from '../img/gallery/gallery-6.jpg';

import GallerySeven from '../img/gallery/gallery-7.jpg';
import GalleryEight from '../img/gallery/gallery-8.jpg';
import GalleryNine from '../img/gallery/gallery-9.jpg';
import globalID from '../GlobalD.js';

import { EncryptStorage } from 'encrypt-storage';
import baseURLImg from '../URL/baseURLImg.js';
import baseURL from '../URL/BaseURL.js';
import axios from 'axios';


const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const[galleryData , setGalleryData] = useState([]);

  const loadingSpinner =  async  ()=>{
    // Wait for two second
    await new Promise((r) => setTimeout(r, 1000));

    // Toggle loading state
    setLoading(false);
}

  const encryptStorageTwo = new EncryptStorage('secret-key', {
    prefix: '@instance2',
  });

  const localStorage = async ()=>{

    try {
      let userID = await encryptStorageTwo.getItem('userID');
  
  
      if ( userID !== null) {
        gettingGalleryData(userID)
      }
    } catch {
      return null;
    }
  }

  const gettingGalleryData = (userID)=>{
    axios.get(`${baseURL}imageslist/${globalID}`)
    .then((res)=>{
      setGalleryData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    localStorage()
    loadingSpinner()
  }, [])
  


  return (
    <>
    {

    loading?
    <>
    <div id="preloder">
     <div className="loader" />
   </div> 
   </>
   :
  <>
  {/* Breadcrumb Section Begin */}
  <section className="breadcrumb-section set_bg spad mt-5" data-setbg="img/about-bread.jpg" style={{backgroundImage:`url(${AboutBread})`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>Our Gallery</h2>
            <div className="breadcrumb-controls">
              <Link to="/"><i className="fa fa-home" /> Home</Link>
              <span>Gallery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb End */}
  {/* Gallery Section Begin */}
  <section className="gallery-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="gallery-controls">
              <h2 className="active" data-filter="All" style={{color:"#e16521"}}>All GALLERY</h2>
              
           
          </div>
        </div>
      </div>
      <div className="row gallery-filter">
        {
          galleryData.map((items)=>{
            return(
              <>
             <div className="col-lg-4 col-sm-6">
                <div className="gallery-item"  >
                  {
                    items.img_1 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_1}`} alt="gallery-img" style={{height:"20em",width:"30em"}} />
                    :
                    <img className="img-fluid"  src={GalleryOne} alt="gallery-img" />

                  }
                  <div className="gi-hover-warp">
                    <div className="gi-hover">
                      <a href={`${baseURLImg}${items.img_1}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                      <a href="#"><i className="fa fa-chain" /></a>
                      <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )
          })
          
        }

        

{
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6 ">
          <div className="gallery-item">
          {
                    items.img_2 !== ''?
                    <img className="img-fluid" src={`${baseURLImg}${items.img_2}`} alt="gallery-img" style={{height:"20em",width:"30em"}} />
                    :
                    <img className="img-fluid"  src={GalleryTwo} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_2}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            }

        
{
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6">
          <div className="gallery-item">
          {
                    items.img_3 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_3}`} alt="gallery-img"  style={{height:"20em",width:"30em"}}/>
                    :
                    <img className="img-fluid"  src={GalleryThree} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_3}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            } 
        
        {
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6">
          <div className="gallery-item">
          {
                    items.img_4 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_4}`} alt="gallery-img"  style={{height:"20em",width:"30em"}}/>
                    :
                    <img className="img-fluid"  src={GalleryFour} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_4}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            } 
        
        {
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6">
          <div className="gallery-item">
          {
                    items.img_5 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_5}`} alt="gallery-img"  style={{height:"20em",width:"30em"}}/>
                    :
                    <img className="img-fluid"  src={GalleryFive} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_5}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            } 

    
{
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6">
          <div className="gallery-item">
          {
                    items.img_6 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_6}`} alt="gallery-img"  style={{height:"20em",width:"30em"}}/>
                    :
                    <img className="img-fluid"  src={GallerySix} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_6}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            } 


        
     {
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6">
          <div className="gallery-item">
          {
                    items.img_7 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_7}`} alt="gallery-img"  style={{height:"20em",width:"30em"}}/>
                    :
                    <img className="img-fluid"  src={GallerySeven} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_7}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            } 

{
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6">
          <div className="gallery-item">
          {
                    items.img_8 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_8}`} alt="gallery-img"  style={{height:"20em",width:"30em"}}/>
                    :
                    <img className="img-fluid"  src={GalleryEight} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_8}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            } 
        
        {
              galleryData.map((items)=>{
                return(
                  <>
                           <div className="col-lg-4 col-sm-6">
          <div className="gallery-item">
          {
                    items.img_9 !== ''?
                    <img className="img-fluid"  src={`${baseURLImg}${items.img_9}`} alt="gallery-img"  style={{height:"20em",width:"30em"}}/>
                    :
                    <img className="img-fluid"  src={GalleryNine} alt="gallery-img" />

                  }

            <div className="gi-hover-warp">
              <div className="gi-hover">
                <a href={`${baseURLImg}${items.img_9}`} className="image-popup"><i className="fa fa-search-plus" /></a>
                <a href="#"><i className="fa fa-chain" /></a>
                <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
              </div>
            </div>
          </div>
        </div>
                  
                  </>
                )
              })
            } 

       
      </div>
    </div>
  </section>
  {/* Gallery Section End */}
  {/* Cta Section Begin */}
  <section className="cta-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-text">
            <h3>GeT Started Today</h3>
            <p>New student special! $30 unlimited Gym for the first week anh 50% of our member!</p>
          </div>
          <a href="#" className="primary-btn cta-btn">book now</a>
        </div>
      </div>
    </div>
  </section>
  {/* Cta Section End */}
</>
}

    </>
  )
}

export default Gallery