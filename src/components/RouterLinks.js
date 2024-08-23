import React, {useState, useEffect} from 'react'
import {Route, Routes, Link, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Features from '../pages/Features'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import './RouterLinks.css'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const RouterLinks = () => {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(null);

    useEffect(() => {
        switch (location.pathname) {
          case '/':
            setSelectedLink('Home');
            break;
          case '/about':
            setSelectedLink('About');
            break;
          case '/features':
            setSelectedLink('Features');
            break;
          case '/contact':
            setSelectedLink('Contact');
            break;
          case '/signin':
            setSelectedLink('SignIn');
            break;
          case '/signup':
            setSelectedLink('SignUp');
            break;
          default:
            setSelectedLink(null);
        }
      }, [location.pathname]);

    const handleLinkClick = (linkText) => {
        setSelectedLink(linkText);
    };

  return (
    <div>
        <div>
             <nav id='navbar'>
                <ul id='navul'>
                    <li>
                        <div id='item1'>
                            <Link to="/"
                            className={selectedLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}
                            >Muzic</Link>
                        </div>
                    </li>    
                    <li>
                        <div id='item2'>
                            <li>
                                <Link to="/" id='item2a'
                                className={selectedLink === 'Home' ? 'active' : ''} onClick={() => handleLinkClick('Home')}
                                >Home</Link>
                            </li>
                            <li>
                                <Link to="/about" id='item2b'
                                className={selectedLink === 'About' ? 'active' : ''} onClick={() => handleLinkClick('About')}
                                >About</Link>
                            </li>
                            <li>
                                <Link to="/features" id='item2c'
                                className={selectedLink === 'Features' ? 'active' : ''} onClick={() => handleLinkClick('Features')}
                                >Features</Link>
                            </li>
                            <li>
                                <Link to="/contact" id='item2d'
                                className={selectedLink === 'Contact' ? 'active' : ''} onClick={() => handleLinkClick('Contact')}
                                >Contact</Link>
                            </li>
                        </div>
                    </li>
                    <li>
                        <div id='item3'>
                            <li>
                                <Button
                                to={"/signin"}
                                className={`signin ${selectedLink ===  'SignIn' ? 'activebtn' : ''}`}
                                onClick={() => handleLinkClick}>
                                    <FontAwesomeIcon icon={faLock} id='lock'/>
                                </Button>
                            </li> 
                            <li>
                                <Button
                                to={"/signup"}
                                className={`signup ${selectedLink === 'SignUp' ? 'activebtn' : ''}`}
                                onClick={() => handleLinkClick}>
                                    <p id='lock'>SignUp</p>
                                </Button>
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
    </div>
  )
}

export default RouterLinks
