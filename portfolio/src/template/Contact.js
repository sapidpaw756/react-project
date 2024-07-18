import '../scss/contact.scss';
import React, { useState } from "react";

const Contact = () => {
    const [input, setInput] = useState(""),
    emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let timer,
    timeoutVal = 1000;

    const validateEmail = (e) => {
      const email = e.target.value;
    
      window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
      timer = window.setTimeout(() => {
        const isValidEmail = emailRegex.test(email);
        const invalid = document.querySelector('.invalid-email');
    
        if(isValidEmail){
          invalid.classList.add('d-none');
        }
        else{
          invalid.classList.remove('d-none');
        }
        setInput(email);
      }, timeoutVal);
    
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      if(input && input.length && input.match(emailRegex)){
        console.log('true');
      }
    };
    return (
      <div id="Contact" className="page-section contact-section p-t-80 p-b-80 s-m-t-80">
        <div className="content">
            <div className="row">
              <div className="col-12 d-flex">
                <div className="form-container">
                  <h3 className="fs-30 fs-lg-60">Contact Me!</h3>
                  <form className="form m-t-40 d-flex flex-column">
                    <label className="d-flex flex-column">
                      <span className="fs-18 m-b-10"><b>Your Name</b></span>
                      <input type="text" placeholder="What's your name?"/>
                    </label>
                    <label className="d-flex flex-column">
                      <span className="fs-18 m-b-10"><b>Your Email</b></span>
                      <input type="email" onKeyUp={validateEmail} placeholder="What's your email?" required/>
                      <span className="invalid-email d-none">Invalid Email!!!</span>
                    </label>
                    <label className="d-flex flex-column">
                      <span className="fs-18 m-b-10"><b>Your message</b></span>
                      <textarea  placeholder="What's your message? (optional)"/>
                    </label>
                    <button
                    className='btn-submit'
                    onClick={handleSubmit}
                    type='submit'
                    >
                        SEND
                    </button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
}

  
export default Contact;