import React from 'react'
import { Card,CardMedia,CardContent,Typography } from '@mui/material'

const ImageContainer = ({image,title}) => {
  return (
    <Card
       sx={{cursor:'pointer', transition:'all 0.2s ease-in-out'}}
       className='galleryPhoto'
    >
       <CardMedia
         component="img"
         image={image}
       />
       <CardContent>
          <Typography 
             variant='h5'
             sx={{textAlign:'center',
                   padding:"30px 0px 50px"
            }}
          >
               {title}
          </Typography>
       </CardContent>
    </Card>
  )
}

export default ImageContainer
