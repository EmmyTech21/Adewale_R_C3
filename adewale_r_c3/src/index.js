import ReactDOM from "react-dom/client";
import React from 'react';
import './index.css';

function App() {
  return (
    <div>
    <h1>Hello World</h1>
    <p>I am Adewale Emmanuel, this is my first React application.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
