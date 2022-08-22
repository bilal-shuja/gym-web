import React from 'react';
import {useEffect, useState} from "react";
import AboutBread from '../img/about-bread.jpg';
import ClassOne from '../img/classes/class-1.jpg';
import ClassTwo from '../img/classes/class-2.jpg';
import ClassThree from '../img/classes/class-3.jpg';
import ClassFour from '../img/classes/class-4.jpg';
import {Link} from 'react-router-dom';
import iconOne from '../img/icons/chose-icon-1.png';
import iconTwo from '../img/icons/chose-icon-2.png';
import iconThree from '../img/icons/chose-icon-3.png';
import iconFour from '../img/icons/chose-icon-4.png';
import iconFive from '../img/icons/chose-icon-5.png';
import iconSix from '../img/icons/chose-icon-6.png';

import testimonial from '../img/testimonial-bg.jpg';
import scheduleImg from '../img/video-bg.jpg';

const Schedule = () => {

    const [loading, setLoading] = useState(true);

    const loadingSpinner =  async  ()=>{
                // Wait for two second
                await new Promise((r) => setTimeout(r, 1000));
  
                // Toggle loading state
                setLoading(false);
    }

    useEffect(() => {
        loadingSpinner();
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
  <section className="breadcrumb-section set_bg spad mt-5" data-setbg="img/about-bread.jpg" style={{backgroundImage:`url(${scheduleImg})`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>SCHEDULE &amp; CLASSES</h2>
            <div className="breadcrumb-controls">
              <Link to="/"><i className="fa fa-home" /> Home</Link>
              <span>Schedule</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb End */}
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
      <div className="row">
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
    </div>
  </section>
  {/* Class Time Section End */}

  {/* <section className="classes-section schedule-page">
    <div className="class-title">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h2>Our Classes</h2>
              <p>Our Crossfit experts can help you discover new training techniques and exercises
                <br />that offer a dynamic and efficient full-body workout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="classes-item set-bg" data-setbg="img/classes/class-1.jpg" style={{backgroundImage:`url(${ClassOne})`}}>
            <h4>Crossfit Level 1</h4>
            <p>Sufferers around the globe will be happy to hear that there are sleep apnea remedies.</p>
            <a href="#" className="primary-btn class-btn">Read More</a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="classes-item set-bg" data-setbg="img/classes/class-2.jpg" style={{backgroundImage:`url(${ClassTwo})`}}>
            <h4>BootCamp</h4>
            <p>The oil, also called linseed oil, has many industrial uses – it is an important ingredient
            </p>
            <a href="#" className="primary-btn class-btn">Read More</a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="classes-item set-bg" data-setbg="img/classes/class-3.jpg" style={{backgroundImage:`url(${ClassThree})`}}>
            <h4>Energy Blast</h4>
            <p>It is a very common occurrence like cold or fever depending upon your lifestyle. </p>
            <a href="#" className="primary-btn class-btn">Read More</a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="classes-item set-bg" data-setbg="img/classes/class-4.jpg" style={{backgroundImage:`url(${ClassFour})`}}>
            <h4>CLASSIC BODY BALANCE</h4>
            <p>The procedure is usually a preferred alternative to photorefractive keratectomy,</p>
            <a href="#" className="primary-btn class-btn">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section> */}

<section className="testimonial-section set-bg spad" data-setbg="img/testimonial-bg.jpg" style={{backgroundImage:`url(${testimonial})`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="testimonial-slider owl-carousel">
            <div className="ts-item">
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>The “Minimal-Repair Technique” is a revolutionary surgical procedure in the treatment
                for hernia. Initially intended for correcting inguinal hernia.</h4>
              <div className="author-name">
                <h5>Stacy Mc Neeley</h5>
                <span>CEP’s Director</span>
              </div>
              <div className="author-pic">
                <img src="img/author-pic.png" alt />
              </div>
            </div>
            <div className="ts-item">
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>The “Minimal-Repair Technique” is a revolutionary surgical procedure in the treatment
                for hernia. Initially intended for correcting inguinal hernia.</h4>
              <div className="author-name">
                <h5>Stacy Mc Neelek</h5>
                <span>CEP’s Director</span>
              </div>
              <div className="author-pic">
                <img src="img/author-pic.png" alt />
              </div>
            </div>
            <div className="ts-item">
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>The “Minimal-Repair Technique” is a revolutionary surgical procedure in the treatment
                for hernia. Initially intended for correcting inguinal hernia.</h4>
              <div className="author-name">
                <h5>Stacy Mc Neelel</h5>
                <span>CEP’s Director</span>
              </div>
              <div className="author-pic">
                <img src="img/author-pic.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Choseus Section Begin */}
  <section className="chooseus-section schedule-page spad">
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
        <div className="col-lg-4">
          <div className="choose-item">
          <img src={iconOne} alt="icon-img" />
            <h5>Support 24/24</h5>
            <p>One of the best ways to make a great vacation quickly horrible is to choose the wrong
              accommodations for your trip. </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="choose-item">
          <img src={iconTwo} alt="icon-img" />
            <h5>Our trainer</h5>
            <p>If you are an infrequent traveler you may need some tips to keep the wife happy while you are
              jet setting around the globe.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="choose-item">
          <img src={iconThree} alt="icon-img" />
            <h5>Personalized sessions</h5>
            <p>To succeed at any endeavor, you must stay the course…no matter what the cost! Here are some
              surefire tips to help you on your journey.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="choose-item">
          <img src={iconFour} alt="icon-img" />
            <h5>Our equipment</h5>
            <p>Rugby and Stratford-upon-Avon. Additionally, there are many things to see and do in and
              around Coventry itself.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="choose-item">
          <img src={iconFive} alt="icon-img" />
            <h5>Classes daily</h5>
            <p>We would just not have the will in us to go about our daily lives. Its motivation that helps
              us get through the most mundane.</p>
          </div>
        </div>
        <div className="col-lg-4">
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

export default Schedule