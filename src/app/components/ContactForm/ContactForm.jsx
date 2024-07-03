
"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import styles from './ContactForm.module.css'

const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/sendEmail";
  
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
  
    const response = await fetch(endpoint, options);
    const resData = await response.json();
  
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >

      <div className="z-10">
        <h5 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a8dadc] via-[#457b9d] to-[#1d3557] mb-4">
          Let`s Connect
        </h5>
        <p className="text-black mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities. You can contact me for further information. I&apos;ll get back to you asap.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/MVCorreas">
            <Image src='/github-icon.svg' alt="Github Icon" width={60} height={60}/>
          </Link>
          <Link href="https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/">
            <Image src='/linkedin-icon.svg' alt="Linkedin Icon"  width={60} height={60}/>
          </Link>
        </div>
      </div>

      <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value)
                }}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r  from-[#a8dadc] via-[#457b9d] to-[#1d3557] text-white hover:bg-yellow-300 hover:text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        
          {
          emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">
            Thank you for contacting me!
          </p>
        )} 
      </div>
    </section>
  );
}

export default ContactForm