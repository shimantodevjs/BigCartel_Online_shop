import React from 'react'
import CardData from '../pricingPage/CardData'
import CardContainer from '../pricingPage/CardContainer'
import { Stack , Typography, Box  } from '@mui/material'

const Pricing = () => {
  return (
    <Stack
      sx={{backgroundColor:'#fff'}}
    >
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' , justifyContent:'center',marginTop:{md: '80px', xs: '40px'} }}>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '30px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          Keep your money 
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
            We don't take a cut of your sales or charge a bunch of fees. Just pick one of our affordable monthly plans to fit your needs and budget.
        </Typography>
      </Box>
      <Box
         sx={{display:{sx:'block',md:'flex'}, alignItems:'flex-start', justifyContent:'space-around',marginTop:'40px'}}
      >
      {
        CardData.map((data)=>{
          return (
            <CardContainer
              key={data.id}
              product={data.product}
              price={data.price}
              tag={data.tag}
              buttonTxt={data.buttonTxt}
              header={data.description.header}
              description={data.description.text}
              color={data.color}
            />
          )
        })
      }
      </Box>
    </Stack>
  )
}

export default Pricing
