import React from 'react'
import RestrontCard from './RestrontCard'
import { restaurantList } from '../config'
import { useState } from 'react'

export default function Body() {
  const [search, setSearch ] = useState('')
  const [restaurant, setRestorant ] = useState(restaurantList)

  const filterRestorant = (search, restaurant) => {
     let data =  restaurant.filter((item) => search.toLowerCase() == item.data.name.toLowerCase())
     return data
  }

  return (
    <>
     <input 
      type='text'
      className='search-input'
      placeholder='search restorants here'
      value={search}
      onChange={(e) => {
        setSearch(e.target.value)
      }}
      />
      <button
      onClick={() => {
      let data = filterRestorant(search, restaurant)
       setRestorant(data)
      }}
      >Search</button>
     <div className="restaurant-list">
      
            { restaurant.map((restorant) => {
                return <RestrontCard {...restorant.data} />
            })}
    </div>
    </>
     
  )
}
