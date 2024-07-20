import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Result from './Result';

const secretNum = Math.floor(Math.random()*10)+1;
function App() {

  const[term,setTerm]=useState("")

  const handleChange=(e)=>{
    setTerm(e.target.value)

  }
  return (

    <div className="container">
      <div className="head">
        <lable htmlFor='term'>
          Guess the number between 1 to 10 
          {/* (answer:{secretNum}) */}
        </lable>
      </div>
      <input 
        id="term" 
        type="text" 
        name="term" 
        onChange={handleChange} 
      />
      <Result secretNum={secretNum} term={term}/>
    </div>
  );
}

export default App;
