import React, { Component } from "react";
import Header from "./components/Header";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="card about">
            <div className="card-content">
              <h1>Hi. I'm Andrew Hill. I build websites.</h1>
              <p>Full-Stack Developer // Mechanical Keyboard Enthusiast</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="card centered">test</div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="card centered">test</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
