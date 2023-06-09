import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/login/Login.jsx'
import LandlordProfile from './components/landlordProfile/LandlordProfile.jsx'
import LoggedInProfile from './components/loggedInProfile/loggedInProfile.jsx'
import TenantPreferenceLocation from './components/tenantPreferenceLocation/TenantPreferenceLocation.jsx'
import TenantPreferenceLocationSearchInput from './components/tenantPreferenceLocationSearchInput/TenantPreferenceLocationSearchInput.jsx'
import TenantPreferenceLocationGeocode from './components/tenantPreferenceLocationGeocode/TenantPreferenceLocationGeocode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Debugging/Testing */}
    {/* <Login /> */}
    {/* <LandlordProfile /> */}
    {/* <LoggedInProfile isLandlord={false} /> */}
    {/* <TenantPreferenceLocation /> */}
    <TenantPreferenceLocationSearchInput />
    {/* <TenantPreferenceLocationGeocode /> */}
  </React.StrictMode>,
)
