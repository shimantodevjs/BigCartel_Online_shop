import React from 'react'
import { Card, CardContent,Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './card.css'

const CardContainer = ({product,tag,buttonTxt,header,description,price,color}) => {
   return (
     <Box
         sx={{display:'flex',alignItems:'center', justifyContent:'center'}}
         className='card'
     >
    <Card
       sx={{cursor:'pointer', marginTop:{xs:'40px',md:'0px'}}}
    >
      <CardContent
          sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'350px', height:'300px',backgroundColor:color}}
      > 
        <Typography gutterBottom variant='body1' component='div'>
          {product}
        </Typography>
        <Typography gutterBottom variant='h5'>
          {price}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {tag}
        </Typography>
        <Link to='/signup'>
        <Button 
           sx={{backgroundColor:'#262a2a',color:'#fff',marginTop:'15px',padding:'15px 30px'}}
        >{buttonTxt}
        </Button>
        </Link>
      </CardContent>
      
      <CardContent
         sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'350px',textAlign:'center'}}
      >
         <Typography gutterBottom variant='body1' component='div'>
          {header}
        </Typography>
        <Typography gutterBottom variant='body2' component='div' color='text.secondary'
           sx={{width:'200px'}}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}

export default CardContainer
