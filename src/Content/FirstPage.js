import React from 'react';
import { Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import './FirstPage.css';


const FirstPage = () => {  

    return(
        <div className="FirstPage">
            <ReactTypingEffect text={["print(ThinnakornChitsincharoen())", "console.log(ThinnakornChitsincharoen())"]} speed="50" eraseDelay="800" eraseSpeed="50" className="typingEffect1"/>
            <Link to="/home">RUN</Link>
        </div>
    )
}

export default FirstPage;