import React from 'react'
import { Stack , Typography, Box , Button , } from '@mui/material'
import { Link } from 'react-router-dom'

const MainContent = () => {
  return (
    <Stack
      className='mainContent'
      sx={{
        backgroundImage: 'url("https://images.ctfassets.net/pkn4mh4dn52b/4nscEBJ0Os2oIqO6ssSwqg/4d8a3e185f48c14d78919153793f6326/hero-revised.jpg?q=75&w=2000&fm=webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
     >
    <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '80px', xs: '150px'}}}>
      <Typography
        variant='h1'
        sx={{ width:{ md: '30%', xs: '80%' },textAlign:'center',fontWeight:'bold',color:'#fff', fontSize: { md: '65px', xs: '40px' }}}
      >
           Easy online stores for artists & makers
      </Typography>
      <Typography
        sx={{color:'#fff',marginTop:'20px',  width:{ md: '30%', xs: '80%' },textAlign:'center', fontSize:{xs:'12px', md:'14px'}}}
      >
        We make it simple to build a unique online store, sell your work, and run a creative business.
      </Typography>
      <Link to='/pricing'>
      <Button
      sx={{ backgroundColor: '#262a2a',padding:'20px 100px', marginTop:'40px', color:'#fff'}}
      className='button'
      >
        Open your store
      </Button>
      </Link>
      </Box>
    </Stack>
  )
}

export default MainContent
