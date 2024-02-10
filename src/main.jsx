import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import bluespot from '/spotlightBg.png';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < >
      <div>
      <div>
        <img className='bluespot ml-600 flex items-start ' src={bluespot} alt="" />
      </div>
        <App />
        </div>
      </>
      
  </React.StrictMode>,
)
