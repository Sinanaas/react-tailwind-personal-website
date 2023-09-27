import React, { useRef } from 'react';
// import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

export default function Contacts() {
  function refreshPage() {
    window.location.reload(false);
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); 
 
    emailjs.sendForm('service_88ziwsr', 'template_5ty8935', form.current, 'MXZpCdpJz8PVU2j9_')
      .then((result) => {
        console.log("Result:" + result)
        alert("Successfully sent the email!")
        refreshPage()
      }, (error) => {
        console.log("Error:" + error)
      });
  };

  return (
    <div className="all-container dark:bg-neutral-800 text-amber-50 min-w-[100%] md:flex md:flex-col">
      <div className="contacts-container flex py-28  min-w-[100%]">
        <div className="left-container hidden md:block md:flex-end md:flex md:w-[50%] md:text-right md:items-center md:justify-end md:pr-16 md: ">
          <h1 className='md:text-[90px] md:font-bold md:w-[60%]'>Send Me A Message</h1>
        </div>
        <div className="hidden md:block line border-[1.5px] border-amber-50 rounded ">

        </div>
        <div className="right-container flex md:w-[50%] text-left  w-[100%] md:justify-start justify-center items-center md:pl-16 ">
        <form ref={form} onSubmit={sendEmail} className='w-[80%] max-w-[100%] md:w-[60%] '>
        <div className="gap-4 flex flex-col  w-full">
          <div className="name-container flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="nameTxt" placeholder='Your name' className='rounded p-2 dark:bg-neutral-800 border-amber-50 border-[1px] mt-2'/>
          </div>
          <div className="from-container flex flex-col">
            <label htmlFor="from">From</label>
            <input type="email" pattern=".+@gmail\.com" name="from" id="fromTxt" placeholder='Your gmail' className='rounded p-2 dark:bg-neutral-800 border-amber-50 border-[1px] mt-2'/>
          </div>
          <div className="message-container flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="What's on your mind" rows="8" required className='rounded p-2 dark:bg-neutral-800 border-amber-50 border-[1px] mt-2 w-[100%]'></textarea>
          </div>
          <div className="submit-container flex justify-center md:justify-start">
            <button type='submit' className='bg-amber-50 text-neutral-800 px-4 font-semibold w-full md:w-44 rounded py-[4px]'>Submit</button>
          </div>
        </div>
        </form>
        </div>
      </div>
      <div className="footer pb-8 2-full ">
        <ul className="contact-list gap-8 md:gap-20 flex flex-col  items-center md:flex-row justify-center  ">
          <li className='gap-2 flex items-center'>
            <FontAwesomeIcon icon={faPhone} id="phone-icon" />
            <span className="contact-text">+6281395224240</span>
          </li>
          <li className='gap-2 flex items-center'>
            <FontAwesomeIcon icon={faEnvelope} id="email-icon" />
            <span className="contact-text">pudge842@gmail.com</span>
          </li>
          <li className='gap-2 flex items-center'>
            <FontAwesomeIcon icon={faGithub} id="git-icon" />
            <a href="https://github.com/Sinanaas" target='_blank'><span className="contact-text">Sinanaas</span></a>
          </li>
          <li className='gap-2 flex items-center'>
            <FontAwesomeIcon icon={faInstagram} id="insta-icon" />
            <a href="https://www.instagram.com/sinanaas/" target='_blank'><span className="contact-text">@sinanaas</span></a>
          </li>
          <li className='gap-2 flex items-center'>
            <FontAwesomeIcon icon={faLinkedin} id="linkedIn-icon" />
            <a href="https://www.linkedin.com/in/m-sinan-as-836b13201/" target='_blank'><span className="contact-text">M Sinan As</span></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
