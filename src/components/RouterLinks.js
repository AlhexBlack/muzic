import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const RouterLinks = () => {
  return (
    <Router>
    <ul>
        <li>
            <Link to="/">Muzic</Link>
        </li>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/features">Features</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/signin">Signup</Link>
        </li>
        <li>
            <Link to="/signup">Signin</Link>
        </li>
    </ul>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/features' element={<Features/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/signin' element={<Signin/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
    </Routes>
    </Router>
  )
}

export default RouterLinks
