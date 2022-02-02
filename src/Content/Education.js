import React, { Component } from 'react';
import FlipCard from '../Component/Flipcard';

class Education extends Component {
    render() {
        return(
            <div className="condiv education">
                <h1>Education</h1>
                <h2>Hover them ! &darr;</h2>
                <FlipCard/>
            </div>
        )
    }
}


export default Education;