import React from 'react';
import './App.css';
import image from "C:\\Users\\tanse\\OneDrive\\Desktop\\Ved\\myapp\\src\\dbfe1f493ad01117fa4ec5ba10150e4d-computer-programming-logo.png";
import gifImage from "C:\\Users\\tanse\\OneDrive\\Desktop\\Ved\\myapp\\src\\code.gif"; 

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={image} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/Ved609" target="_blank" rel="noopener noreferrer">My Github</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="translucent-box"  style={{ marginBottom: '100px' }}>
        <div className="centered-content">
          <img src={gifImage} alt="Centered GIF" width="600" height="400" />
          <div className="invisible-box">
            <h1>About Me</h1>
            <p className="centered-text-bigger">I am Ved Tusharbhai Patel I'm a 2nd year student at SRM University, pursuing Bachelor Of Technology in the field of Computer Science. I'm enthusiastic about being a software Engineer.</p>
          </div>
          <div className="contact-box">
            <h1>Contact Me</h1>
          </div>

        </div>
      </div>
      <div className="footer">
      <p>Email ID: <a href="mailto:vedpatel24122004@gmail.com">vedpatel24122004@gmail.com</a></p>
      <p>Phone Number: <a href="tel:9099656584">9099656584</a></p>
      <p>GitHub: <a href="https://github.com/Ved609" target="_blank" rel="noopener noreferrer">Ved's GitHub</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ved-patel-708475250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
    </div>

    </div>
  );
}


export default App;
