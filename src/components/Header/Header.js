import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const [search, setSearch] = useState(false)

  const openSearch = () => {
        setSearch(true)
    }

  const submitSearch = (e) => {
    e.preventDefault()
    alert('Searhed')

  }

  const searchClass = search ? 'searchInput active' : 'searchInput'

  return (
    <header className="header">
          <ul className="headerMenu">
              <span><NavLink to="/">Home</NavLink></span>
              <span><NavLink to="/about-us">About Us</NavLink></span>
              <span><NavLink to="/post">Posts</NavLink></span>
              <span><NavLink to="/contact-us">Contact Us</NavLink></span>
          </ul>

        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../icons/search.png')} alt="Search" />
            </form>
            
        </div>
    </header>
   )

 }

export default Header