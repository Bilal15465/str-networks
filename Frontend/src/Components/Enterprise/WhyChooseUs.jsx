import React from "react";
import { NavLink } from "react-router-dom";
import { FcGlobe } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcCircuit } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import { SiTacobell } from "react-icons/si";
import { MdGames } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { PiTrolleySuitcase } from "react-icons/pi";
import { BsBusFront } from "react-icons/bs";
const WhyChooseUs = () => {
  const EnterpriseItems = [
    {
      logo: <FcGlobe />,
      heading: "Global coverage",
      para: "Send messages and verify users in 190+ countries of the world.",
    },
    {
      logo: <FcApproval />,
      heading: "20 years’ experience",
      para: "Since 2001, we have gathered expertise in everything related to Voice, Messaging and Fraud Protection.",
    },
    {
      logo: <FcMoneyTransfer />,
      heading: "Transparent pricing",
      para: "Pay only for what you use. No hidden fees or capital expenses.",
    },
    {
      logo: <FcCircuit />,
      heading: "Flexibility",
      para: "Create different combinations of delivery methods according to your needs.",
    },
    {
      logo: <FcOk />,
      heading: "Cost efficiency",
      para: "Save on bulk messaging and user-verification using the best delivery method first.",
    },
    {
      logo: <FcUnlock />,
      heading: "Fraud protection",
      para: "Stop fraudsters before they enter your system and do any harm.",
    },
  ];
  // const AwardsItem = [
  //     {
  //         Image: "./Images/Enterprise/EnterpriseAward.png",
  //         para: "CC Awards 2020 – CIS Regional Operator of the Year",
  //     },

  // ];
  const advantagesItems = [
    {
      logo: <SiTacobell />,
      heading: " Sector / Government",
      para: "Send urgent notifications and inform people of emergencies. Improve user authentication on government websites.",
    },
    {
      logo: <MdGames />,
      heading: "ENTERTAINMENT",
      para: "Inform clients about current & upcoming events, offer early bird tickets and send discount & promo notifications.",
    },
    {
      logo: <GrMoney />,
      heading: "Finance and Insurance",
      para: "Verify transactions with one-time passwords. Send important updates on customer inquiries.",
    },
    {
      logo: <PiTrolleySuitcase />,
      heading: "E-COMMERCE and Retail",
      para: "Notify clients about abandoned carts, order confirmations and new items in stock. Promote sales and special offers.",
    },
    {
      logo: <BsBusFront />,
      heading: "Transport",
      para: "Inform passengers of departure & arrival times, notify them of discounts on certain dates & destinations and send booking confirmations.",
    },
  ];

  return (
    <>
      {/* Section: Why Choose Us */}
      <section className="bg-gradient-to-t from-blue-100 via-purple-200 to-purple-100 py-16">
        <div className="w-[90%] max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold uppercase tracking-tight text-primary mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {EnterpriseItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300 flex flex-col items-center space-y-4"
              >
                <h1 className="text-4xl">{item.logo}</h1>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.heading}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Boost Engagement */}
      <section className="bg-blue-100 py-20">
        <div className="w-[90%] max-w-4xl mx-auto flex flex-col gap-6 justify-center items-center text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-700 leading-snug">
            BOOST CUSTOMER ENGAGEMENT WITH OMNICHANNEL MESSAGING
          </h1>
          <p className="text-sm sm:text-base text-zinc-600">
            Communicating the right message using the right medium will help you
            retain your customers while keeping them happy and engaged. Bring in
            the power of complex mobile marketing to cut through the noise and
            get your message to the client. Our enterprise messaging suite
            enables you to do just that. Send personalized texts on a global
            scale, combine various channels and take maximum advantage of
            business-to-customer communication.
          </p>
          <NavLink to={"/contact"}>
            <button className="uppercase bg-primary my-4 text-white font-semibold px-6 py-3 rounded-md hover:scale-95 transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </NavLink>
        </div>
      </section>

      {/* Section: Industry Use Cases */}
      <section className="relative w-full">
        <img
          src="../../..//Images/Home/AdvantagesBanner.png"
          alt="Advantages Background"
          className="brightness-[0.5] absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-snug mb-4">
            We provide communications solutions for the following businesses
          </h1>
          <p className="text-white text-sm sm:text-base max-w-4xl mx-auto leading-relaxed mb-10">
            In the modern world, if you want to stay up to date you need to
            communicate with your clients in multiple ways. That's why we
            provide the best enterprise communications services on the market.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {advantagesItems.map((item, index) => (
              <div
                key={index}
                className="bg-white px-5 py-6 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
                  <h1 className="text-4xl font-bold text-primary">
                    {item.logo}
                  </h1>
                  <h3 className="text-hoverPrimary font-bold text-sm sm:text-base uppercase">
                    {item.heading}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mt-2">{item.para}</p>
              </div>
            ))}
          </div>

          <h2 className="text-white text-sm sm:text-base md:text-lg tracking-tight mt-10">
            And many more...
          </h2>
        </div>
      </section>

      {/* Awards Section */}
      <section className="w-full bg-gray-50 py-20">
        <div className="w-[90%] max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-hoverPrimary text-3xl sm:text-4xl font-bold uppercase tracking-wide py-10">
            Our Awards
          </h2>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[0.97] p-6 flex flex-col items-center gap-4">
            <img
              src="./Images/Enterprise/EnterpriseAward.png"
              alt="Award"
              className="w-24 h-24 object-contain"
            />
            <h1 className="text-primary font-bold">2021</h1>
            <h2 className="font-semibold">CIOReview</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              “Most Promising Unified Communications Solution Provider”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
