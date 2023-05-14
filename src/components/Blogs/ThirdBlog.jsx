import { Stack , Typography, Box, Button  } from '@mui/material'
import { Link } from 'react-router-dom'

const ThirdBlog = () => {
  return (
    <Stack
      sx={{backgroundColor:'#fff'}}
    >
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '20px', xs: '10px'} }}>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '30px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          The tools you need 
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
            Manage your store, fulfill orders, update products, check stats, and run promotions from any device at home or on the go.
        </Typography>
      </Box>
      <img src="https://images.ctfassets.net/pkn4mh4dn52b/wFq6DOQFeoi4iEOKo8ack/fc7da4701f2e5352a9ecf029e63c6a93/home-tools.jpg?q=75&w=1189&fm=webp" alt="" 
      className='blogImg'
      />
      
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '20px', xs: '10px'} }}>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '25px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          Create your store, it's easy. 
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
            No credit card required.
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

export default ThirdBlog