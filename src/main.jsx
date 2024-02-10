import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import bluespot from '../public/spotlightBg.png';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div>
        <img className='bluespot ml-600' src={bluespot} alt="" />
      </div>
    <App />
  </React.StrictMode>,
)
