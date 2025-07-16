import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from '../../root_gallery/src/Pages/About'
import { Menu } from './Pages/Menu';
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}/>
         <Route path='/Menu' element={<Menu/>}/>
    </Routes>
    
    </BrowserRouter>
        
      
    </>
  )
}

export default App
