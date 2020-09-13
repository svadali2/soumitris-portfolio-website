import React from 'react';
import '../styles/Contact.css';

function Contact() {

  function handleSubmit(e){

  }

  return (
    <div>
    <h4>Do feel free to reach out to me with any work enquiries.I am open to pro-bono and paid work at the moment. Do include important details about the project such as what is the specific job at hand, how many photographs are required and the timeline. </h4>
    <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
            <input placeholder="Name" className="form-control" />
        </div>
        <div className="form-group">
            <input placeholder="Email Address" className="form-control" />
        </div>
        <div className="form-group">
            <textarea placeholder="Message" className="text-specific" cols="40" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default Contact;
