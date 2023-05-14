import React from 'react'
import { useForm } from "react-hook-form"
import { Box, Typography, Link  } from '@mui/material'
import './SIgnUpForm.css'

const SignupForm = () => {
  
   const{ 
    register, 
    handleSubmit ,
    }= useForm();
    
  const onSubmit=(data)=>{
    console.log(data)
  };

  return (
       <Box
       sx={{
        backgroundColor:'#ADD8E6',
       }}
    >
      <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
        }}
      >
         <Typography variant='h5' component='div'
          sx={{
         textAlign:'center',
         paddingTop:'30px',
       }}
         >
              BigCartel
         </Typography>
         <Typography variant='caption' component='div'
           sx={{
                textAlign:'center',
                padding:'30px 0px',
                width:'300px',
                fontSize:'12px'
              }}
         >
             Start your store with up to 500 products, and all premium features, for $19.99/mo.
         </Typography>
         <form onSubmit={handleSubmit(onSubmit)}
           style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        }}
         >
             <input {...register('email')}
                    placeholder='Email' 
                    className="form-input"
                    required
                    />
             <input {...register('password')}
                    placeholder='Password' 
                    type='password'
                    className="form-input"
                    required
                    />
             <input {...register('shopName')}
                    placeholder='Shop Name' 
                    className="form-input"
                    required
                    />
            <input {...register('shopUrl')}
                    placeholder='Shop Url' 
                    className="form-input"
                    required
                    />
            <button type='submit' className="form-button">Sign Up</button>
         </form>
         <Typography variant='caption' component='div'
           sx={{
                textAlign:'center',
                padding:'30px 0px',
                width:'300px',
                fontSize:'12px'
              }}
         >
            By signing up, you agree to Big Cartel's 
            <Link 
            href='https://example.com/legal'
            sx={{color:'#000'}}
            > Merchant User Agreement.</Link> 
         </Typography>
        <Typography variant='caption' component='div'
           sx={{
                textAlign:'center',
                padding:'30px 0px',
                width:'300px',
                fontSize:'12px'
              }}
        >
        <Link 
            href='/login'
            sx={{color:'#000'}}
            >Need to log in?
        </Link> 
        </Typography>
         </Box>
    </Box>
  )
}

export default SignupForm
