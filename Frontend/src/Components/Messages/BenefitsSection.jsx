import React from 'react'
import { NavLink } from 'react-router-dom';

const BenefitsSection = () => {
    const advantagesItems = [
        {
            heading: "Cost reduction",
            para: "Messages are initially sent over cost-effective channels (Viber or Voice Channel) to minimize expenses. If messages cannot be delivered, an SMS fallback option is provided."
        },
        {
            heading: "High conversion rates",
            para: "Official channels ensure that all your messages are reliably delivered to your clients. Customers immediately receive SMS messages and convert better."
        },
        {
            heading: "Better user experience",
            para: "Clients receive messages in the apps they like most. Two-way communication via apps boosts customer engagement and creates positive experience for clients."
        },
        {
            heading: "Fraud Protection",
            para: "We check the fraud score of numbers and block delivery to risky & suspicious numbers with a high cost per message – to ensure that you don’t pay for SMS messages to bots and non-existent people."
        },
    ];
    const BenefitsItems = [
        {
            heading: "Spam filtering",
            para: "Our antispam engine ensures that messages with questionable content (phishing, scams, etc.) do not get through. Fraudulent traffic never enters the network."
        },
        {
            heading: "SMS Firewall",
            para: "All SMS traffic is authorized – it’s delivered through legal channels without grey routes, which helps operators to avoid losses and secure revenues."
        },
        {
            heading: "Worldwide Access",
            para: "With a large network of existing customers & switches all over the world, we provide access to your network for all major international brands – all to ensure that your subscribers reliably receive SMS messages as soon as possible."
        },
        {
            heading: "P2P SMS",
            para: "We provide operators with A-Z P2P SMS coverage."
        },
    ];

    const partnerLogos = [
        { Image: "/Images/Voices/Partner1.png" },
        { Image: "/Images/Voices/Partner3.png" },
        { Image: "../../../Images/Messages/MessagePartner.png" },
    ];
    const AwardsItem = [
        {
            Image: "/Images/Voices/VoiceAward1.png",
            heading: "CC Awards 2020 – CC Awards 2020 – Best Regional SMS Service Provider",
        },
        {
            Image: "../../../Images/Messages/MessageAward.png",
            heading: 'ROCCO Research 2021 – Top A2P SMS Vendor',
        },
    ];
    return (
        <>
            <div className="relative w-full">
                {/* Background Image */}
                <img
                    src="/Images/Home/AdvantagesBanner.png"
                    alt="Advantages Background"
                    className="brightness-[0.5] absolute inset-0 w-full h-full object-cover -z-10"
                />

                {/* Content Overlay */}
                <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">

                    {/* Title */}
                    <h1 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight leading-snug">
                        Benefits for mobile apps and enterprises:
                    </h1>


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
                    <h1 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight leading-snug">
                        Benefits for mobile apps and enterprises:
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6">
                        {BenefitsItems?.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white px-5 py-6 rounded-xl shadow-md flex flex-col h-full items-center text-center"
                            >
                                <h3 className="text-primary font-semibold text-sm uppercase tracking-tight">
                                    {item.heading}
                                </h3>
                                <p className="mt-3 text-gray-700 text-sm tracking-tight">{item.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Partners Section */}
            <section className="w-[90%] md:w-[80%] mx-auto py-16 flex flex-col items-center text-center gap-6">
                <h2 className="uppercase text-primary text-3xl sm:text-4xl font-semibold">
                    You are in good hands with us
                </h2>
                <p className="max-w-5xl text-sm sm:text-base">
                    We have provided global A-Z SMS termination services to hundreds of customers including OTTs, CPAAS vendors, mobile apps and other companies since 2014. Join other businesses profiting from our wide coverage, competitive rates & premium quality of service and become our new trusted partner.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16 w-full mt-10">
                    {partnerLogos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex justify-center items-center w-[40%] sm:w-[30%] md:w-[22%] lg:w-[15%]"
                        >
                            <img
                                src={logo.Image}
                                alt={`Partner ${idx + 1}`}
                                className="w-full max-h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </section>
            {/* Awards Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="md:w-[60%] max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-primary text-3xl sm:text-4xl font-bold uppercase tracking-wide">
                        Our Awards
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
                        {AwardsItem.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[0.97] p-6 flex flex-col items-center gap-4"
                            >
                                <img
                                    src={item.Image}
                                    alt="Award"
                                    className="w-24 h-24 object-contain"
                                />
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.heading}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="relative w-full overflow-hidden">
                {/* Background */}
                <img
                    src="/Images/Home/AdvantagesBanner.png"
                    alt="Advantages Background"
                    className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[0.4]"
                />
                {/* Overlay Content */}
                <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-24 px-4 flex flex-col items-center text-center gap-6">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold">
                        WE GUARANTEE TRAFFIC DELIVERY
                    </h2>
                    <p className="text-white text-base sm:text-lg max-w-3xl leading-relaxed">
                        As an international carrier, CK Telecom cooperates with leading telecommunication providers in every region of the globe and provides exceptional international voice and SMS traffic quality.
                    </p>
                    <NavLink to={"/contact"}><button className="uppercase bg-primary hover:bg-[blue]/30 backdrop-blur-md text-white font-medium py-3 px-6 rounded-md transition-all duration-300 cursor-pointer">
                        Partner with us
                    </button></NavLink>
                </div>
            </section>
        </>
    )
}

export default BenefitsSection