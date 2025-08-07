import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import './index.css'
import App from './App.jsx'
import Work from './Work.jsx'
import Contact from './Contact.jsx'
import NotFound from './components/NotFound.jsx'
import Success from './Success.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/work' element={<Work />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path="/success" element={<Success />} />
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
