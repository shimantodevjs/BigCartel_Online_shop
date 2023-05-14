import React from 'react'
import {Typography, Box , Stack ,Card ,CardMedia , Button } from '@mui/material'
import { Link } from 'react-router-dom'
import GalleryData from './GalleryData'
import ImageContainer from './ImageContainer'

const ExampleGallery = () => {
    
const firstSix = GalleryData.slice(0, 6);
const lastEight = GalleryData.slice(6,14);

  return (
    <Stack>
    <Box
       sx={{
        display: 'grid',
        gridTemplateColumns: {md: '1fr 1fr',xs:'1fr'},
        gridGap: 40,
        margin:{md:'20px 80px',xs:'20px 40px'}
      }}
    >
       {
        firstSix.map(data => {
        return(
        <ImageContainer
           key={data.id}
           image={data.image}
           title={data.title}
        />
        )
       })
       }
    </Box>
    <Card
        sx={{margin:'20px 80px'}}
    >
        <CardMedia
           component='img'
           image='https://images.ctfassets.net/pkn4mh4dn52b/6lUoR9CNygsocYmscUwYmY/5186642c39fab12b13770d7a73beffbe/nicmiller.jpg?q=75&w=892&fm=webp'
           
        />
    </Card>

    <Box
       sx={{
        display: 'grid',
        gridTemplateColumns: {md: '1fr 1fr',xs:'1fr'},
        gridGap: 40,
        margin:{md:'20px 80px',xs:'20px 40px'}
      }}
    >
       {
        lastEight.map(data => {
        return(
        <ImageContainer
           key={data.id}
           image={data.image}
           title={data.title}
        />
        )
       })
       }
    </Box>
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
           sx={{backgroundColor:'#262a2a',color:'#fff',margin:'40px',padding:'15px 40px', width:'300px'}}
        >Open your online store</Button>
        </Link>
      </Box>
    </Stack>
  )
}

export default ExampleGallery
