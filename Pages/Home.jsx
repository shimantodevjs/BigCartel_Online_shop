import React from 'react'
import Navbar from '../src/components/navbar/Navbar'
import Pricing from '../src/components/pricingPage/Pricing'
import MainContent from '../src/components/mainContent/MainContent'
import Blog from '../src/components/Blogs/Blog'
import Footer from '../src/components/Footer/Footer'

const Home = () => {
  return (
    <div>
       <Navbar />
       <MainContent />
       <Pricing />
       <Blog />
       <Footer />
    </div>
  )
}

export default Home
