import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

function MyApp(){
  return (
    <h2>Custom react element created in vite</h2>
  );
}
function Notes(){
  return (
    <>
    <h3>Important points</h3>
    <p>Instead of creating components we can directly create objects and render them on the page</p>
    <p>We cannot create custom objects in react with custom properties</p>
    <p>To create custom objects we have to use the React.createElement method to create new objects</p>
    <p>To render this objects on the page we need not mention them as tags intead we can simply pass their name</p>
    </>
  );
}

const customObject = React.createElement(
  'a',
  {href:"https://www.google.com",target:'_blank'},
  'Visit google from here'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <>
    <MyApp />
    <hr/>
    <Notes />
    <hr/>
    <h4>Custom react object</h4>
    
    </>
    // we have to give the custom object otuside everything to work
    // customObject
)
