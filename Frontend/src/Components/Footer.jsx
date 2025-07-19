import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#12295d] text-white">
      <div className="w-[90%] mx-auto">

        {/* Logo Section */}
        <div className="md:w-[20%] w-[50%] pt-10">
          <NavLink to="/">
            <img
              src="/Images/Navbar/STR_WhiteVersion.png"
              alt="STR Networks Logo"
              className="w-full h-auto"
            />
          </NavLink>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">

          {/* About & Contact Info */}
          <div className="flex flex-col gap-6">
            <p className="text-sm text-zinc-300 leading-relaxed">
              <span className="font-semibold text-white">STR Networks</span> — Empowering the Digital World. <br />
              From voice to enterprise-grade solutions, <br />
              we connect what matters — globally.
            </p>
            <div className="text-sm text-zinc-300 space-y-1">
              <p><span className="font-semibold text-white">Phone:</span> +40 12345678</p>
              <p><span className="font-semibold text-white">Email:</span> contact@strnetworks.ro</p>
              <p><span className="font-semibold text-white">Address:</span> Sector 1, Bucharest, Romania</p>
            </div>
          </div>

          {/* Services (Centered) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold uppercase tracking-wide">Services</h2>
            <NavLink to="/voice" className="text-sm text-zinc-400 hover:text-white transition duration-200">
              Voice Termination
            </NavLink>
            <NavLink to="/enterprise" className="text-sm text-zinc-400 hover:text-white transition duration-200">
              Enterprise
            </NavLink>
            <NavLink to="/messaging" className="text-sm text-zinc-400 hover:text-white transition duration-200">
              Messaging
            </NavLink>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold uppercase tracking-wide">Why STR Networks?</h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              STR Networks delivers seamless, secure, and scalable communication solutions. 
              Built on trust — designed for global impact.
            </p>
            <NavLink to="/contact">
              <button className="uppercase cursor-pointer bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-95 w-fit">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-zinc-600 w-[90%] mx-auto"></div>

      {/* Footer Bottom */}
      <div className="py-4 text-center text-sm text-zinc-400">
        © 2025 STR Networks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
