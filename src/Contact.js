import './Contact.css';
import {useEffect, useState} from "react";
import {validate as validateEmail} from 'email-validator';
import {init as emailJsInit, sendForm} from '@emailjs/browser';
import { useForm } from "react-hook-form";

const FORM_ENDPOINT = '';

const Contact = (props) => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // TODO: this needs moving onto the backend
    emailJsInit(`${process.env.REACT_APP_EMAILJS_API_KEY}`);
  }, []);

  const doSubmit = (formData, e) => {
    setSubmitted(true);
    console.log(formData);
    sendForm('cassm_gmail', 'cassm_net_contact_form', e.target);
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
      id='contact-form'
    >
      <label>
        Name
        <input
          type='text'
          id='name'
          placeholder='Your name'
          {...register(
            'name',
            {
              required: true,
              onBlur: handleBlur,
            })}
        />
        {errors.name?.type === 'required' && <p className='error'>this field is required</p>}
      </label>
      <label>
        Email
        <input
          type='text'
          id='email'
          placeholder='your@email.address'
          {...register(
            'email',
            {
              required: true,
              validate: {
                valid_email: val => validateEmail(val)
              },
              onBlur: handleBlur,
            })}
        />
        {errors.email?.type === 'required' && <p className='error'>this field is required</p>}
        {errors.email?.type === 'valid_email' && <p className='error'>this field must contain a valid email address</p>}
      </label>
      <label>
        Message
        <textarea
          id='message'
          rows='10'
          placeholder='Message text goes here'
          {...register(
            'message',
            {
              required: true,
              onBlur: handleBlur,
            })}
        />
        {errors.message?.type === 'required' && <p className='error'>this field is required</p>}
      </label>
      <input type='submit' value='Submit' id='submit'/>
    </form>
  );
}

export default Contact;