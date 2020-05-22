import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useRef } from 'react'

function Navbar(props) {
    const navRef = useRef(undefined)

    const responsiveHandler = () => {
        if (navRef.current.className === 'navUl') {
            navRef.current.className += 'responsive'
        }
        else { navRef.current.className = 'navUl' }
    }
    const handleNav = () => {
        navRef.current.className = 'navUl'
    }
    return (
        <nav className='nav'>
            <div className='icon' onClick={responsiveHandler}>
                <i className='fa fa-bars'></i>
            </div>
            <ul className='navUl' ref={navRef} id='navUl'>
                <li>
                    <Link className='navLink' to='/CatsLandingRoute' onClick={handleNav}>Home</Link>
                </li>
                <li>
                    <Link className='navLink' to='/about' onClick={handleNav}>About</Link>
                </li>
                <li>
                    <Link className='navLink' to='/contacts' onClick={handleNav}>Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar