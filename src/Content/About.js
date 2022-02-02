import React, { Component } from 'react';

class About extends Component {

    render() {
        return(
                <div className="condiv about">
                    <h1 className="subtopic">About me</h1>
                    <div className="divide">
                    <img src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t15.5256-10/s600x600/271548772_1071548653409662_2923637212806340957_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ad6a45&_nc_ohc=KSkvUKt7TIMAX-5HKCu&_nc_ht=scontent.fcbr1-1.fna&oh=00_AT8Apnk_ycTrJsdr3n4cw5LcGe237Y4VUatQXcufERchdQ&oe=61E44FE5" alt="my pic" className="profilepic2"/>
                    <div>
                    <h3>Hi, I'm Thinnakorn</h3>
                    <p className="paraAbout1"> I am a full-stack developer intern and currently a Master of Information Technology student based in Wollongong. I have strong business backgrounds <span>but why I am now here in 
                        ICT world ?</span> This is because I have been passionate about technology since I was young and have seen many businesses shifted their operations to online. Likewise, I graduated my first Master degree in 
                        International Business at the end of 2020. It was in the middle of Covid19 pandemic. Therefore, I decided to spend this time to
                        learn more about technology so I can combine my busines skills with ICT skills and produce the best IT strategy for business.
                    </p>
                    </div>
                    </div>
                </div>


        )
    }
}

export default About; 