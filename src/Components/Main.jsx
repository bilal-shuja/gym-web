import React from 'react';
import {useEffect, useState} from "react";
import AboutImg from './img/home-about.jpg';
import iconOne from './img/icons/chose-icon-1.png';
import iconTwo from './img/icons/chose-icon-2.png';
import iconThree from './img/icons/chose-icon-3.png';
import iconFour from './img/icons/chose-icon-4.png';
import iconFive from './img/icons/chose-icon-5.png';
import iconSix from './img/icons/chose-icon-6.png';
import PlanChooseImage from './img/price-bg.jpg';
import ClassesTitleBg from './img/classes-title-bg.jpg';
import ClassOne from './img/classes/class-1.jpg';
import ClassTwo from './img/classes/class-2.jpg';
import ClassThree from './img/classes/class-3.jpg';
import ClassFour from './img/classes/class-4.jpg';

import globalID from './GlobalD.js';

import { EncryptStorage } from 'encrypt-storage';
import baseURL from './URL/BaseURL.js';
import baseURLImg from './URL/baseURLImg.js';
import axios from 'axios';


const Main = () => {
  const [loading, setLoading] = useState(true);
  const[headerData , setHeaderData] = useState([]);
  const[pricingData , setPricingData] = useState([]);
  const[chooseProgramData , setChooseProgramData] = useState([]);

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
     
        gettingHeaderData(userID)
        gettingChooseProgram(userID)
        gettingPriceProgram(userID)
      }
    } catch {
      return null;
    }
  }
  
  const gettingHeaderData = (userID)=>{
    axios.get(`${baseURL}homepagelist/${globalID}`)
    .then((res)=>{
      setHeaderData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  const gettingChooseProgram = (userID)=>{
    axios.get(`${baseURL}programlist/${globalID}`)
    .then((res)=>{
      setChooseProgramData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const gettingPriceProgram = (userID)=>{
    axios.get(`${baseURL}pricinglist/${globalID}`)
    .then((res)=>{
      setPricingData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  useEffect(() => {
      loadingSpinner();
      localStorage();
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
{/* About Section Begin */}
<section className="home-about spad">
  <div className="container">
    <div className="row">
      {
      
      headerData.map((items)=>{
        return(
          <>
             <div className="col-lg-6">
        <div className="about-text">
          <h2>{items.gym_name}</h2>
          {/* <p className="short-details">CrossFit is a cutting-edge functional fitness system that can help
            everyday men.</p> */}

          <p className="long-details">
            {
              items.gym_para
            }
            {/* Success isn’t really that difficult. There is a significant portion of
            the population here in North America, that actually want and need success to be hard! For
            those of you who are serious about having more, doing more, giving more and being more. */}
            
            </p>
          <a href="#" className="primary-btn about-btn">Learn More</a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-img mt-2">
          {
            items.owner_img === ''?
            <img className="img-fluid"  src={AboutImg} alt="home-about-img" style={{height:"20em"}} />
            :
            <img className="img-fluid"  src={`${baseURLImg}${items.owner_img}`}alt="home-about-img" style={{height:"20em"}} />
          }
        </div>
        
      </div>
          </>
        )
      })
      
   
  }
    </div>
    {/* end-row */}
  </div>
</section>
{/* About Section End */}


{/* Classes Section Begin */}
<section className="classes-section">
  <div className="class-title set_bg" data-setbg="img/classes-title-bg.jpg" style={{backgroundImage:`url(${ClassesTitleBg})`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7 m-auto text-center">
          <div className="section-title pl-lg-4 pr-lg-4 pl-0 pr-0">
            <h2>Choose Your Program</h2>
            <p>Our Crossfit experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      {
        chooseProgramData.map((items)=>{
          return(
            <>
                <div className="col-lg-3 col-sm-6">
        <div className="classes-item set_bg" data-setbg="img/classes/class-1.jpg"
          style={{backgroundImage:`url(${baseURLImg}${items.img_one})`}}
         >
          <h4>{items.head_one  === ''? 'Crossfit Level 1':items.head_one}</h4>
          <p>
            {
              items.para_one === ''?
              'Sufferers around the globe will be happy to hear that there are sleep apnea remedies.'
              :
              items.para_one
            }
          </p>
          <a href="#" className="primary-btn class-btn">Read More</a>
        </div>
      </div>

            </>
          )
        })

      }
  {
    chooseProgramData.map((items)=>{
      return(
        <>
         <div className="col-lg-3 col-sm-6">
        <div className="classes-item set-bg" data-setbg="img/classes/class-2.jpg" style={{backgroundImage:`url(${baseURLImg}${items.img_two})`}}>
          <h4>{ items.head_two !== '' ? items.head_two : 'BootCamp' }</h4>
          <p>
          {
              items.para_two === ''?
            'The oil, also called linseed oil, has many industrial uses – it is an important ingredient'
            :
            items.para_two
          }

          </p>
          <a href="#" className="primary-btn class-btn">Read More</a>
        </div>
      </div>


        </>
      )
    })

  }
     
{
  chooseProgramData.map((items)=>{
    return(
      <>
       <div className="col-lg-3 col-sm-6">
        <div className="classes-item set-bg" data-setbg="img/classes/class-3.jpg" style={{backgroundImage:`url(${baseURLImg}${items.img_three})`}}>
          <h4>{items.head_three !== '' ? items.head_three :'Energy Blast'}</h4>
          <p>
            {
              items.para_three !== ''? items.para_three:
            'It is a very common occurrence like cold or fever depending upon your lifestyle.'
            }
           </p>
          <a href="#" className="primary-btn class-btn">Read More</a>
        </div>
      </div>

      </>
    )
  })

}
     
     {
      chooseProgramData.map((items)=>{
        return(
          <>
               <div className="col-lg-3 col-sm-6">
        <div className="classes-item set-bg" data-setbg="img/classes/class-4.jpg" style={{backgroundImage:`url(${baseURLImg}${items.img_four})`}}>
          <h4>
            {
              items.head_four !== ''? items.head_four :'CLASSIC BODY BALANCE'
            }
          </h4>
          <p>
            {
            items.para_four !==''?items.para_four :'The procedure is usually a preferred alternative to photorefractive keratectomy'
            }
          </p>
          <a href="#" className="primary-btn class-btn">Read More</a>
        </div>
      </div>

          </>
        )
      })

     }

 

    </div>
  </div>
</section>
{/* Classes Section End */}
{/* Class Time Section Begin */}
<section className="classtime-section class-time-table spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="section-title">
          <h2>Classtime Table</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="timetable-controls">
          <ul>
            <li className="active" data-tsfilter="all">all class</li>
            <li data-tsfilter="crossfit">crossfit</li>
            <li data-tsfilter="lunge">lunge ball</li>
            <li data-tsfilter="ppsr">ppsr</li>
            <li data-tsfilter="walls">walls</li>
            <li data-tsfilter="candy">candy</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="classtime-table">
      <table>
        <thead>
          <tr>
            <th />
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="workout-time">10.00</td>
            <td className="hover-bg ts-item" data-tsmeta="crossfit">
              <span>10.00 - 14.00</span>
              <h6>Crossfit lv1</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="crossfit">
              <span>10.00 - 15.00</span>
              <h6>Crossfit lv1</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="lunge">
              <span>10.00 - 13.00</span>
              <h6>Lunge Ball Bur</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="lunge">
              <span>10.00 - 13.30</span>
              <h6>Lunge Ball Bur</h6>
            </td>
          </tr>
          <tr>
            <td className="workout-time">14.00</td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="lunge">
              <span>14.00 - 17.00</span>
              <h6>Lunge Ball Bur</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="crossfit">
              <span>14.00 - 17.00</span>
              <h6>Crossfit lv1</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="walls">
              <span>14.00 - 15.30</span>
              <h6>Walls to Knees</h6>
            </td>
            <td />
          </tr>
          <tr>
            <td className="workout-time">16.00</td>
            <td className="hover-bg ts-item" data-tsmeta="lunge">
              <span>16.00 - 18.00</span>
              <h6>Lunge Ball Bur</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="candy">
              <span>16.00 - 19.00</span>
              <h6>Candy</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="candy">
              <span>16.00 - 19.00</span>
              <h6>Candy</h6>
            </td>
            <td className="hover-bg ts-item" data-tsmeta="ppsr">
              <span>16.00 - 17.00</span>
              <h6>Ppsr</h6>
            </td>
            <td className="hover-bg ts-item" data-tsmeta="murph">
              <span>16.00 - 20.00</span>
              <h6>murph</h6>
            </td>
          </tr>
          <tr>
            <td className="workout-time">18.00</td>
            <td className="hover-bg ts-item" data-tsmeta="walls">
              <span>18.00 - 20.00</span>
              <h6>Walls to Knees</h6>
            </td>
            <td className="hover-bg ts-item" data-tsmeta="ppsr">
              <span>18.00 - 20.00</span>
              <h6>ppsr</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="chelsea">
              <span>18.00 - 22.00</span>
              <h6>Chelsea</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="annie">
              <span>18.00 - 22.00</span>
              <h6>annie</h6>
            </td>
            <td />
          </tr>
          <tr>
            <td className="workout-time">20.00</td>
            <td className="hover-bg ts-item" data-tsmeta="lunge">
              <span>21.00 - 23.00</span>
              <h6>Lunge Ball Bur</h6>
            </td>
            <td className="hover-bg ts-item" data-tsmeta="walls">
              <span>20.00 - 22.00</span>
              <h6>Walls to Knees</h6>
            </td>
            <td className="hover-bg ts-item" data-tsmeta="walls">
              <span>20.30 - 23.00</span>
              <h6>Walls to Knees</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="crossfit">
              <span>22.00 - 23.00</span>
              <h6>Crossfit Lv2</h6>
            </td>
            <td />
            <td className="hover-bg ts-item" data-tsmeta="crossfit">
              <span>21.00 - 23.00</span>
              <h6>Crossfit Lv2</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
{/* Class Time Section End */}


{/* Price Plan Section Begin */}
<section className="price-section spad set_bg" data-setbg="./img/price-bg.jpg" style={{backgroundImage:`url(${PlanChooseImage})`}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h2>CHOOSE YOUR PRICING PLAN</h2>
          <p>These reports started to surface when Congress was having hearings about the<br />
            painkiller, Vioxx. A Food and Drug Administration staff member.</p>
        </div>
        <div className="toggle-option">
          <ul>
            <li>Monthly</li>
            <li>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider" />
              </label>
            </li>
            <li>Years</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      {
        pricingData.map((items)=>{
          return(
          <>
              <div className="col-lg-4">
        <div className="single-price-plan">
          <h4>Normal</h4>
          <div className="price-plan">
            <h2>&nbsp;{items.normal_fee} <span>Rs </span></h2>
            <p>Monthly</p>
          </div>
          <ul>
            <li>{items.normal_txt_one}</li>
            <li>{items.normal_txt_two}</li>
            <li>FREE drinking package</li>
            {/* <li>1 Free personal training</li> */}
          </ul>
          <a href="#" className="primary-btn price-btn">Get Started</a>
        </div>
      </div>
          </>
          )
        })
      }

    {
      pricingData.map((items)=>{
        return(
          <>
                <div className="col-lg-4">
        <div className="single-price-plan">
          <h4>Professional</h4>
          <div className="price-plan">
            <h2>&nbsp;{items.professional_fee} <span>Rs</span></h2>
            <p>Monthly</p>
          </div>
          <ul>
            <li>{items.prof_txt_one}</li>
            <li>{items.prof_txt_two}</li>
            <li>FREE drinking package</li>
            {/* <li>2 Free personal training</li> */}
          </ul>
          <a href="#" className="primary-btn price-btn">Get Started</a>
          <div className="tic-text">
            <i className="fa fa-star" />
          </div>
        </div>
      </div>

          </>
        )
      })
      
    }

    {
      pricingData.map((items)=>{
        return(
          <>
        <div className="col-lg-4">
        <div className="single-price-plan">
          <h4>Advanced</h4>
          <div className="price-plan">
            <h2>&nbsp;{items.advanced_Fee} <span>Rs</span></h2>
            <p>Monthly</p>
          </div>
          <ul>
            <li>{items.adv_txt_one}</li>
            <li>{items.adv_txt_two}</li>
            <li>FREE drinking package</li>
            {/* <li>5 Free personal training</li> */}
          </ul>
          <a href="#" className="primary-btn price-btn">Get Started</a>
        </div>
      </div>

          </>
        )
      })
    }


    </div>
  </div>
</section>
{/* Price Plan Section End */}

{/* Choseus Section Begin */}
<section className="chooseus-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h2>Why People Choose Us</h2>
          <p>Our sport experts and latest sports equipment are the winning combination.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="choose-item">
          <img src={iconOne} alt="icon-img" />
          <h5>Support 24/24</h5>
          <p>One of the best ways to make a great vacation quickly horrible is to choose the wrong
            accommodations for your trip. </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="choose-item">
          <img src={iconTwo} alt="icon-img" />
          <h5>Our trainer</h5>
          <p>If you are an infrequent traveler you may need some tips to keep the wife happy while you are
            jet setting around the globe.</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="choose-item">
          <img src={iconThree} alt="icon-img" />
          <h5>Personalized sessions</h5>
          <p>To succeed at any endeavor, you must stay the course…no matter what the cost! Here are some
            surefire tips to help you on your journey.</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="choose-item">
        <img src={iconFour} alt="icon-img" />
          <h5>Our equipment</h5>
          <p>Rugby and Stratford-upon-Avon. Additionally, there are many things to see and do in and
            around Coventry itself.</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="choose-item">
        <img src={iconFive} alt="icon-img" />
          <h5>Classes daily</h5>
          <p>We would just not have the will in us to go about our daily lives. Its motivation that helps
            us get through the most mundane.</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="choose-item">
        <img src={iconSix} alt="icon-img" />
          <h5>Focus on your health</h5>
          <p>But there is only so far we can go within the constraints of a family budget in building the
            perfect telescopic operation.</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Choseus Section End */}



{/* Cta Section Begin */}
<section className="cta-section pb-5 mb-1 mt-1">
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



{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
{/* Map Section Begin */}
<div className="map">
  <iframe title="gym-map" src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed" height={590} style={{border: 0}} allowFullScreen  />
  <div className="map-contact-detalis">
    <div className="open-time">
      <h5>Weekday:</h5>
      <ul>
        <li>Weekday: <span>06:30 - 11:00</span></li>
        <li>Saturday: <span>07:00 - 22:00</span></li>
        <li>Sunday: <span>09:00 - 18:00</span></li>
      </ul>
    </div>
    <div className="map-contact-form">
      <h5>Contact Us</h5>
      <form action="#">
        <input type="text" placeholder="Name" />
        <input type="text" className="phone" placeholder="Phone" />
        <textarea placeholder="Message" defaultValue={""} />
        <button type="submit" className="site-btn">Submit Now</button>
      </form>
    </div>
  </div>
</div>
{/* Map Section End */}
</>
    }



    </>
  )
}

export default Main