import React from 'react'
import { Stack , Typography, Box , Card , CardContent ,CardMedia } from '@mui/material'

const ExampleContent = () => {
  return (
    <div>
         <Stack
      sx={{backgroundColor:'#fff'}}
    >
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
            EXAMPLES
        </Box>
        <Typography
          variant='h3'
          sx={{fontSize:{xs: '30px', md:'50px'}, fontWeight:'bold',color:'#262a2a'}}
        >
          An army of artists
        </Typography>
        <Typography
          sx={{marginTop:'20px', width:{xs: '80%', md:'50%'}, textAlign:'center', fontSize:'14px', color:'#262a2a'}}
        >
           Whether they're starting a passionate side project, or making a full-time living selling unique goods online, over a million artists and makers have used Big Cartel to easily set up shop and get back to doing what they love. Here are a few of our favorites.
        </Typography>
      </Box>
      <Card
        sx={{display:'flex',
             flexDirection:{md:"row",xs:"column"},
             alignItems:'center',
             justifyContent:'center',
             margin:{md:'50px 80px 20px',xs:'50px 40px 20px'},
             boxShadow: '0 0 2px 0 gray'
           }}
      >
        <CardMedia
          component="img"
          image="https://images.ctfassets.net/pkn4mh4dn52b/3r1WcC55n26omKuQmagaU0/7686b6fe9523a0c59550c1675a47629d/roda_desktop.jpg?q=75&w=892&fm=webp"
        />
        
       <CardContent
         sx={{
            color:"#262a2a",
            textAlign:'center',
            padding:'0px 30px',
            width:'350px'
        }}
       >
        <Typography variant='h6'
            sx={{marginBottom:{md:'60px',xs:'20px'},
                 marginTop:{md:'0px',xs:'20px'}}}
        >
              Jose Rodriguez
        </Typography>
        <Typography variant='body2'>
              From his studio in Spain, Jose creates these wonderful illustrations.He lives from freelancing all over the World, you can be Like Jose as well.
        </Typography>
       </CardContent>
       </Card>
       </Stack>
    </div>
  )
}

export default ExampleContent
