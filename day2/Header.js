import React from 'react'
import logo from './asset/download.png'
import '../day2/index.css'
import SeachBar from './Searchbar'
export default function header() {
  return (
    <div className="navbar">
    <div className="logo">
        <img className="logo-img" src={logo} />
    </div>
    <div className="search-bar">
        <SeachBar />
    </div>
</div>
  )
}
