import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error('Erreur:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">Contact</h2>
        <p className="text-lg text-gray-300 mb-8">
          Tu veux collaborer, discuter ou juste dire bonjour ? Envoie-moi un message 👋
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Ton nom"
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Ton email"
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Ton message"
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
          >
            Envoyer
          </button>
        </form>

        {sent && (
          <p className="mt-4 text-green-400 font-semibold">
            Merci ! Ton message a bien été envoyé ✅
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
