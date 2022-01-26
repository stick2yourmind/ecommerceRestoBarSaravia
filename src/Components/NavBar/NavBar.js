import React from 'react';
import Nav from './NavBarStyles'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = () => {
  return (
    <Nav>
        <h1 className='navbar-brand'>
                <a
                className='navbar-link'
                href='/' 
                rel="noopener noreferrer"
                target="_blank"
                >
                    Ccia Bar
                </a>
        </h1>
        <ul className='navbar-nav'>
            <li 
            className='navbar-item'>
                <a
                className='navbar-link'
                href='/pastas' 
                rel="noopener noreferrer"
                target="_blank"
                >
                    Pastas
                </a>
            </li>
            <li className='navbar-item'>
                <a
                className='navbar-link'
                href='/vegan' 
                rel="noopener noreferrer"
                target="_blank"
                >
                    Vegan
                </a>
            </li>
            <li className='navbar-item'>
                <a
                className='navbar-link'
                href='/burguers' 
                rel="noopener noreferrer"
                target="_blank"
                >
                    Burguers
                </a>
            </li>
            <li className='navbar-item'>
                <a
                className='navbar-link'
                href='/pizzas' 
                rel="noopener noreferrer"
                target="_blank"
                >
                    Pizzas
                </a>
            </li>
        </ul>
        <CartWidget />
    </Nav>
    )
}

export default NavBar