import React from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('soumitri', 'template_no343gl', e.target, 'user_ZDchW83s8BArzn46UlDbL')
      .then((result) => {
          console.log(result.text);
          document.getElementById("contact-form").reset();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div>
    <h4>Do feel free to reach out to me with any work enquiries.I am open to pro-bono and paid work at the moment. Do include specific details about the project involved and the timeline. </h4>
    <form id="contact-form" onSubmit={sendEmail}>
        <input placeholder="Name" name="name" className="form-control" />
        <input placeholder="Email" name="email" className="form-control" />
        <textarea placeholder="Message" name="message" className="text-specific" cols="40" rows="5"></textarea>
        <button type="submit" value="Send" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default Contact;
