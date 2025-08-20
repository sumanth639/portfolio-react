import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        Let's Work Together
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="mailto:markgarcia4652@gmail.com"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-xl transition font-semibold"
        >
          Send Email
        </a>
        <a
          href="tel:+639204428788"
          className="px-8 py-4 rounded-full bg-gray-800 border border-gray-600 hover:border-purple-500 transition font-semibold text-white"
        >
          Call Now
        </a>
      </div>
    </section>
  );
};

export default Contact;