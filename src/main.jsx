import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/login/Login.jsx'
import LandlordProfile from './components/login/landlordProfile/LandlordProfile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* Debugging/Testing */}
    {/* <Login /> */}
    {/* <LandlordProfile /> */}
  </React.StrictMode>,
)
