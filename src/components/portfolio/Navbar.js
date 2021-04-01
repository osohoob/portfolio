import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/nav.scss'
import logo from './../logo.png'
import fb from './../svg/fb.svg'
import ig from './../svg/ig.svg'
import pr from './../svg/pr.svg'
import us from './../svg/us.svg'

const Navbar = () => {
    return (
        <section className="page-top" >
            <nav className="navigation-container" >
                <div className="header-left flex-center">
                    <img src={logo} className="logo" />
                </div>
                <div className="nav-item-name" >
                    <a href="#Home" className="home animation" >home</a>
                    <a href="#About" className="contact animation" >about</a>
                    <a href="#Blogs" className="blog animation" >blog</a>
                    <a href="#Projects" className="projects animation" >projects </a>
                    <a href="#Skills" className="projects animation" >skills </a>
                </div>
                <div className="header-right" >
                    <img src={fb} />
                    <img src={ig} />
                    <img src={pr} />
                    <img src={us} />
                </div>
            </nav>
        </section>
    )
}

export default Navbar;