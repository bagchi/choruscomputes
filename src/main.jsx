import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home.jsx'
import Header from './Header.jsx'
import WhoWeAre from './WhoWeAre.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className='p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
)
