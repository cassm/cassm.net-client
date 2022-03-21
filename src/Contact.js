import './Contact.css';
import {useEffect, useState} from "react";
import {validate as validateEmail} from 'email-validator';
import {init as emailJsInit, sendForm} from '@emailjs/browser';
import { useForm } from "react-hook-form";

const FORM_ENDPOINT = '';

const Contact = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // TODO: this needs moving onto the backend
    emailJsInit(`${process.env.REACT_APP_EMAILJS_API_KEY}`);
  }, []);

  const doSubmit = () => {
    setSubmitted(true);
    sendForm('cassm_gmail', 'cassm_net_contact_form', '.contact-form');
  }

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.className = '';
    } else if (e.target.id === 'email' && !validateEmail(e.target.value)) {
      e.target.className = 'errored';
    } else {
      e.target.className = 'valid';
    }
  }

  const createTextField = (inputName, placeholder, options = {}) => {
    return (
      <label>
        {`${inputName[0].toUpperCase() + inputName.slice(1)}:`}
        <input
          type='text'
          id={inputName}
          placeholder={placeholder}
          {...register(
            inputName,
            {
              ...options,
              required: true,
              onBlur: handleBlur,
            })}
        />
        {errors[inputName]?.type === 'required' && <p className='error'>this field is required</p>}
        {errors[inputName]?.type === 'valid_email' && <p className='error'>this field must contain a valid email address</p>}
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
      onSubmit={handleSubmit(doSubmit)}
      className='contact-form'
    >
      {createTextField('name', 'Your name')}
      {createTextField('email', 'your@email.address', {validate: {valid_email: val => validateEmail(val)}})}
      {createTextField('message', 'Message text goes here')}
      <input type='submit' value='Submit' id='submit'/>
    </form>
  );
}

export default Contact;