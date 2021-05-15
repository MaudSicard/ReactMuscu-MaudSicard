import React from 'react';
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <form className= "form">
      <input className= "form_input" type="text" placeholder="votre adresse mail" />
      <textarea className= "form_textarea" placeholder="votre message"></textarea>
      <button className= "form_button">Envoyer</button>
    </form>
  </div>

);
export default Contact;
