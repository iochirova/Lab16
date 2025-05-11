import React from "react";
import {NavLink} from 'react-router-dom'
import './Header.css'

const Header = () =>{
    return(
        <>
            <ul className='header__list'>
                <li>
                    <NavLink to='/'>Новости</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>О проекте</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>Контакты</NavLink>
                </li>

            </ul>
        </>
    )
}

export default Header;