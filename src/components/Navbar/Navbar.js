import React from 'react';
import '../styles/nav.scss'
const Navbar = () => {
    return (
        <>
            <nav className="navigation-container" >
                <div className="navigation-items" >
                    <div className="my-name" >Usukhbayar</div>
                    <div className="line" ></div>
                    <div className="page1" ><a>Home</a></div>
                    <div className="page2" ><a>About</a></div>
                    <div className="page3" ><a>My Blog</a></div>
                    <div className="page4" ><a>Contact</a></div>
                </div>

            </nav>
            <div className="body" >
                <div><h1>Hi I'm Usukhbayar</h1></div>

            </div>
        </>
    )
}

export default Navbar;