import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Store configuration
import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "./state/index.js"
import { Provider } from "react-redux"

// Global Store
const store = configureStore({
  reducer: {
    global: globalReducer
  },

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
