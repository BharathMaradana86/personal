import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Book from './pages/Book/Book'
import Contact from './pages/Contact/Contact'
import LandingPage from './components/LandingPage/LandingPage'
import Services from './pages/Services/Services'
import About from './pages/About/About'
// import Privacy from './pages/PrivacyPolicy/Privacy'
import TC from './pages/TC/TC'
import PP from './pages/PP/PP'

export default function App() {
  return (
    <div>
        <Routes>
          <Route path='/book' element={<Book />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about-us' element={<About/>}/>
          {/* <Route path='/Privacy-policy' element={<Privacy/>}/> */}
          <Route path='/privacy-policy' element={<PP/>}/>
          <Route path='/terms-and-conditions' element={<TC/>}/>
        </Routes>
    </div>
  )
}
