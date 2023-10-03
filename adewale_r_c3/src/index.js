import ReactDOM from "react-dom/client";
import React from 'react';
import './index.css';

function App() {
  return <div>
    <Page/>
    <Skill />
    <Skillist/>
  </div>


}

function Page (){
  return <div>
    <h2>NAME</h2>
   <p>ADEWALE EMMANUEL</p>

   <h3>EDUCATION BACKGROUND</h3>
   <p> undergraduate Computer science</p>
    <h3>SKILLS</h3>
  </div>
}

function Skillist(){
 return <div> 
  <Skill Skill="React.js"/>
  <Skill Skill="JavaScript"/>
  <Skill Skill="Html"/>
  <Skill Skill="Css"/>
  </div>
}

function Skill(props){
  return <div className="skill">
      <h2>{props.Skill}</h2>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
