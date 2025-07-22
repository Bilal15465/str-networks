import React from 'react';

const VoiceAdvantagesSection = () => {
    const cards = [
        {
            title: "Advanced Business Features",
            items: [
                "Full statistics",
                "Routes testing",
                "CLI guarantee",
                "No network overloads & no latency",
                "Max call completion rates",
                "Network availability",
                "High voice quality"
            ]
        },
        {
            title: "Pricing & Billing",
            items: [
                "Best price-quality ratio",
                "Top wholesale call termination rates",
                "Transparent billing",
                "By-product trunk distribution",
                "High volume discounts",
                "Cost reduction via global connections",
                "No extra charges or hidden fees"
            ]
        },
        {
            title: "Support for Large Clients",
            items: [
                "Ideal conditions for large clients",
                "Big volume discounts",
                "Personal carrier relations manager",
                "Dedicated 24/7 support",
                "Professional QA team"
            ]
        }
    ];

    const partnerLogos = [
        { Image: "/Images/Voices/Partner1.png" },
        { Image: "/Images/Voices/Partner2.png" },
        { Image: "/Images/Voices/Partner3.png" },
        { Image: "/Images/Voices/Partner4.png" },
    ];

    return (
        <>
            {/* Advantages Section */}
            <section className="relative w-full">
                <img
                    src="/Images/Home/AdvantagesBanner.png"
                    alt="Advantages Background"
                    className="brightness-[0.5] absolute inset-0 w-full h-full object-cover -z-10"
                />

                <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-20 px-4 flex flex-col items-center text-center gap-10">
                    <h1 className="text-white text-3xl sm:text-4xl font-semibold">
                        Advantages of working with us:
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-accent p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
                            >
                                <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
                                <ul className="space-y-2">
                                    {card.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="relative pl-6 text-sm leading-relaxed"
                                        >
                                            <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="w-[90%] md:w-[80%] mx-auto py-16 flex flex-col items-center text-center gap-6">
                <h2 className="uppercase text-primary text-3xl sm:text-4xl font-semibold">
                    You are in good hands with us
                </h2>
                <p className="max-w-3xl text-sm sm:text-base">
                    Since 2020, we have offered whole voice termination end to end and routing for hundreds of MNO's, MVNO's. PBX providers and other businesses. Join our comprehensive partner network and profit from competitive wholesale termination rates, reliable coverage and industry leading quality of service.
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
        </>
    );
};

export default VoiceAdvantagesSection;
