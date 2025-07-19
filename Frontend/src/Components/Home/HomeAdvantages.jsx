import React from "react";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { LuMessageSquareShare } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

const HomeAdvantages = () => {
  const advantagesItems = [
    {
      logo: <MdOutlineRecordVoiceOver />,
      heading: "Premium Voice Termination Quality",
      para: "Rely on our proprietary algorithms to maximize routing quality",
    },
    {
      logo: <LuMessageSquareShare />,
      heading: "Reliable & Fast SMS Termination",
      para: "Reach a new level of growth with our widest coverage worldwide",
    },
    {
      logo: <MdOutlineSecurity />,
      heading: "Cutting-Edge Anti-Fraud System",
      para: "Stay one step ahead of telecom fraud",
    },
  ];
  const MembersImage = [
    { Image: "../../../Images/Home/Member1.png" },
    { Image: "../../../Images/Home/gsma-logo.svg" },
    { Image: "../../../Images/Home/Member3.png" },
    { Image: "../../../Images/Home/Member4.png" },
    { Image: "../../../Images/Home/Member5.png" },
  ];
  const CountItems = [
    {
      Count: "1,500",
      Heading: "Partners worldwide",
    },
    {
      Count: "190+",
      Heading: "Countries covered",
    },
    {
      Count: "165+",
      Heading: "Countries with direct connections",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 my-10 w-[80%] mx-auto">
        {CountItems?.map((item, index) => (
          <div key={index} className="relative px-10 py-4 text-center my-6">
            <div className="absolute left-0 top-0">
              <img src="../../../Images/Home/border-top-left.svg" alt="" />
            </div>
            <div className="absolute right-0 bottom-0">
              <img
                src="../../../Images/Home/border-top-left.svg"
                alt=""
                className="rotate-180"
              />
            </div>
            <h1 className="text-4xl font-semibold text-primary">
              {item.Count}
            </h1>
            <h2 className="font-medium mt-4">{item.Heading}</h2>
          </div>
        ))}
      </div>
      {/*Advantages Section */}
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src="../../..//Images/Home/AdvantagesBanner.png"
          alt="Advantages Background"
          className="brightness-[0.5] absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Content Overlay */}
        <div className="relative z-10 w-[90%] max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-16 items-center">
          {/* Title */}
          <h1 className="text-center text-white text-3xl sm:text-4xl font-semibold tracking-tighter">
            OUR ADVANTAGES
          </h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {advantagesItems?.map((item, index) => (
              <div
                key={index}
                className="bg-white px-6 py-8 rounded-xl shadow-lg flex flex-col justify-start h-full"
              >
                <div className="flex gap-4 items-start">
                  <h1 className="text-2xl text-primary">{item.logo}</h1>
                  <h2 className="text-primary font-semibold text-base uppercase tracking-tight">
                    {item.heading}
                  </h2>
                </div>
                <p className="mt-4 text-gray-700 text-sm">{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Members of */}
      <div className="flex flex-col gap-6 justify-center items-center md:w-[80%] w-[90%] mx-auto py-10">
        <h1 className="uppercase text-primary text-4xl font-semibold tracking-tight">
          Members of
        </h1>
        <p className="md:w-[70%] mx-auto text-center md:text-base text-sm">
          We are proud to be part of the largest communities in our industry. We
          get valuable insights, obtain expertise and learn from experience of
          other members, adopting best practices to improve our services.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16 px-4 my-10">
          {MembersImage?.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <img
                src={item.Image}
                alt=""
                className="w-full h-auto object-contain max-h-24 md:my-0 my-6"
              />
            </div>
          ))}
        </div>
      </div>
      {/* We Deliver Section */}
      <div className="bg-[#12295d] py-20">
        <div className="flex flex-col gap-6 justify-center items-center text-white w-[90%] max-w-6xl mx-auto px-4">
          {/* Main Heading */}
          <h1 className="uppercase text-2xl sm:text-3xl font-semibold text-center tracking-tight">
            We deliver 4+ billion minutes annually to 190+ countries.
          </h1>

          {/* Subheading */}
          <h2 className="font-light text-sm sm:text-base text-center">
            Unparalleled quality and security guaranteed by:
          </h2>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm font-light tracking-tight w-full mt-8">
            <div className="border-l pl-4">
              Direct interconnects with all major networks worldwide
            </div>
            <div className="border-l pl-4">
              Proprietary industry-leading monitoring and routing management
              system
            </div>
            <div className="border-l pl-4">
              Anti-fraud protection based on our intelligent algorithms
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdvantages;
