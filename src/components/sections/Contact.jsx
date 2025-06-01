import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await fetch('https://formsubmit.co/ajax/aarongoel8@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission!',
          _captcha: 'false',
        }),
      });

      const result = await res.json();

      if (result.success === 'true') {
        toast.success('Message sent successfully!', {
          position: 'bottom-right',
          autoClose: 3000,
          theme: 'dark',
        });

        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        throw new Error();
      }
    } catch {
      toast.error('Failed to send message. Please try again.', {
        position: 'bottom-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  return (
    <section
      data-aos="fade-up"
      id="contact"
      className="py-10 px-6 bg-black text-white flex justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full max-w-xl p-10 rounded-lg shadow-lg bg-zinc-900"
      >
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>

        <button
          type="submit"
          className="cursor-pointer bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </section>
  );
};

export default Contact;
