import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import './index.css'
import App from './App.jsx'
import Work from './Work.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/work' element={<Work />}></Route>
    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
