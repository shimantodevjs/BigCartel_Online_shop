import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ExampleContent from '../components/exampleContent/ExampleContent'
import ExampleGallery from '../components/exampleGallery/ExampleGallery'
import Footer from '../components/Footer/Footer'

const Examples = () => {
  return (
    <div>
      <Navbar />
      <ExampleContent />
      <ExampleGallery />
      <Footer />
    </div>
  )
}

export default Examples
