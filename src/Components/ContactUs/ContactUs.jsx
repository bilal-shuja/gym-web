import React,{useState, useEffect} from 'react'

const ContactUs = () => {
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
   {/* Map Section Begin */}
<div className="contact-map" style={{marginTop:"6em"}}>
  <iframe title="gym-map"  src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed" height={530} style={{border: 0}} allowFullScreen />
  {/* <div className="map-hover">
    <h5>New York</h5>
    <ul>
      <li>Weekdays: 10.00 - 23.00</li>
      <li>Saturday: 10.00 - 23.00</li>
      <li>Sunday: Close</li>
    </ul>
    <i className="icon_pin" />
  </div> */}
</div>
{/* Map Section End */}

  {/* Contact Section Begin */}
  <section className="contact-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="contact-info">
            <h4>Information</h4>
            <ul>
              <li><i className="fa fa-phone" />(12)-100-100-100</li>
              <li><i className="fa fa-envelope" />Info.colorlib@gmail.com</li>
            </ul>
          </div>
          <div className="contact-address">
            <h4>Address</h4>
            <ul>
              <li><i className="fa fa-map-marker" /> Iris Watson, Mary land, United State., New York City
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-1">
          <div className="contact-form">
            <h4>Get in touch</h4>
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Message" defaultValue={""} />
                  <button type="submit" className="c-btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section End */}
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

export default ContactUs