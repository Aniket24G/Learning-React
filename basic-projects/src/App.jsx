import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [val,setValue] = useState(10);
  const add = () => {
    // console.log("added",val);
    // val = val+1;
    if(val>=20) {
      high();
      setValue(1);
    }
    else setValue(val+1)
  }

  const subtract = () =>{
    // val = val-1;
    // setValue(val)
    if(val<=0) {
      low();
      setValue(0);
    }
    else setValue(val-1);
  }

  const low = () => {
    alert("Value cannot be less than 0");
  }

  const high = () =>{
    alert("Value cannot be greater than 20")
  }



  return (
    <>
    <div className="project1">
      <h2>Project 1 - Counter</h2>
      <p>We cannot directly inject or update any values on the UI, we have to use the useState method to reflect the changes</p>
      <h3>Value: {val}</h3>
      <button onClick={add}>Increment</button>
      <br /><hr />
      <button onClick={subtract}>Decrement</button>
    </div>
    </>
  )
}

export default App
