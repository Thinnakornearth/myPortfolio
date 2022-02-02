import React, { Component } from 'react';
import NavItems from './NavItems'
import { FcMindMap, FcComboChart, FcGraduationCap, FcSmartphoneTablet, FcBusinessman} from 'react-icons/fc'
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive': ""
        }
    }

    activeItem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive': item}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
        console.log(document.getElementById(this.state.NavItemActive))
    }

    render(){
        return(
            <nav className="navbar" id="navbar">
                <div>
                <ul>
                     <NavItems  item="Home" toLink="/home" activenav={this.activeItem}></NavItems>
                     <FcMindMap/>
                     <NavItems  item="About" toLink="/about" activenav={this.activeItem}></NavItems>
                     <FcGraduationCap/>
                     <NavItems  item="Education" toLink="/education" activenav={this.activeItem}></NavItems>
                     <FcComboChart/>
                     <NavItems  item="Project" toLink="/project" activenav={this.activeItem}></NavItems>
                     <FcBusinessman/>
                     <NavItems  item="Experience" toLink="/experience" activenav={this.activeItem}></NavItems>
                     <FcSmartphoneTablet/>
                     <NavItems  item="Contact" toLink="/contact" activenav={this.activeItem}></NavItems>
                </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;