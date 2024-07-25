import '../scss/contact.scss';
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

const Contact = () => {
 
    const form = useRef(),
    [input, setInput] = useState(""),
    [modalIsOpen, setIsOpen] = React.useState(false),
    emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let timer,
    timeoutVal = 1000,
    customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const validateEmail = (e) => {
      const email = e.target.value;
    
      window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
      timer = window.setTimeout(() => {
        const isValidEmail = emailRegex.test(email);
        const invalid = document.querySelector('.invalid-email');
        const required = document.querySelector('.required-email');
        if(isValidEmail){
          invalid.classList.add('d-none');
        }
        else{
          invalid.classList.remove('d-none');
        }
        if(email.length > 0){
          required.classList.add('d-none');
        }
        setInput(email);
      }, timeoutVal);
    
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const required = document.querySelector('.required-email');

      if(sessionStorage.getItem("sentEmail")){
        openModal();
        return;
      }

      if(input && input.length && input.match(emailRegex)){
        required.classList.add('d-none');
        const templateId = 'template_kw6hwqj';
        const serviceId = 'service_3twr177';

        var templateParams = {
          name: 'James',
          notes: 'Check this out!',
        };
        sendFeedback(serviceId,templateId, templateParams)
      }
      else{
        required.classList.remove('d-none');
      }
    };

    function sendFeedback (serviceId, templateId, variables)  {
      emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: 'GxXYFeKvaLEc760OF',
      })
      .then(
        () => {
          sessionStorage.setItem("sentEmail", "1");
          document.querySelector(".form").reset();;
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

    return (
      
      <div id="Contact" className="page-section contact-section p-t-80 p-b-80 s-m-t-50 s-m-t-lg-65">
        <div className="content">
            <div className="row">
              <div className="col-12 d-flex">
                <div className="form-container">
                  <h3 className="fs-30 fs-lg-60">Contact Me!</h3>
                  <form ref={form} className="form m-t-40 d-flex flex-column">
                    <label className="d-flex flex-column">
                      <span className="fs-18 m-b-10"><b>Your Name</b></span>
                      <input type="text" placeholder="What's your name?" name="user_name"/>
                    </label>
                    <label className="d-flex flex-column">
                      <span className="fs-18 m-b-10"><b>Your Email</b></span>
                      <input type="email" name="user_email" onKeyUp={validateEmail} placeholder="What's your email?" required/>
                      <span className="invalid-email d-none">Invalid Email!!!</span>
                      <span className="required-email d-none">Required Email!!!</span>
                    </label>
                    <label className="d-flex flex-column">
                      <span className="fs-18 m-b-10"><b>Your message</b></span>
                      <textarea name="message" placeholder="What's your message? (optional)"/>
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
        <Modal
          appElement={document.getElementById('root') || undefined}
          isOpen={modalIsOpen}
          onClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='btn-container'>
            <button className="close-btn" onClick={closeModal}></button>
          </div>
          <div>
            <h2>Hello,</h2>
            <p>Only 1 request per session.</p>
          </div>
        </Modal>
      </div>
    );
}

  
export default Contact;