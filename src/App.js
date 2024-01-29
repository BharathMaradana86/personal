import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Book from './pages/Book/Book'
import Contact from './pages/Contact/Contact'
import LandingPage from './components/LandingPage/LandingPage'
import Services from './pages/Services/Services'

export default function App() {
  return (
    <div>
        <Routes>
          <Route path='/book' element={<Book />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
    </div>
  )
}