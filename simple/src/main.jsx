import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const reactEl = React.createElement(   //this is how raect babel is compile react code into simple js 
  "a",
  {href:"https://github.com/MrPravinS",target:"_blank"},
  "clicked here to visit my GitHub account"
)

createRoot(document.getElementById('root')).render(
  reactEl
)
