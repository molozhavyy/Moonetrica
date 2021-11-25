import PropTypes from "prop-types"
import React from "react"
import { createContext, useContext, useMemo } from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import { connect } from "react-redux"

// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes"

// Import all middleware
import Authmiddleware from "./routes/route"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"
// Dashboard
import Dashboard from "./pages/Dashboard/index"

// Import scss
import "./assets/scss/theme.scss"

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper"

import fakeBackend from "./helpers/AuthType/fakeBackend"
import { connectWallet } from "./helpers/wallet_helper"

// Activating fake backend
fakeBackend()

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// }

// init firebase backend
// initFirebaseBackend(firebaseConfig)

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/dashboard">
          <VerticalLayout>
            <Dashboard />
          </VerticalLayout>
        </Route>
        <Route exact path="/">
          <VerticalLayout>
            <Dashboard />
          </VerticalLayout>
        </Route>
      </Router>
    </div>
  )
}

export default App
