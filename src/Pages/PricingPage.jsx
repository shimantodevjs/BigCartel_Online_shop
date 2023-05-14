import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/navbar/Navbar'
import Pricing from '../components/pricingPage/Pricing'
import Footer from '../components/Footer/Footer'

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '100px', xs: '100px'} }}>
      <Box
          sx={{border:'2px solid #262a2a',
               color:'#262a2a',
               opacity:'0.7',
               padding:'20px 50px',
               margin:'50px 0px',
               fontSize:'12px'
            }}
        >
            PRICING
        </Box>
        </Box>
        <Pricing />
        <Footer />
    </div>
  )
}

export default PricingPage
