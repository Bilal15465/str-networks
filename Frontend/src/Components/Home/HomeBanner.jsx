import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeBanner = () => {
    return (
        <>
            {/* Home Banner */}
            <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
                <div className="w-full max-w-6xl flex flex-col gap-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
                        THE PROFESSIONAL CHOICE
                        <br />
                        <span className="text-accent  font-normal block mt-2 text-lg sm:text-xl">
                            for your voice and messaging traffic
                        </span>
                    </h1>

                    <div className="mt-10 sm:mt-12 md:mt-14">
                        <NavLink to={"/contact"}><button className="bg-primary hover:bg-secondary text-white transition-all duration-300 px-10 sm:px-12 md:px-16 py-3 sm:py-4 rounded-lg font-medium w-fit mx-auto md:mx-0 cursor-pointer hover:scale-95">
                            PARTNER WITH US
                        </button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
