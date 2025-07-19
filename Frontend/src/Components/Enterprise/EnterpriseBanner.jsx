import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const EnterpriseBanner = () => {
  const [activeTab, setActiveTab] = useState("communication");

  const tabData = {
    communication: {
      description:
        "Send promotional and transactional messages to your clients, increase brand loyalty and get higher returns. Connect with your customers anywhere anytime.",
      cards: [
        {
          title: "PROMOTIONAL MESSAGES",
          content:
            "Promote your products and services. Tell your clients about special offers, upcoming sales or giveaways.",
        },
        {
          title: "TRANSACTIONAL MESSAGES",
          content:
            "Notify customers in response to their actions with template-based messages. Send booking confirmations, delivery statuses, transaction notices and more. Interact with clients via 2-way messaging.",
        },
        {
          title: "VOICE SERVICES",
          content:
            "Communicate with your customers by voice. Premium quality voice services for call centers, conference calls, PBX and OTT.",
        },
      ],
    },
    authentication: {
      description:
        "Enable secure logins and prevent unauthorized access with 2FA, OTP, and phone number verification.",
      cards: [
        {
          title: "SMS verification",
          content:
            "A classic verification channel. Deliver one-time SMS codes to authenticate clients.",
        },
        {
          title: "Voice message",
          content:
            "Users receive an incoming call: A robot pronounces a password several times.",
        },
        {
          title: "OTT verification",
          content:
            "The most cost-effective verification solution. Send one-time passwords to your clients via the internet using over-the-top services. Authenticate users via messengers, chat apps, social networks and other channels. Unlike SMS, over-the-top services don't have strict character limits thus allowing for longer messages and clearer instructions.",
        },
      ],
    },
    fraud: {
      description:
        "Protect your platform and users by detecting suspicious activity and preventing identity fraud.",
      cards: [
        {
          title: "Phone number check",
          content:
            "We check the phone number at the sign-up stage and decide whether to allow the sign-up, block it or allow sign-up and send an alert.",
        },
        {
          title: "Inbound call protection",
          content:
            "Protect your business and call centers from unwanted calls. Filter out marketing, fraudulent and other calls you don't want to receive.",
        },
        {
          title: "SMS FIREWALL",
          content:
            "SMS Firewall protects your business from fraudsters who generate false SMS requests. We make sure your SMS services are only used with the right intentions.",
        },
        {
          title: "Outbound call protection",
          content:
            "We alert the caller if they're trying to dial a suspicious number. This feature can be integrated by retail carriers and calling services to protect their customers from fraud. It can also be utilized by call centers to prevent outbound calls to premium and paid numbers left in contact forms by fraudsters.",
        },
      ],
    },
  };

  const tabs = [
    { id: "communication", label: "Communication" },
    { id: "authentication", label: "User Authentication" },
    { id: "fraud", label: "Fraud protection" },
  ];

  return (
    <>
      <div className="relative">
        <img
          src="../../../Images/Voices/voice-termination.png"
          alt="Voice Termination"
          className="brightness-[0.8] absolute inset-0 w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover -z-10 object-[right]"
        />
        <div className="absolute inset-0 bg-black/30 -z-10" />

        <div className="w-[90%] max-w-6xl mx-auto h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center">
          <div className="text-white w-full md:w-[60%] space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Enterprise Communications Solutions – STR Networks
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl font-light">
              Enterprise communication solutions that are fast and secure. Get
              communication, user-authentication and fraud protection services
              for your business today.
            </h2>
            {/* <NavLink to={"/contact"}><button className="uppercase bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium hover:scale-95 cursor-pointer transition duration-300 w-fit">
              Contact Sales
            </button></NavLink> */}
          </div>
        </div>
      </div>

      <div className="text-center my-10 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
          No specific knowledge required
        </h1>
        <h2 className="text-zinc-600 text-sm sm:text-base">
          We make communication fast, safe and transparent.
        </h2>
      </div>

      {/* Enterprise Communication Section */}
      <div className="relative w-full">
        <img
          src="../../..//Images/Home/AdvantagesBanner.png"
          alt="Advantages Background"
          className=" absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-snug uppercase">
            our enterprise communications solutions
          </h1>

          <div className="bg-[#0c0c47] text-white py-16 rounded-xl w-full">
            <div className="w-[90%] mx-auto">
              <div className="flex flex-wrap justify-center gap-4 border-b border-dashed border-blue-900 pb-4 mx-20">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`text-sm sm:text-base font-medium pb-2 transition duration-200 ${
                      activeTab === tab.id
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-white hover:text-blue-300"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <p className="text-center text-zinc-200 mt-6 max-w-3xl mx-auto text-sm leading-relaxed">
                {tabData[activeTab].description}
              </p>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-10 grid gap-6 sm:grid-cols-2"
              >
                {tabData[activeTab].cards.map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white text-[#0c0c47] rounded-md shadow-md p-6 transition duration-300 hover:shadow-lg"
                  >
                    <h3 className="font-bold text-sm mb-2">{card.title}</h3>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {card.content}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {activeTab === "communication" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-12 space-y-6"
                >
                  <div className="bg-white text-[#0c0c47] rounded-md shadow-md p-6">
                    <h2 className="text-lg font-bold mb-4">
                      DELIVER YOUR MESSAGES VIA
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-4">
                      {["SMS", "PUSH", "MESSENGERS", "RCS"].map(
                        (method, idx) => (
                          <div
                            key={idx}
                            className="hover:text-blue-600 transition"
                          >
                            <h3 className="font-bold text-sm mb-1">{method}</h3>
                            <p className="text-sm text-zinc-700">
                              {method === "SMS" &&
                                "Send alerts and notifications via the channel with the best open rate."}
                              {method === "PUSH" &&
                                "Notifications for mobile apps on Android and iOS."}
                              {method === "MESSENGERS" &&
                                "Communicate with customers using Whatsapp, Viber, VK and more."}
                              {method === "RCS" &&
                                "Join the future of mobile messaging with multimedia, payment and interactional messages through a native messaging app."}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-white text-[#0c0c47] rounded-md shadow-md p-6"
                  >
                    <h2 className="text-lg font-bold mb-2">
                      BLINK BY STR Networks
                    </h2>
                    <p className="text-sm text-zinc-700">
                      Leverage the power of omnichannel CPaaS to reach customers
                      via their preferred methods
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseBanner;
