import './Contact.css';
import {useState} from "react";

const FORM_ENDPOINT = '';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
          required/>
      </label>
      <input type='submit' value='Submit' id='submit'/>
    </form>
  );
}

export default Contact;