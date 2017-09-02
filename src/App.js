import React, { Component } from "react";
import Header from "./components/Header";
import "./bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

const socratesImg = require('./img/socrates.png');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="container">
            <div className="card about">
              <div className="card-content">
                <div className="tagline">
                  <h1>Hi. I'm Andrew Hill. I build websites.</h1>
                  <p className="subtitle">Full-Stack Developer // Mechanical Keyboard Enthusiast</p>
                </div>
                <div className="about-content hidden-on-mobile">
                  <h2>A little about me</h2>
                  <p>I'm a full stack software developer. I graduated from the University of
                    Louisville with a degree in Computer Information Systems with concentrations in
                    Web Development and Information Security. I currently volunteer as a mentor for
                    Code Louisville, a program that teaches students about the wonderful world of
                    programming and how it all works. I have a passion for building websites that
                    not only look nice, but serve a purpose. I want to solve a problem with the work
                    I do.
                  </p>
                </div>
                <button className="call-to-action primary">Get In Touch</button>
              </div>
            </div>
          </div>
          <div className="shadow section-heading-shadow">
            <div className="portfolio-section-heading">
              <p>Portfolio</p>
            </div>
          </div>
          <div className="container portfolio">
            <div className="portfolio-item item-1">
              <div className="portfolio-heading">
                <h2>Socrates</h2>
                <div className="action-buttons">
                  <a href="https://github.com/arhill05/socrates-rewrite">
                    <i className="fa fa-github icon" aria-hidden="true"></i>GitHub</a>
                  <a href="https://socratesapp.co">
                    <span className="icon">www</span>Live Site</a>
                </div>
              </div>
              <div className="portfolio-item-badges">
                <div className="badge">AngularJS</div>
                <div className="badge">HTML5</div>
                <div className="badge">Firebase</div>
                <div className="badge">LESS</div>
              </div>
              <p className="portfolio-item-descripion">
              <img src={socratesImg} />
                Socrates is an anonymous Q&A web app. Users can create sessions, ask questions in sessions, upvote questions they agree with,
                    and see other user's questions, all in real time. The idea is students who are afraid to ask questions in a classroom can
                    ask questions without fear of judgement by their peers, or Q&A sessions held at conferences can allow the audience to ask questions
                    and see the most poular questions without ever having to hand the microphone to an audience member for them to tell their life's story
                    in the mean time.
                  </p>
            </div>
            <div className="portfolio-item item-2"></div>
            <div className="portfolio-item item-3"></div>
            <div className="portfolio-item item-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
