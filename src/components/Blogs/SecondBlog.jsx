import { Stack , Typography, Box  } from '@mui/material'

const SecondBlog = () => {
  return (
    <Stack
      sx={{backgroundColor:'#fff'}}
    >
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '20px', xs: '10px'} }}>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '30px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          Your custom shop
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
            Customize one of our free themes to set the look and feel of your shop. Or dive into the code to create a one-of-a-kind design.
        </Typography>
      </Box>
      
      <img src="https://images.ctfassets.net/pkn4mh4dn52b/4fPYLxFhYI6SG0qcM8mio8/94c9c263721f72082144f950a850a475/home-customshop.jpg?q=75&w=1189&fm=webp" alt="" 
       className='blogImg'
      />
    </Stack>
  )
}

export default SecondBlog