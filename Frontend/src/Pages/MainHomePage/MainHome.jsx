import React from 'react'
import HomeBanner from '../../Components/Home/HomeBanner'
import HomeAdvantages from '../../Components/Home/HomeAdvantages'
import OurAwards from '../../Components/Home/OurAwards'

const MainHome = () => {
    return (
        <>
        <div className=' '><HomeBanner /><HomeAdvantages /> 
        <OurAwards />
        </div>
        </>
    )
}

export default MainHome