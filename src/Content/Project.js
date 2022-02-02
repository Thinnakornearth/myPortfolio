import React, { Component } from 'react';
import image1 from '../img/avatar.png';
import image2 from '../img/story.png';
import image3 from '../img/portfolio.png';
class Project extends Component {
    render() {
        const projects = [
            {
                image: image1,
                name: "Avatar Government",
                description: "This project is a government service simulation where the web platform allows every citizen of Avatar to use the provided services. There are now three services in this platform which are: Travel Exemption Service, Driver Licence Service, Birth Certificate Service. However, there are a few services in which these services will complement all government's services such as, payment service and check visa status service. The tech-stacks of this application are Docker, Javascript, Python, SQL, HTML and CSS",
                git: <a href="https://github.com/Thinnakornearth/Avatar" target="_blank" rel="noopender norefferrer"><i class="fab fa-github"></i></a>,

            },
            {
                image: image2,
                name: "Story Application",
                description: "This project is to provide stories about significant places in Australia. The API for each story is provided by the hoster. Therefore, the tech-stacks are purely React Native with mainly focus on Android devices.",
                git: <a href="https://github.com/Thinnakornearth/YesterdayStoriesDeveloperChallenge" target="_blank" rel="noopender norefferrer"><i class="fab fa-github"></i></a>,
            },
            {
                image: image3,
                name: "My Website Portfolio",
                description: "This is my portfolio website and it was built purely by React framework (Javascript).",
                git: <a href="https://github.com/Thinnakornearth/YesterdayStoriesDeveloperChallenge" target="_blank" rel="noopender norefferrer"><i class="fab fa-github"></i></a>,
            },

        ]
        return (
            <div className="condiv project">
                <h1>Project</h1>
                <div className="container-project">
                    {projects.map((pro, index) => (
                        <div className="header-project">
                            <div className="card1">
                                <div className="image">
                                    <img href="#" src={pro.image} alt="pokemon" width="350" height="250" />
                                </div>
                                <div className="content">
                                    <h3>This is content</h3>
                                    <p>{pro.description}</p>
                                </div>
                            </div>
                            <h1>{pro.name} {pro.git}</h1>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Project;