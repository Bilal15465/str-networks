import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './Components/MainRoutes'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <div className='font-Poppins'>
      <BrowserRouter>
        <ScrollToTop />
        <MainRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App