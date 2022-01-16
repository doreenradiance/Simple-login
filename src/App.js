import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Signup Form</h1><br />
      <div className="form">
        <div className="input">

          <div className="field">
            <input id="inputs" type="text" name="test"></input>
            <span>
              <i></i>
              <p>Full Name</p>
            </span>
          </div><br />

          <div className="field">
            <input id="inputs" type="text" name="test"></input>
            <span>
              <i></i>
              <p>Email</p>
            </span>
          </div><br />

          <div className="field">
            <input id="inputs" type="text" name="test"></input>
            <span>
              <i></i>
              <p>Phone</p>
            </span>
          </div><br />

          <div className="field">
            <input id="inputs" type="text" name="test"></input>
            <span>
              <i></i>
              <p>Password</p>
            </span>
          </div><br />

          <div>
            <button type="submit">SIGNUP</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
