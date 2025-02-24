import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="overflow-hidden">
      <img 
        className="bluespot 
          sm:h-[150vh] sm:w-full sm:object-cover sm:scale-[3] sm:relative 
          md:h-[700px] md:w-[1100px] md:ml-[-100px] md:mt-10 md:scale-[1.2] md:fixed 
          lg:h-[800px] lg:w-[1200px] lg:ml-[400px] lg:mt-20 lg:scale-100 lg:fixed 
          xl:ml-[500px]"
        src="spotlightBg.png"
      />
    </div>

    <App />
  </React.StrictMode>,
)