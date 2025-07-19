import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainHome from '../Pages/MainHomePage/MainHome'
import Navbar from './Navbar/Navbar'
import MainVoice from '../Pages/MainVoicesPage/MainVoice'
import Footer from './Footer'
import MainMessagePage from '../Pages/MainMessagePage/MainMessagePage'
import MainEnterprisePage from '../Pages/MainEnterprise/MainEnterprisePage'
import MainContactUS from '../Pages/ContactUS/MainContactUS'

const MainRoutes = () => {
    const location = useLocation();

    return (
        <div className="">  
            {location.pathname === '/' && (
    <div className="relative">
        <img
  src="../../Images/Home/MainHomeBanner.png"
  alt=""
  className="absolute inset-0 w-full lg:h-[90vh] md:h-[60vh] h-[70vh] -z-10 object-cover object-center brightness-[0.5]"
/>

       
    </div>
)}

            <div className='relative'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainHome />} />
                    <Route path="/voice" element={<MainVoice />} />
                    <Route path="/messaging" element={<MainMessagePage />} />
                    <Route path="/enterprise" element={<MainEnterprisePage />} />
                    <Route path="/contact" element={<MainContactUS />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default MainRoutes
