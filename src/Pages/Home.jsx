import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Pricing from '../components/pricingPage/Pricing'
import MainContent from '../components/mainContent/MainContent'
import Blog from '../components/Blogs/Blog'
import Footer from '../components/Footer/Footer'

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
