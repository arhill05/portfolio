import React, {Component} from "react";
import Header from "./components/Header";
import "./bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
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
          <div className="shadow">
            <div className="portfolio-section-heading">
              <p>A H</p>
            </div>
          </div>
          <div className="container">
            <div className="portfolio">
              <div className="portfolio-item item-1">
                <div className="portfolio-heading">
                  <h2>Socrates</h2>
                  <div className="action-buttons">
                    <button>
                      <i className="fa fa-github icon" aria-hidden="true"></i>GitHub</button>
                    <button>
                      <span className="icon">www</span>Live Site</button>
                  </div>
                </div>
              </div>
              <div className="portfolio-item item-2"></div>
              <div className="portfolio-item item-3"></div>
              <div className="portfolio-item item-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
