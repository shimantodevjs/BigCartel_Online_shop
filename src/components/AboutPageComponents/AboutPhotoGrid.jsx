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
        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '40px', xs: '20px'} }}>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '30px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          We believe in the artist 
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
           Since 2005, we've helped people from all over the world sell over $2.5 billion of their work. We're 100% independent and we're here to help artists, makers, and small brands open a store and start making a living doing what they love..
        </Typography>
      </Box>
         <img src="https://images.ctfassets.net/pkn4mh4dn52b/5DumasZ6KMYUd68s3pDc8I/25623e1a8be2207047acd9bc6a1e5b96/we-are-big-cartel.jpg?q=75&w=1189&fm=webp" alt="" 
          className='blogImg'
         />  
         <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" 
       className='blogImg'
        />

        <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '40px', xs: '20px'} }}>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '30px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          For artists, by artists  
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
           We're a small, tight-knit team focused on making Big Cartel empowering and easy to use. Some of us run our own Big Cartel stores, others are musicians, illustrators, and filmmakers. We’ve worked hard to build a company where we do big things. We're here to help you do the same.
        </Typography>
      </Box>
         <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" 
       className='blogImg'
        />
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" 
       className='blogImg'
        />  
    </Stack>
  )
}

export default AboutPhotoGrid
