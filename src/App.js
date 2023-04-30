import "./App.css";
import { useState } from "react";

function App() {
  const[weight ,setweight] = useState(0);
  const[height ,setheight] = useState(0);
  const[bmi ,setbmi] = useState("");
  const[message ,setmessage] = useState("");

  const Submit= (e) =>{
    e.preventDefault();
    if(weight <=0 || height <=0 ){
      alert("Please enter a Valid Weight and Height")
    }
    else{
      const bmi = ((weight / (height*height))*703);
      setbmi(bmi.toFixed(1));

      if(bmi<2.5){
        setmessage("Your are under Weight");
      }
      else if(bmi>=2.5 && bmi<=3.0){
        setmessage("Your are Healthy");
      }
      else{
        setmessage("Your are Over Weight");
      }
    }
  }
  const clear =() =>{
    let newtext = 0 ;
    setweight(newtext);
    setheight(newtext);
  }


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
            value={weight} onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height</label>
            <input
              type="text"
              name=""
              id="height"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
          <div className="con">
            <button className="btn btn-outline-success my-2 mx-4" onClick={Submit}>Submit</button>
            <button className="btn btn-outline-success my-2" onClick={clear}>clear</button>
          </div>
          <div className="center">
            <h5>Your BMI is:{bmi}</h5>
          </div>
          <div className="center">
            <h5>{message}</h5>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
