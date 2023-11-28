import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import './App.css'
// import {Apps} from './Apps.jsx'
import cors from "cors";
// import Appss from './Appss';
const corsOrigin ={
    origin:'http://localhost:5173', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:200
}
// App.use(cors(corsOrigin));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Apps /> */}
  </React.StrictMode>,
)
 