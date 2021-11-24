import React from "react";
import { Route, HashRouter, NavLink, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Jobs from "./Jobs";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h1>Course Info</h1>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about-us" element={<About />}></Route>
              <Route exact path="/jobs" element={<Jobs />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
