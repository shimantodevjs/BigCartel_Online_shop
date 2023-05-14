import React from 'react'
import { Stack , Typography, Box  } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <Stack
      sx={{margin:"50px 0px",display:"flex",alignItems:'center',justifyContent:'center'}}
    >
      <Box
        sx={{display:"flex",alignItems:'center',justifyContent:'center', flexDirection:'column'}}
      >
        <Typography
          variant='h5'
          sx={{color:'#262a2a'}}
        >
          BigCartel 
        </Typography>
        <Box
         sx={{margin:'20px 0px',
              display: 'flex',
              justifyContent: 'space-between',
              width:'200px',
              color:'#262a2a'}}
        >
           <a href="https://www.instagram.com/" target="_blank"><InstagramIcon /></a>
           <a href="https://twitter.com/" target="_blank"><TwitterIcon /></a>
           <a href="https://www.facebook.com/" target="_blank"><FacebookIcon /></a>
           <a href="https://www.youtube.com/" target="_blank"><YouTubeIcon /></a>
           <a href="https://www.pinterest.com/" target="_blank"><PinterestIcon /></a>
        </Box>
        <Box
         sx={{marginBottom:'20px',display: 'flex', justifyContent: 'space-between',width:'200px'}}
        >
             <a href="https://example.com/blog" target="_blank">
    <Typography sx={{fontSize:'12px'}}>Blog</Typography>
  </a>
  <a href="https://example.com/help" target="_blank">
    <Typography sx={{fontSize:'12px'}}>Help</Typography>
  </a>
  <a href="https://example.com/api" target="_blank">
    <Typography sx={{fontSize:'12px'}}>Api</Typography>
  </a>
  <a href="https://example.com/legal" target="_blank">
    <Typography sx={{fontSize:'12px'}}>Legal</Typography>
  </a>
        </Box>    
      </Box>  
    </Stack>
  )
}

export default Footer
