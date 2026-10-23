import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// status : 'idle' | 'sending' | 'success' | 'error'
const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Erreur EmailJS :', error);
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-blue-500 focus:outline-none';

  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-500">Contact</h2>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Une offre d’alternance ou une question sur un projet ? Écrivez-moi, je réponds rapidement.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Nom</label>
            <input id="name" type="text" name="name" required autoComplete="name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
            <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
            <textarea id="message" name="message" rows="5" required className={inputClass} />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-md transition"
          >
            {status === 'sending' ? 'Envoi en cours…' : 'Envoyer'}
          </button>

          <div aria-live="polite">
            {status === 'success' && (
              <p className="text-green-400 font-medium">Merci, votre message a bien été envoyé.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-medium">
                L’envoi a échoué. Réessayez ou écrivez-moi directement par email.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
