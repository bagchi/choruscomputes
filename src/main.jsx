import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home.jsx'
import Header from './Header.jsx'
import WhoWeAre from './WhoWeAre.jsx'
import NewsWrapper from './news_components/NewsWrapper.jsx'
import NewsArticle from './news_components/NewsArticle.jsx'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className='p-4 min-h-screen md:mx-12'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/news" element={<NewsWrapper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />

          <Route path="/news/:slug" element={<NewsArticle />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
)
