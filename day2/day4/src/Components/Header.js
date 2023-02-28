import React from 'react'
import { useState } from 'react'

const Title = () => {
    return (
        <>
         <a href="/">
         <h1>BHOOKAD's</h1>
         </a>
        </>
        
    )
}

export default function Header() {
  const [isLoggedIn, setIsLoggedIn ] = useState(false)
  return (
    <div className="header">
    <Title />
    <ul className="Nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
     </ul>
     {/* <div > */}
          {
          isLoggedIn ? 
          <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
          <button onClick={() => setIsLoggedIn(true)}>Login </button>
          }
        {/* </div> */}
    </div>
  )
}
