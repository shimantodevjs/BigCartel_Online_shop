import React from 'react'
import Navbar from '../src/components/navbar/Navbar'
import ExampleContent from '../src/components/exampleContent/ExampleContent'
import ExampleGallery from '../src/components/exampleGallery/ExampleGallery'
import Footer from '../src/components/Footer/Footer'

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
