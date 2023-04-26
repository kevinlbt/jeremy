import React, { useState } from "react";

export default function Contact() {

  const [allData, setAllData] = useState([]);
  const [nameData, setNameData] = useState();
  const [firstnameData, setFirstnameData] = useState();
  const [emailData, setEmailData] = useState();
  const [subjectData, setSubjectData] = useState();
  const [messageData, SetMessageData] = useState();

  function HandleNameChange(e) {
    setNameData(e.target.value);
  }
  function HandleFirstnameChange(e) {
    setFirstnameData(e.target.value);
  }
  function HandleEmailChange(e) {
    setEmailData(e.target.value);
  }
  function HandleSubjectChange(e) {
    setSubjectData(e.target.value);
  }
  function HandleMessageChange(e) {
    SetMessageData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAllData([{ name: nameData, firstname: firstnameData, email: emailData, subject: subjectData, message: messageData }])
  }

  console.log(allData);

    return (
      <section className="contact">
        <h1 className="text-7xl text-center m-7">Contact</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:w-4/5 mx-auto">
          <div className="img-contact w-3/5 lg:w-2/6 h-auto m-24">
            <img className="rounded" srcSet="../assets/contactjeremy.webp" alt="jeremy with camera in Wheat field" />
          </div> 
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center formulaire w-2/3 lg:w-1/3 mx-auto m-12" >
            <input onChange={HandleNameChange} type="text" name="name" placeholder=" nom" className="w-full m-7 rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <input onChange={HandleFirstnameChange} type="text" name="firstname" placeholder=" prénom" className="w-full m-7 rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <input onChange={HandleEmailChange} type="email" name="email" placeholder=" Email" className="w-full m-7 rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <input onChange={HandleSubjectChange} type="text" name="subject" placeholder=" Sujet" className="w-full m-7 rounded-md py-1.5 focus:ring-4 focus:ring-green-700" />
            <textarea onChange={HandleMessageChange} name="message" rows="7" className="w-full m-7 rounded-md py-1.5 focus:ring-4 focus:ring-green-700"></textarea>
            <button type="submit" className="text-center my-6 rounded-md px-12 py-2 text-xl">Envoyer</button>
          </form>
        </div>
      </section>
    );
  }
  