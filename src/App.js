import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactUS from './components/ContactUs/ContactUS'
import About from './components/About/About'
import Post from './components/Post/Post'
import Footer from './components/Footer/Footer'


const  App = () => {
  return (

    <Router>
      <div className="App">
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/contact-us"  component={ContactUS}/>
        <Route path="/about-us"  component={About}/>
        <Route path="/post/:slug" component={Post} />
        <Footer />
        
      </div>
    </Router>
    
  )
}

export default App