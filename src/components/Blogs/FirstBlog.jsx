import { Stack , Typography, Box  } from '@mui/material'

const FirstBlog = () => {
  return (
    <Stack
      sx={{backgroundColor:'#fff'}}
    >
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '40px', xs: '20px'} }}>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '30px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          Made for makers 
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
            Since 2005, over a million creators have sold their t-shirts, art, clothing, merch, prints, jewelry, and other weird and wonderful stuff with Big Cartel.
        </Typography>
      </Box>
       <img src="https://images.ctfassets.net/pkn4mh4dn52b/1wWIHjN8d2wECysQyKCUgy/e3bbf74764ed5a549b33ee9ee5f81b50/home-makers.jpg?q=75&w=1189&fm=webp" alt="" 
       className='blogImg'
       />
    </Stack>
  )
}

export default FirstBlog
