import React from 'react'
import { NavLink } from 'react-router-dom';
import { LuRadioTower } from "react-icons/lu";
import { ImHeadphones } from "react-icons/im";
import { ImMobile } from "react-icons/im";
import { BsBuildingsFill } from "react-icons/bs";
const VoiceBannerSection = () => {
  const CountItems = [
    {
      Count: "380",
      Heading: "Partners"
    },
    {
      Count: "100+",
      Heading: "Direct connections"
    },
    {
      Count: "3B+",
      Heading: "Minutes annually"
    },
  ]
  const ServiceItems = [
    {
      logo: <LuRadioTower />,
      heading: "RETAIL CARRIERS (MNO, MVNO AND PTT)",
      para: "Get A-Z coverage for voice traffic at competitive rates, prevent voice fraud, eliminate grey routes and secure revenues"
    },
    {
      logo: <ImHeadphones />,
      heading: "CALL CENTERS AND CUSTOMER SUPPORT",
      para: "Voice solutions for call centers. Wide coverage, number masking, call forwarding, IVR support."
    },
    {
      logo: <ImMobile />,
      heading: "OTT SERVICES & CALLING APPS",
      para: "Add international calling capabilities to your apps. Send one-time passwords via voice messages."
    },
    {
      logo: <BsBuildingsFill />,
      heading: "ENTERPRISES & LARGE RETAIL COMPANIES",
      para: "Communicate with customers by voice, streamline voice support, get additional numbering and protect your business from fraud."
    },
  ];

  const advantagesItems = [
    {
      heading: "GLOBAL REACH",
      para: "High-quality wholesale voice termination to over 100 countries, with full support for DTMF and fax. Backed by 19 global points of presence for optimal connectivity."
    },
    {
      heading: "FLEXIBLE BILLING",
      para: "Transparent, competitive pricing with both prepaid and postpaid plans to suit your business needs."
    },
    {
      heading: "RELIABLE QUALITY",
      para: "Guaranteed premium CLI routes, daily performance testing, and an advanced in-house quality assurance system ensure consistent service excellence."
    },
    {
      heading: "DEDICATED SUPPORT",
      para: "Access 24/7 technical assistance, a personal account manager, and complimentary trial services before committing."
    },
    {
      heading: "ENHANCED SERVICES",
      para: "Benefit from fraud detection and prevention, DID provisioning, and toll-free number solutions."
    },
  ];
  return (
    <>
      {/* Banner Section */}
<div className="relative">
  {/* Background Image */}
  <img
    src="../../../Images/Voices/voice-termination.png"
    alt="Voice Termination"
    className="brightness-[0.8] absolute inset-0 w-full h-[70vh] md:h-[60vh] lg:h-[80vh] object-cover -z-10 object-[right]"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 -z-10" />

  {/* Content */}
  <div className="w-[90%] max-w-6xl mx-auto h-[70vh] md:h-[60vh] lg:h-[80vh] flex items-center">
    <div className="text-white w-full md:w-[60%] space-y-4 sm:space-y-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Top Wholesale Voice Termination Provider – STR Networks
      </h1>
      <h2 className="text-base sm:text-lg md:text-xl font-light">
        Since 2020, we have offered whole voice termination end to end and routing for hundreds of
        MNO's, MVNO's. PBX providers and other businesses. Join our comprehensive partner network and profit from competitve wholesale termination rates, reliable coverage and industry leadig quality of service.
      </h2>
      <NavLink to={"/contact"}>
        <button className="uppercase bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium hover:scale-95 transition duration-300 w-fit">
          Contact Sales
        </button>
      </NavLink>
    </div>
  </div>
</div>

{/* Counting Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-[90%] max-w-6xl mx-auto">
  {CountItems?.map((item, index) => (
    <div key={index} className="relative px-10 py-6 text-center">
      <div className="absolute left-0 top-0">
        <img src="../../../Images/Home/border-top-left.svg" alt="" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src="../../../Images/Home/border-top-left.svg" alt="" className="rotate-180" />
      </div>
      <h1 className="text-4xl font-semibold text-primary">{item.Count}</h1>
      <h2 className="font-medium mt-4">{item.Heading}</h2>
    </div>
  ))}
</div>

{/* Voice Termination Section */}
<div className="relative w-full">
  <img
    src="/Images/Home/AdvantagesBanner.png"
    alt="Advantages Background"
    className="brightness-[0.5] absolute inset-0 w-full h-full object-cover -z-10"
  />

  <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
    <h1 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight leading-snug uppercase">
      Wholesale Voice Termination with
    </h1>

    <h2 className="text-white text-lg sm:text-xl tracking-tight">
      Maximum coverage and exceptional voice quality
    </h2>

    <p className="text-white text-sm sm:text-base leading-relaxed max-w-4xl">
      With multiple years in the telecom industry, 6 million voice minutes terminated daily, 100% CLI premium certified routes with competitive rates, we provide the full global wholesale service for you business.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6">
      {advantagesItems?.map((item, index) => (
        <div
          key={index}
          className="bg-white px-5 py-6 rounded-xl shadow-md flex flex-col items-center text-center"
        >
          <h3 className="text-primary font-semibold text-sm uppercase tracking-tight">
            {item.heading}
          </h3>
          <p className="mt-3 text-gray-700 text-sm">{item.para}</p>
        </div>
      ))}
    </div>

    <h2 className="text-white text-sm sm:text-base md:text-lg tracking-tight max-w-3xl mt-8">
      You can choose from a variety of our wholesale voice termination rates and services: Direct, Premium,
      Retail, Call Center, Standard.
    </h2>
  </div>
</div>

{/* Service Quality Section */}
<div className="w-full bg-accent py-16 sm:py-20">
  <div className="w-[90%] max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
    <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-semibold uppercase">
      Improve service quality and increase revenue
    </h1>
    <h2 className="text-base sm:text-lg md:text-xl text-black">
      Improve service quality and increase revenue
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6">
      {ServiceItems?.map((item, index) => (
        <div
          key={index}
          className="bg-white px-5 py-6 rounded-xl shadow-md flex flex-col justify-start hover:scale-95 transition duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl text-primary">{item.logo}</div>
            <h3 className="text-hoverPrimary font-semibold text-sm uppercase tracking-tight text-left">
              {item.heading}
            </h3>
          </div>
          <p className="mt-4 text-gray-700 text-sm leading-relaxed text-left">{item.para}</p>
        </div>
      ))}
    </div>
  </div>
</div>
    </>
  )
}

export default VoiceBannerSection
