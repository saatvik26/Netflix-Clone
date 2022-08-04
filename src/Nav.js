import React, { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img
                    onClick={() => history("/")}
                    className='nav__logo'
                    src="https://impactsa.co.za/wp-content/uploads/2022/01/Netflix-Logo.wine_.png" />
                <img
                    onClick={() => history("/profile")}
                    className='nav__avatar'
                    src='https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg' />
            </div >




        </div>
    )
}

export default Nav
