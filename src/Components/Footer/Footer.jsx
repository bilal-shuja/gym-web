import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Footer Section Begin */}
<footer className="footer-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="footer-logo-item">
          <div className="f-logo">
            <a href="logo" className="d-flex" style={{fontSize:"3em" }}>
            <i className="fa-solid fa-dumbbell" style={{ color: "#e4381C"}}></i>&nbsp;
              {/* <p  style={{fontSize:"0.5em",marginTop:"0.6em"}}> Gym Ka Name</p> */}
              </a>
            
          </div>
          <p>Despite growth of the Internet over the past seven years, the use of toll-free phone numbers
            in television advertising continues.</p>
          <div className="social-links">
            <h6>Follow us</h6>
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-google-plus" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-instagram" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 offset-lg-1">
        <div className="footer-widget">
          <h5>Our Blog</h5>
          <div className="footer-blog">
            <a href="#" className="fb-item">
              <h6>Most people who work</h6>
              <span className="blog-time"><i className="fa fa-clock-o" /> Jan 02, 2019</span>
            </a>
            <a href="#" className="fb-item">
              <h6>Freelance Design Tricks How </h6>
              <span className="blog-time"><i className="fa fa-clock-o" /> Jan 02, 2019</span>
            </a>
            <a href="#" className="fb-item">
              <h6>have a computer at home have had </h6>
              <span className="blog-time"><i className="fa fa-clock-o" /> Jan 02, 2019</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <div className="footer-widget">
          <h5>Program</h5>
          <ul className="workout-program">
            <li><a href="#">Bodybuilding</a></li>
            <li><a href="#">Running</a></li>
            <li><a href="#">Streching</a></li>
            <li><a href="#">Weight Loss</a></li>
            <li><a href="#">Gym Fitness</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="footer-widget">
          <h5>Get Info</h5>
          <ul className="footer-info">
            <li>
              <i className="fa fa-phone" />
              <span>Phone:</span>
              (12) 345 6789
            </li>
            <li>
              <i className="fa fa-envelope-o" />
              <span>Email:</span>
              Colorlib.info@gmail.com
            </li>
            <li>
              <i className="fa fa-map-marker" />
              <span>Address</span>
              Iris Watson, Box 283 8562, NY
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="ct-inside">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */} </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* Footer Section End */}

    </>
  )
}

export default Footer