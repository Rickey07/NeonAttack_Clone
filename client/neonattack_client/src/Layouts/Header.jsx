import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaret} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <>
        <header className='main-header'>
            <nav className='navbar-main-container'>
                <div className="nav-logo-right">
                    <a href="#">Logo</a>
                </div>
                <div className="nav-dropdown-buttons">
                    <div className='dropdown'>
                        <button className='dropbtn'>
                            Customise
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Neon Sign</a>
                            <a href="#">Floro Sign</a>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn'>
                            ShopLights
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Neon Sign</a>
                            <a href="#">Floro Sign</a>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn'>
                            Shop Collections
                            <FontAwesomeIcon icon="fa-sharp fa-solid fa-caret-down" />
                        </button>
                        <div className="dropdown-content">
                            <div className="categories">
                                <div className="category">
                                    <h5>Rooms</h5>
                                    <a href="#">Living Room</a>
                                    <a href="#">Bed Room</a>
                                    <a href="#">Kids Room</a>
                                    <a href="#">Gaming Room</a>
                                    <a href="#">Home Office</a>
                                    <a href="#">Home Bar</a>
                                </div>
                                <div className="category">
                                    <h5>Place</h5>
                                    <a href="#">Bar</a>
                                    <a href="#">Cafe</a>
                                    <a href="#">Salon</a>
                                    <a href="#">Gym</a>
                                </div>
                                <div className="category">
                                    <h5>Event</h5>
                                    <a href="#">Wedding</a>
                                    <a href="#">BirthDay</a>
                                    <a href="#">Baby Shower</a>
                                    <a href="#">Party</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn'>
                            For business
                        </button>
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn'>
                            WhyNeon AttackClone
                        </button>
                        <div className="dropdown-content">
                            <a href="#">About NeonAttackClone</a>
                            <a href="#">Neon Wall</a>
                        </div>
                    </div>
                </div>
                <div className='nav-logos-left'>
                    <a href="#">A</a>
                    <a href="#">B</a>
                    <a href="#">C</a>
                </div>
            </nav>
        </header>
    </>
  )
}
