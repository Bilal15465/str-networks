import React from "react";
import { NavLink } from "react-router-dom";

const VoiceAwards = () => {
  const AwardsItem = [
    {
      Image: "/Images/Voices/VoiceAward1.png",
      para: "CC Awards 2020 – CIS Regional Operator of the Year",
    },
    {
      Image: "/Images/Voices/VoiceAward2.png",
      para: 'Stevie Awards 2021 – Gold Winner in the "Company of the Year-Telecommunications-Medium Size" Category',
    },
    {
      Image: "/Images/Voices/VoiceAward3.png",
      para: "CC-Global Awards 2021 – Best MVNO Regional Operator of the Year",
    },
  ];

  return (
    <>
      {/* Awards Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="w-[90%] max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-primary text-3xl sm:text-4xl font-bold uppercase tracking-wide">
            Our Awards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
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
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
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
            We Guarantee Traffic Delivery
          </h2>
          <p className="text-white text-base sm:text-lg max-w-3xl leading-relaxed">
            As an international carrier, STR Networks cooperates with leading
            telecommunication providers in every region of the globe and
            provides exceptional international voice and SMS traffic quality.
          </p>
          <NavLink to={"/contact"}><button className="uppercase bg-primary hover:bg-[blue]/30 backdrop-blur-md text-white font-medium py-3 px-6 rounded-md transition-all duration-300 cursor-pointer">
            Partner with us
          </button></NavLink>
        </div>
      </section>
    </>
  );
};

export default VoiceAwards;
