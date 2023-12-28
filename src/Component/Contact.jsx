import React from 'react'

const Contact = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-12">
                <h2 className='text-center mb-5'>Contact Page</h2>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.823701543612!2d77.00794360582775!3d28.578592095380262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a98249db801%3A0x1c3c88481a4eb490!2sSatya%20Public%20School!5e0!3m2!1sen!2sin!4v1699860246938!5m2!1sen!2sin" width="100%" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <div className="col-12 formWithImaget mb-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-form">
                      <form action="https://formspree.io/f/xqkvoadd" method='POST' className='contact__inputs'>
                        <input type="text" placeholder='username' name='username' required autoComplete='off'  />

                        <input type="email" name='Email' placeholder='Email' autoComplete='off' required  />

                        <textarea name="message" id="" placeholder='enter your message' cols="30" rows="4" required />

                        <input type="submit" className='btn'/>

                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 FormsImgSecs">
                    <img src="./images/contactPage.jpg" alt="ContactPage" className='img-fluid'/>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact;