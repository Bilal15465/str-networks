import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-lg text-white text-sm font-light">
      <h1 className='text-4xl font-bold text-accent text-center py-6'>Get in Touch</h1>
      <form className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
            required
          />
        </div>

        {/* Email, Company, Industry */}
        <input
          type="email"
          placeholder="Email (business email only)"
          className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
        />
        <input
          type="text"
          placeholder="Industry"
          className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
        />

        {/* Interests */}
        <div>
          <h2 className="text-base font-light mb-3">
            In which traffic termination channels and services are you interested?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ['Voice', 'FMS', 'Roaming and eSIM'],
              ['Messaging', 'WhatsApp', 'Other'],
            ].map((group, idx) => (
              <div key={idx} className="space-y-2">
                {group.map((item) => (
                  <label key={item} className="flex items-center gap-3">
                    <input type="checkbox" className="accent-primary w-4 h-4" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Messaging Volume */}
        <div>
          <h2 className="text-base font-light mb-3">
            What is your monthly messaging traffic?*
          </h2>
          <select
            className="w-full px-4 py-3 bg-white/10 rounded focus:outline-none"
            defaultValue=""
            required
          >
            <option value="" disabled >
              Select an option
            </option>
            <option value="<100k" className='text-zinc-600'>&lt;100k Messages/Month</option>
            <option value="100k-500k" className='text-zinc-600'>100k - 500k Messages/Month</option>
            <option value="500k+" className='text-zinc-600'>500k+ Messages/Month</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company Website"
            className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Job Title"
          className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none"
          required
        />
        <textarea name="" id="" placeholder="Message"
          className="w-full px-4 py-3 bg-white/10 text-white rounded placeholder:font-light focus:outline-none resize-none" rows={4}></textarea>
          <h1>To see how we process your personal data, please review our <span className='text-hoverPrimary text-sm font-light'>Privacy Policy</span>.</h1>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
