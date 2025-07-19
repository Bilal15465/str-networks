import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src="./Images/Home/MainHomeBanner.png"
        alt="Banner"
        className="brightness-[0.6] absolute inset-0 w-full h-full object-cover object-[right] -z-10"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Content */}
      <div className="relative w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-20">
        {/* Left Column – You can replace this with real content */}
        <div className="flex flex-col gap-6 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-accent">
            Let’s Connect
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
          Get in touch and we will be happy to prepare an individual offer tailored to your business needs.
Send us an email or call, and our sales team will respond within 24 hours.
          </p>
          <h1>Address : <span className='text-hoverPrimary'> Sector 1, Bucharest, Romania</span></h1>
          <h1>Phone : <span className='text-hoverPrimary'> +40 12345678</span></h1>
          <h1>Email : <span className='text-hoverPrimary'> contact@strnetworks.ro
          </span></h1>
          {/* Optional CTA or contact details here */}
        </div>

        {/* Right Column – Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
