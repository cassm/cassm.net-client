import './Contact.css';
import {useEffect, useState} from "react";
import {validate as validateEmail} from 'email-validator';
import {init as emailJsInit, sendForm} from '@emailjs/browser';

const FORM_ENDPOINT = '';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hasBlurred, setHasBlurred] = useState({});
  const [state, setState] = useState({});

  useEffect(() => {
    // TODO: this needs moving onto the backend
    emailJsInit(`${process.env.REACT_APP_EMAILJS_API_KEY}`);
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
    sendForm('cassm_gmail', 'cassm_net_contact_form', '.contact-form');
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (hasBlurred[e.target.name]) {
      e.target.style.backgroundColor = getBackgroundColor(e.target.id, e.target.value);
    }
  }

  const handleBlur = (e) => {
    e.target.style.backgroundColor = getBackgroundColor(e.target.id, e.target.value);

    if (e.target.value !== '') {
      // don't provide colour feedback until the field has blurred with content
      setHasBlurred({...hasBlurred, [e.target.name]: true});
    } else {
      // ...and reset this state if it's blurred while empty
      setHasBlurred({...hasBlurred, [e.target.name]: true});
    }
  }

  const getBackgroundColor = (fieldName, value) => {
    if (value === '') {
      return 'white';
    } else if (fieldName === 'email' && !validateEmail(value)) {
      return '#f57272';
    } else {
      return '#72f5bf';
    }
  }

  const createTextField = (name, placeholder) => {
    return (
      <label>
        {`${name[0].toUpperCase() + name.slice(1)}:`}
        <input
          type='text'
          name={name}
          id={name}
          value={state[name] || ''}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          required/>
      </label>
    );
  }

  if (submitted) {
    return (
      <>
        <h2>Thanks for getting in touch!</h2>
        <p>I'll get back to you shortly</p>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      className='contact-form'
    >
      {createTextField('name', 'Your name')}
      {createTextField('email', 'your@email.address')}
      {createTextField('message', 'Message text goes here')}
      <input type='submit' value='Submit' id='submit'/>
    </form>
  );
}

export default Contact;