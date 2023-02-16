import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png.png'
import React from 'react'

function Scrolling() {
    return (
        <div className='mainClassReruest'>
            <div className='NavBar'>
                <div className="logo">
                    <img src={Logo} alt="logo" className='logoImg' />
                </div>
                <div className='Nav'>
                    <ul>
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/profile'><li>Profile</li></Link>
                        <div class="dropdown">
                            <li class="dropbtn">Request</li>
                            <div class="dropdown-content">
                                <Link to='/all'> <a href="#">All</a></Link>
                                <Link to='/pending'><a href="#">Pending</a></Link>
                                <Link to='/approved'><a href="#">Approved</a></Link>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Scrolling;