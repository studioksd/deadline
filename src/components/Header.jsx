import React from "react";
import Logo from '../logodemo.svg'
import './styles/Header.css'

function Header() {
    return (
        <header className='header'>
            <img src={Logo} className='logo' alt="logo" />
        </header>
    )
}

export default Header