import React, {StrictMode} from "react";
import { ReactDOM,  } from "react";

function App(){
  <Menu />
}

function Menu(){
    <main>
        <Login name="Login"/>
        <Signin name="Signin"/>
    </main>
} 


function Login(props){
    return <div>
        <button className="log-in">{props.name}</button>
       
    </div>
}

function Signin(props){
    return <button>{props.name}</button>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<StrictMode><App/></StrictMode>)