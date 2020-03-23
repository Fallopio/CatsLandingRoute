import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
    const responsiveHandler = () => {
        if (document.getElementById('navUl').className === 'navUl') {
            document.getElementById('navUl').className += 'responsive'
        }
        else { document.getElementById('navUl').className = 'navUl' }
    }
    const handleNav = () => {
        document.getElementById('navUl').className = 'navUl'
    }
    return (
        <nav className='nav'>
            <div className='icon' onClick={responsiveHandler}>
                <i className='fa fa-bars'></i>
            </div>
            <ul className='navUl' id='navUl'>
                <li>
                    <Link className='navLink' to='/' onClick={handleNav}>Home</Link>
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