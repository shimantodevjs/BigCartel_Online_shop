import React from 'react'
import { Stack,Box,Typography } from '@mui/material'

const AboutPhotoGrid = () => {
  return (
    <Stack>
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
            ABOUT BIG CARTEL
        </Box>
        </Box>     
    </Stack>
  )
}

export default AboutPhotoGrid
