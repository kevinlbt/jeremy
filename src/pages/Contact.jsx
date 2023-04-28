import React, { useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';

const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact() {

  const [IfMailSend, setIfMailSend] = useState(false);
  const [mailResponse, setMailResponse] = useState(null);
  const [ifError, setIfError] = useState(false);
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [replyTo, setReplyTo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!replyTo || !name || !firstname || !text || !subject) {
      setMailResponse("Veuillez remplir tous les champs.");
      setIfMailSend(true);
      setIfError(true);
      return;
    }
    if (!isValidEmail(replyTo)) {
      setMailResponse("Veuillez saisir une adresse email valide");
      setIfMailSend(true);
      setIfError(true);
      return;
    }

    const sanitizeName = DOMPurify.sanitize(name);
    const sanitizeFirstname = DOMPurify.sanitize(firstname);
    const sanitizeSubject = DOMPurify.sanitize(subject);
    const sanitizeText = DOMPurify.sanitize(text);
    const sanitizeReplyTo = DOMPurify.sanitize(replyTo);

    const data = {
      firstname: sanitizeFirstname,
      name: sanitizeName,
      subject: sanitizeSubject,
      text: sanitizeText,
      replyTo: sanitizeReplyTo
    };

    try {
      const response = await axios.post('http://localhost:3050/api/sendEmail', data, {
        headers: {
          'authorization': AUTH_TOKEN
        }
      });
      setIfError(false);
      setIfMailSend(true)
      setMailResponse(response.data)
    } catch (error) {
      console.error(error);

    }
  };

  function HandleNameChange(e) {
    setName(e.target.value);
  }
  function HandleFirstnameChange(e) {
    setFirstname(e.target.value);
  }
  function HandleEmailChange(e) {
    setReplyTo(e.target.value);
  }
  function HandleSubjectChange(e) {
    setSubject(e.target.value);
  }
  function HandleMessageChange(e) {
    setText(e.target.value);
  }

    return (
      <section className="contact">
        <h1 className="text-6xl lg:text-7xl text-center m-7">Contact</h1>
        {IfMailSend ? <p className={`text-3xl text-center ${ifError ? "text-red-500" : "text-green-500"}`}>{mailResponse}</p> : null}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:w-4/5 mx-auto">
          <div className="img-contact w-2/5 lg:w-2/6 h-auto m-12 lg:m-24">
            <img className="rounded" srcSet="../assets/contactjeremy.webp" alt="jeremy with camera in Wheat field" />
          </div> 
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center formulaire w-2/4 lg:w-1/3 lg:pt-9 mx-auto m-12" >
            <input onChange={HandleNameChange} type="text" name="name" placeholder=" nom" className="w-full rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <input onChange={HandleFirstnameChange} type="text" name="firstname" placeholder=" prénom" className="w-full rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <input onChange={HandleEmailChange} type="email" name="email" placeholder=" Email" className="w-full rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <input onChange={HandleSubjectChange} type="text" name="subject" placeholder=" Sujet" className="w-full rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <textarea onChange={HandleMessageChange} name="message" rows="7" className="w-full rounded-md py-1.5 focus:ring-4 focus:ring-green-700"></textarea>
            <button type="submit" className="text-center my-6 rounded-md px-12 py-2 text-xl">Envoyer</button>
          </form>
        </div>
      </section>
    );
  }
  