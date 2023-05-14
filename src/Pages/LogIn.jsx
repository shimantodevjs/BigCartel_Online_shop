import React from 'react'
import { Typography , Box , TextField ,Button,Link} from '@mui/material'
import { useForm } from "react-hook-form";


const LogIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        backgroundColor:'#87CEEB',
        height: "100vh", // set the desired height
      }}
    >
    <Box
       sx={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
       }}
    >
    <Typography component='div' variant='h5'
       sx={{
         textAlign:'center',
         paddingTop:'100px',
       }}
    >
       BigCartel
    </Typography>
    <form 
         onSubmit={handleSubmit(onSubmit)}
         style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          marginTop:'50px',
          backgroundColor:'#fff',
          width:'300px',
         }}
         >
      <TextField
        id="shopUrl"
        label="Shop URL"
        variant="standard"
        {...register("shopUrl", { required: true })}
        error={Boolean(errors.shopUrl)}
        helperText={errors.shopUrl && "This field is required"}
        fullWidth
         InputProps={{
          disableUnderline: true,
        }}
        InputLabelProps={{
        sx: {
            padding: "0px 15px",
            fontSize:'12px'
            },
        }}
        sx={{
          margin:'10px 0px 0px',
          padding: "0px 15px",
          borderBottom:'1px solid #efefef'
        }}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="standard"
        {...register("password", { required: true })}
        error={Boolean(errors.password)}
        helperText={errors.password && "This field is required"}
        fullWidth
        InputProps={{
          disableUnderline: true
        }}
        InputLabelProps={{
        sx: {
            padding: "0px 15px",
            fontSize:'12px'
            },
        }}
        sx={{
          padding: "0px 15px",
          margin:'10px 0px 0px'
        }}
      />
     
      <Button
          type="submit"
          fullWidth
          variant="text"
          sx={{
            backgroundColor:'#efefef',
            padding:'15px 0px',
          }}
       >Login</Button>
    </form>
     <Typography
       sx={{
         marginTop:'20px'
       }}
     >
      <Link
          sx={{
           color:"blue",
           textDecoration:'none',
           opacity:'0.7'
          }} 
          href="/forgot-password">Forgot Password?</Link>
    </Typography>
    </Box>
    </Box>
  )
}

export default LogIn

