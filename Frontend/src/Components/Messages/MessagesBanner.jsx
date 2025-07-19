import React from 'react'
import { NavLink } from 'react-router-dom';
import { TbDeviceMobileSearch } from "react-icons/tb";
import { LuRadioTower } from "react-icons/lu";
const MessagesBanner = () => {
    const CountItems = [
        {
            Count: "400",
            Heading: "Partners"
        },
        {
            Count: "120+",
            Heading: "Direct interconnections to MNOs and Mobile Hubs"
        },
        {
            Count: "3B+",
            Heading: "SMS annually"
        },
    ]
    const ServiceItems = [
        {
            logo: <TbDeviceMobileSearch />,
            heading: "Mobile apps & enterprises",
            para: "Introduce two-factor authentication and leverage business messaging to engage clients."
        },
        {
            logo: <LuRadioTower />,
            heading: "Mobile operators (MNO, MVNO)",
            para: "Add spam filtering & SMS firewall, block grey routes and secure your A2P traffic streams."
        },

    ];

    const advantagesItems = [
        {
            heading: "COVERAGE",
            para: "Global SMS termination with 120+ direct connections to MNOs and Mobile Hubs covering 165+ countries."
        },
        {
            heading: "TYPES OF SMS",
            para: "All types of SMS are supported: A2P, P2P, P2A, 2-way."
        },
        {
            heading: "QUALITY AND SPEED",
            para: "High SMS throughput, instant delivery & 24/7 NOC, real-time reporting and designated QOS team."
        },
        {
            heading: "SMS FIREWALL",
            para: "Prevent fraudulent SMS activities including spamming, grey routes and illegal use of SMSC."
        },
        {
            heading: "NOTIFICATION AND AUTHENTICATION",
            para: "Omnichannel promo messages, transactional notifications and verification messages with one-time passwords."
        },
        {
            heading: "OTT MESSENGERS AND RCS",
            para: "Our platform supports WhatsApp Business API, Viber Business Messages and RCS messaging as well as other channels."
        },
        {
            heading: "LONG NUMBERS AND SHORT CODES",
            para: "Reliable transit of messages with long numbers and short codes + DID service."
        },
        {
            heading: "HTTP & HTTPS API",
            para: "HTTP and HTTPS APIs for secure SMS termination."
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
                    className="brightness-[0.8] absolute inset-0 w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover -z-10 object-[right]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 -z-10" />

                {/* Content */}
                <div className="w-[90%] max-w-6xl mx-auto h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center">
                    <div className="text-white w-full md:w-[60%] space-y-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Omnichannel Messaging Platform For Business – STR Networks
                        </h1>
                        <h2 className="text-base sm:text-lg md:text-xl font-light">
                            Our solutions provide powerful tools for timely and cost-effective communications. Build your
                            customer journey with our enterprise platform and multiple delivery options.
                        </h2>
                        <NavLink to={"/contact"}><button className="uppercase bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md font-medium hover:scale-95 cursor-pointer transition duration-300 w-fit">
                            Contact Sales
                        </button></NavLink>
                    </div>
                </div>
            </div>

            {/* Counting Section */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 my-10 w-[80%] mx-auto'>
                {
                    CountItems?.map((item, index) => (
                        <div key={index} className='relative px-10 py-4 text-center my-6'>
                            <div className='absolute left-0 top-0'><img src="../../../Images/Home/border-top-left.svg" alt="" /></div>
                            <div className='absolute right-0 bottom-0'><img src="../../../Images/Home/border-top-left.svg" alt="" className='rotate-180' /></div>
                            <h1 className='text-4xl font-semibold text-primary'>{item.Count}</h1>
                            <h2 className='font-medium mt-4'>{item.Heading}</h2>
                        </div>
                    ))
                }
            </div>

            {/* Voice Termination Section*/}
            <div className="relative w-full">
                {/* Background Image */}
                <img
                    src="/Images/Home/AdvantagesBanner.png"
                    alt="Advantages Background"
                    className="brightness-[0.5] absolute inset-0 w-full h-full object-cover -z-10"
                />

                {/* Content Overlay */}
                <div className="relative z-10 w-[80%] max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">

                    {/* Title */}
                    <h1 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight leading-snug">
                        Global SMS Termination with STR Networks Telecom
                    </h1>

                    <h2 className="text-white text-lg sm:text-xl tracking-tight">
                        Reliable & Fast Messaging Services
                    </h2>

                    <p className="text-white text-sm sm:text-base leading-relaxed max-w-4xl">
                        With years of experience in global messaging, millions of SMS delivered daily, high throughput, and competitive rates, we provide you with premium quality SMS termination and global coverage of our messaging services.
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6">
                        {advantagesItems?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white px-5 py-6 rounded-xl shadow-md flex flex-col h-full items-center text-center"
                            >
                                <h3 className="text-primary font-semibold text-sm uppercase tracking-tight">
                                    {item.heading}
                                </h3>
                                <p className="mt-3 text-gray-700 text-sm">{item.para}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-white text-sm sm:text-base md:text-lg tracking-tight max-w-3xl mt-8">
                        Our international SMS services include Direct, Premium and Standard (Wholesale) A-Z ps.
                        You are also welcome to request customized SMS & messaging products for any needs.
                    </h2>
                    {/*
                    <button className="mt-6 uppercase bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition duration-300 w-fit">
                        Download the brochure
                    </button> */}
                </div>
            </div>

            {/* Service Quality Section*/}
            <div className="relative w-full bg-accent">
                <div className="relative z-10 w-[70%] max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">

                    {/* Section Headings */}
                    <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight uppercase">
                        Improve service quality and increase revenue
                    </h1>
                    <h2 className="text-base sm:text-lg md:text-xl tracking-tight text-black">
                        We are best suited for medium and large companies with their own traffic:
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
                        {ServiceItems?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white px-5 py-6 rounded-xl shadow-md flex flex-col justify-start h-full hover:scale-95 duration-300 duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    {/* <div className="w-12 h-12 shrink-0">
                                        <img
                                            src={item.logo}
                                            alt={item.heading}
                                            className="w-full h-full object-contain"
                                        />
                                    </div> */}
                                    <h1 className='text-4xl font-bold text-primary'>{item.logo}</h1>
                                    <h3 className="text-hoverPrimary font-semibold text-sm uppercase tracking-tight">
                                        {item.heading}
                                    </h3>
                                </div>
                                <p className="mt-4 text-gray-700 text-sm leading-relaxed">{item.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessagesBanner
