import "./App.css";
import { useState } from "react";

function App() {
  const[weight ,setweight] = useState(0);
  const[height ,setheight] = useState(0);
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form action="">
          <div>
            <label htmlFor="">Weight (lbs)</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your Weight"
            value={weight}
            />
          </div>
          <div>
            <label htmlFor="">Height</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your height"
              value={height}
            />
          </div>
          <div>
            <button className="btn btn-outline-success my-2">Submit</button>
          </div>
          <div>
            <button className="btn btn-outline-success my-2">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is:</h3>
          </div>
          <div className="center">
            <h3>Your are:</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
