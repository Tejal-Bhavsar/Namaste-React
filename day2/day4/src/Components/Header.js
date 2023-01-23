import React from 'react'

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
  return (
    <div className="header">
    <Title />
    <ul className="Nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
     </ul>
    </div>
  )
}
