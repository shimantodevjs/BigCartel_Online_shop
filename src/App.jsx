import { useEffect } from 'react'
import { Route, Routes , useLocation} from "react-router-dom"
import Home from '../Pages/Home';
import Examples from '../Pages/Examples'
import PricingPage from '../Pages/PricingPage'
import About from '../Pages/About'
import LogIn from '../Pages/LogIn'
import SignUp from '../Pages/SignUp'

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
