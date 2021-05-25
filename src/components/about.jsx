import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5&CSS_skill", content: "HTML5 & CSS" },
        { id: "Java_skill", content: "JAVA" },
        {
          id: "JavaScript_skill",
          content: "JavaScript"
        },
        { id: "SQL_skill", content: "SQL" },
        {
          id: "ReactJS_skill",
          content: "ReactJS"
          
        },
        {
          id: "Python_skill",
          content: "Python"
        },
        {
          id: "Node_skill",
          content: "Node.JS"
        },
        {
          id: "R_skill",
          content: "R Language"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Passionate Computer Science Student that is currently perusing a BSc (Hons) in Computer Science at the Informatics Institute of Technology. Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, and proficient with computers." 
            
             
             
            
        },
        {
          id: "second-p-about",
          content:
            "My exorbitant interest in anything and everything renewable, sustainable and technological. Always willing to learn and grow, one step at a time to expand my horizon and put myself into uncomfortable positions to better my experience and exposure. Seeking to further my capabilities and challenge myself with greater opportunities to test and learn newer technologies and approaches at managing, working and solving unchartered problems."
        }
      ],
      education: [
        {
          id: "first-p-about",
          content:
            <p ><b><u> Informatic Institute of Technology</u></b></p>

        },
        {
          id: "second-p-about",
          content:
          <p class="icon ion-ios-calendar-outline"> 2020 - 2023</p>
        },
        {
          id: "second-p-about",
          content:
          <p class="icon ion-location"> 57 Ramakrishna Rd, Colombo. Affiliated  to the University of Westminster London. </p>
        },
        {
          id: "third-p-about",
          content:
          <p class="icon ion-ios-book"> Persuing a BSc (HONS) Computer Science</p>
            
        },
        {
          id: "third-p-about",
          content:
          <p ><b> <u>LPF Academy</u></b></p>
            
        },
        {
          id: "second-p-about",
          content:
          <p class="icon ion-ios-calendar-outline"> 2014 - 2019</p>
        },
        {
          id: "second-p-about",
          content:
          <p class="icon ion-location">  244A Galvihara Rd, Dehiwala-Mount Lavinia.</p>
        },
        {
          id: "second-p-about",
          content:
          <p class="icon ion-ios-book"> Completed Cambridge GCE AL & Cambridge IGCSE</p>
        },
        {
          id: "third-p-about",
          content:
          <p class="icon ion-location"><b> <u>Royal Institute of Colombo</u></b></p>
            
        },
        {
          id: "second-p-about",
          content:
          <p class="icon ion-location">  Havalock, Colombo 05.</p>
        },
        {
          id: "second-p-about",
          content:
          <p class="icon ion-ios-calendar-outline"> 2006 - 2014</p>
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      { <p className="title-s">Professional Skill</p> }
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Education</h5>
                      </div>
                      {this.state.education.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
