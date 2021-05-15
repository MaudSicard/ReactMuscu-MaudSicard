import React from 'react';
import './espacePersonnel.scss';

const EspacePersonnel = () => (
  <div className='espacePersonnel'>
    <fom className='form'>
      <input className="form_input" type="text" placeholder="identifiant"/>
      <input className="form_input" type="text" placeholder="mot de passe"/>
      <button className= "form_button">Envoyer</button>
    </fom>
  </div>

);

export default EspacePersonnel;
