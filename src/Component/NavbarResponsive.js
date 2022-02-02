import React, { Component } from 'react';
import { Link } from'react-router-dom';

class NavbarResponsive extends Component {
    render() {
        return(
            <div className="nav">
                <nav>
                <ul>
                    <li id="Home">
                        <Link to="/home">Home</Link>
                    </li>
                    <li id="About">
                        <Link to="/about">About</Link>
                    </li>
                    <li id="Education">
                        <Link to="/education">Education</Link>
                    </li>
                    <li id="Project">
                        <Link to="/project">Project</Link>
                    </li>
                    <li id="Contact">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
                
            </div>
        )
    }
}

export default NavbarResponsive;