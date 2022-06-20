import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ProfileProvider } from './API/Profile'

import './assets/styles/main.scss'

import Navigation from './layouts/Navigation'

import App from './pages/App'
import Profile from './pages/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <App>
        <Routes>
          <Route path="/" element={''}></Route>
          <Route
            path="user/:id"
            element={
              <ProfileProvider>
                <Profile />
              </ProfileProvider>
            }
          ></Route>
          <Route path="activity" element={''}></Route>
          <Route path="activity/:name" element={''}></Route>
          <Route path="settings" element={''}></Route>
          <Route path="community" element={''}></Route>
          {/* Error 404 page */} <Route path="*" element={''}></Route>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
)
