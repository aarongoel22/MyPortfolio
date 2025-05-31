import React from 'react';

const Contact = () => {
  return (
    <section data-aos="fade-up" id="contact" className="py-10 px-6 bg-black text-white flex justify-center">
      <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        className="flex flex-col gap-6 w-full max-w-xl p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="p-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>

        <button
          type="submit"
          className="cursor-pointer bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
