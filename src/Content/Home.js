import React, { Component } from 'react';
import Social from '../Component/Social'
import ReactTypingEffect from 'react-typing-effect';
import profilepic  from '../img/profile.jpg'

 
class Home extends Component {
    render() {
        return(
                <div className="condiv home">
                    <h1>Welcome To My World!</h1>
                    <div className="updown">
                    <img src={profilepic} alt="" className="profilepic"/>
                    </div>
                    <div className="box board">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <ReactTypingEffect text={["My name is Thinnakorn (Thomas).", "I am a developer (web & software)."]} speed="80" eraseDelay="200" eraseSpeed="50" className="typingEffect"/>
                    </div>
                    <Social/>
                </div>
        )
    }
}

export default Home;