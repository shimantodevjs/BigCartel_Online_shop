import { useEffect, useState } from 'react'
import Home from '../../src/Pages/Home'
import Examples from '../../src/Pages/Examples'
import PricingPage from '../../src/Pages/PricingPage'
import About from '../../src/Pages/About'
import LogIn from '../../src/Pages/LogIn'
import SignUp from '../../src/Pages/SignUp'
import { Route, Routes , useLocation} from "react-router-dom"

function App() {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);

 return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/examples" element={<Examples />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/login' element={<LogIn />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
  )
}

export default App
