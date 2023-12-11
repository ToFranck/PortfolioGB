
// 'service_j6tfp97'
// , 'template_0inqnha'
// , form.current, 
// 'UJ7skxHQOTjKnKHlH'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export const Contact = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation du formulaire
    // if (form.current.checkValidity()) {
    //   emailjs.sendForm(
    //     'service_l0d39t8',
    //     'template_tnrm38v',
    //     form.current,
    //     'sNslYoff6On50Hjhe'
    //   ).then(
    //     (result) => {
    //       console.log(result.text);
    //       setFormSubmitted(true); // Marque le formulaire comme soumis
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    //   // Réinitialisez les champs du formulaire
    //   form.current.reset();
    // }
  };

  return (
    <>

    <div id='contact' className='contact'>
      <h2>Contact</h2>
      <p>Vous avez un projet en tête ou une question ? N'hesitez pas et contactez moi.</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" required />
        <label>Email</label>
        <input type="email" name="from_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Valider" />
        {formSubmitted && (
        <p className='msg'>Merci! t'as requêtes a bien était prise en compte.</p>
      )}
      </form>

      
    </div>
    </>
  );
};