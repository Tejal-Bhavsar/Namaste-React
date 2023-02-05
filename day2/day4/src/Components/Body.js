import React from 'react'
import RestrontCard from './RestrontCard'
import { restaurantList } from '../config'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Body() {
  const [search, setSearch ] = useState('')
  const [restaurant, setRestorant ] = useState(restaurantList)

  useEffect(() => {
    getRestaurents();
   }, []);

   //async

    async function getRestaurents() {
        //API Call
      const data = await axios(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6107101&lng=88.42706020000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await (data).json();
      //console.log(json);
      //optional chaining
      // setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards)
      // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

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
