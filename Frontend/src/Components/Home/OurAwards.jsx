import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NavLink } from 'react-router-dom';
const OurAwards = () => {
    const AwardsItem = [
        {
            Image: "../../../Images/Home/Award1.png",
            year: "2025",
            heading: "CC-Global Awards",
            para: "“Asia Regional Voice and SMS Operator of the Year”",
        },
        {
            Image: "../../../Images/Home/Award2.png",
            year: "2024",
            heading: "GLF Code of Conduct Against Fraud",
            para: "Certified as 100% Compliant",
        },
        {
            Image: "../../../Images/Home/Award3.png",
            year: "2024",
            heading: "CC-Global Awards",
            para: "“Customer Experience Excellence”",
        },
        {
            Image: "../../../Images/Home/Award4.png",
            year: "2024",
            heading: "Future Digital Awards by Juniper Research",
            para: "“Best AGT/AIT Fraud Solution” Platinum Winner",
        },
    ];

    const UpcomingItems = [
        {
            Image: "../../../Images/Home/Online-event_6.jpg",
            date: "July 16, 2025",
            heading: "Open Telco Latam Summit",
            location: "Online",
        },
        {
            Image: "../../../Images/Home/Bali-Indonesia-1.jpg",
            date: "August 26 - 29, 2025",
            heading: "BATIC",
            location: "Bali, Indonesia",
        },
        {
            Image: "../../../Images/Home/Almaty-Kazakhstan-2.jpg",
            date: "September 3 - 5, 2025",
            heading: "CIS 2025 GCCM",
            location: "Almaty, Kazakhstan",
        },
    ];
    const OurPartnersItems = [
        { Image: "../../../Images/Home/OurPartner1.png" },
        { Image: "../../../Images/Home/OurPartner2.png" },
        { Image: "../../../Images/Home/OurPartner3.png" },
        { Image: "../../../Images/Home/OurPartner4.png" },
        { Image: "../../../Images/Home/OurPartner5.png" },
        { Image: "../../../Images/Home/OurPartner6.png" },
        { Image: "../../../Images/Voices/Partner1.png" },
        { Image: "../../../Images/Voices/Partner2.png" },
        { Image: "../../../Images/Voices/Partner3.png" },
        { Image: "../../../Images/Voices/Partner4.png" },


    ]
    return (
        <>
            {/* Our Awards */}
            {/* <div className="flex flex-col justify-center items-center text-center w-[90%] max-w-7xl mx-auto pt-20 px-4">
                <h1 className="uppercase text-primary text-3xl sm:text-4xl font-semibold">
                    Our awards
                </h1>
                <p className="mt-4 text-sm sm:text-base">
                    It's a big honor for us to be chosen as a winner of multiple industry awards:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-14 w-full">
                    {AwardsItem.map((item, index) => (
                        <div
                            key={index}
                            className="border border-zinc-200 rounded-md px-4 py-6 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-95"
                        >
                            <div className="w-24 h-24">
                                <img src={item.Image} alt="award" className="w-full h-full object-contain" />
                            </div>
                            <h1 className="text-lg font-semibold text-primary">{item.year}</h1>
                            <h2 className="font-semibold uppercase text-sm leading-tight">{item.heading}</h2>
                            <p className="text-sm font-light tracking-tight">{item.para}</p>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Upcoming Events */}
            {/* <div className='bg-accent'>
                <h1 className='md:text-4xl text-2xl font-semibold tracking-tight text-primary text-center py-10 uppercase'>Upcoming events</h1>
                <div className="w-[90%] max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white py-10">
                    {UpcomingItems.map((item, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                            
                            <img src={item.Image} alt="event" className="w-full h-[450px] object-cover" /> 

                           
                            <div className="absolute inset-0 bg-[#4a4a87]/80 flex flex-col justify-between p-6">

                              
                                <div className="w-fit ml-auto bg-black/70 px-4 py-2 text-sm font-medium">
                                    {item.date}
                                </div>

                               
                                <div className="mt-20">
                                    <h1 className="text-3xl font-bold uppercase">{item.heading}</h1>
                                    <p className="text-sm mt-1">{item.location}</p>
                                </div>

                                
                                <div className="w-fit mt-auto">
                                    <NavLink to={"/contact"}><button className='uppercase bg-primary hover:bg-secondary py-3 px-6 rounded tracking-tighter font-medium cursor-pointer hover:scale-95 duration-300 transition-all'>
                                        Schedule a meeting
                                    </button></NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Our Partners Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="w-[90%] max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                        Our Partners
                    </h1>
                    <p className="text-gray-600 max-w-2xl text-base sm:text-lg">
                        We are honored to call more than 1,500 international companies, including industry leaders, our partners.
                    </p>

                    {/* Swiper Logo Carousel */}
                    <div className="w-full mt-10">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={2}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                1024: { slidesPerView: 5 },
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                        >
                            {OurPartnersItems.map((item, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <img
                                        src={item.Image}
                                        alt={`Partner Logo ${index + 1}`}
                                        className="w-32 h-20 object-contain transition-all duration-300"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    );
};

export default OurAwards;
