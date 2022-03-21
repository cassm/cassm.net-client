import './Contact.css';
import {useState} from "react";
import {validate as validateEmail} from 'email-validator';

const FORM_ENDPOINT = '';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hasBlurred, setHasBlurred] = useState({});

  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = () => {
    setSubmitted(true);
    //TODO: actually do anything
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
    >
      <label>
        Name:
        <input
          type='text'
          name='name'
          id='name'
          value={state.name}
          placeholder='Your name'
          onChange={handleChange}
          onBlur={handleBlur}
          required/>
      </label>
      <label>
        Email:
        <input
          type='text'
          name='email'
          id='email'
          value={state.email}
          placeholder='your@email.address'
          onChange={handleChange}
          onBlur={handleBlur}
          required/>
      </label>
      <label>
        Message:
        <input
          type='text'
          name='message'
          id='message'
          value={state.message}
          placeholder='Message text goes here'
          onChange={handleChange}
          onBlur={handleBlur}
          required/>
      </label>
      <input type='submit' value='Submit' id='submit'/>
    </form>
  );
}

export default Contact;