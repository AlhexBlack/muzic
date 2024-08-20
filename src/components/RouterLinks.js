import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import './RouterLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const RouterLinks = () => {
  return (
    <Router>
        <div>
             <nav id='navbar'>
                <ul id='navul'>
                    <li>
                        <div id='item1'>
                            <Link to="/">Muzic</Link>
                        </div>
                    </li>    
                    <li>
                        <div id='item2'>
                            <li>
                                <Link to="/" id='item2a'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" id='item2b'>About</Link>
                            </li>
                            <li>
                                <Link to="/features" id='item2c'>Features</Link>
                            </li>
                            <li>
                                <Link to="/contact" id='item2d'>Contact</Link>
                            </li>
                        </div>
                    </li>
                    <li>
                        <div id='item3'>
                            <li>
                            <button id='signinbtn'><Link to="/signup"><FontAwesomeIcon icon={faLock} id='lock'/></Link></button>
                            </li> 
                            <li>                
                            <button id='signupbtn'><Link to="/signin">SignUp</Link></button>
                            </li>   
                        </div>
                    </li>    
                </ul>
            </nav>
        </div>
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
