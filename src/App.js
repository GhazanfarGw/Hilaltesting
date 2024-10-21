import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import ClipLoader from 'react-spinners/CircleLoader';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio/index'
import Philosophy from './Pages/Philosophy/Index'
import Team from './Pages/Teams/Team'
import News from './Pages/News/News'
import Index from './Pages/Home/Index';

const App = () => {
const [loading , setloading] = useState(false)
  useEffect (() => {
    setloading(true)
    setTimeout (() =>{
      setloading (false)
    },2000)
  },[])
  
  return (
    <>
      <div className="App scroll-smooth duration-300 overflow-hidden">
      { loading ?
       <ClipLoader color={"#0C6E33"} loading={loading} size={60} className='justify-center text-center align-middle items-center mx-auto md:my-96 my-72'/>
      :
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/philosophy" element={ <Philosophy/> } />
        <Route path="/team" element={ <Team/> } />
        <Route path="/news" element={ <News/> } />
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
      }
    </div>
    </>
  );
}

export default App;
