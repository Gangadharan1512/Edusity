import React from 'react'
import './Contact.css'
import msg_icon from '../../edusity_assets/msg-icon.png'
import mail_icon from '../../edusity_assets/mail-icon.png'
import phone_icon from '../../edusity_assets/phone-icon.png'
import location_icon from '../../edusity_assets/location-icon.png'
import white_arrow from '../../edusity_assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01326ac4-7906-40b7-8189-4e36378225ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out thriugh contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional sercive to ous university community</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@Edusity.org </li>
                <li><img src={phone_icon} alt="" />+91-9156849856 </li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label>Phone</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
                <label>Write Your Message Here</label>
                <textarea name="message" id="" rows='6' placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact