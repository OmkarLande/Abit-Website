import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <img className='bluespot sm:ml-0 sm:mt-0 lg:ml-[265px] lg:mt[0px] md:h-[1000px] md:w-[1600px] scale-[1.5] md:scale-[1]' src="spotlightBg.png" />
    </div>
    <App />
  </React.StrictMode>,
)