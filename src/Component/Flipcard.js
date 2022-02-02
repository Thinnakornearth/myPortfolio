import React  from 'react';

const FlipCard = () => {
    const education = [{qualification: "Bachelor", uni: "University of Northampton", year: "2014 - 2017", degree: "Bachelor of Arts in Business and Management", img: "https://pbs.twimg.com/profile_images/1087340163703934977/KwenELkR_400x400.jpg", location: "Northampton, England", grade: "Second Class Honour"}, 
    {qualification: "Master", uni: "Macquarie University", year: "2020 - 2021", degree: "Master of International Business", img: "https://unilink.edu.vn/wp-content/uploads/2020/07/Macquarie-University-Logo.png", location: "Sydney, Australia", grade: "WAM: 72"},
    {qualification: "Master", uni: "University of Wollongong", year: "2021 - 2022", degree: "Master of Information Technology (Enterprise Networking)", img: "https://uowplaybook.s3-ap-southeast-2.amazonaws.com/logo/logo-shorthand-vertical-negative.png", location: "Wollongong, Australia", grade: "WAM: ?"}, ]
    return(
        <div className="flipcard">
            {education.map((edu) => (
                <div className="container" ontouchstart="this.classList.toggle('hover');">
                <div className="card">  
                  <div className="card_front" style={{backgroundImage: `url(${edu.img})`, backgroundSize: "100%"}}>
                  </div>
                  <div className="card_back">
                    <h1 className="card-symbol">{edu.qualification}</h1>
                    <div className="card-text">
                      <p className="uni-name"><strong>{edu.uni}</strong></p>
                      <ul>
                        <li><strong>{edu.degree}</strong></li>
                        <li><strong>Duration: {edu.year}</strong></li>
                        <li><strong>Location: {edu.location}</strong></li>
                        <li><strong>Grade: {edu.grade}</strong></li>
                      </ul>
                    </div>
                  </div>    
              
                </div>
              </div>
            ))}
        </div>
    )
}


export default FlipCard;