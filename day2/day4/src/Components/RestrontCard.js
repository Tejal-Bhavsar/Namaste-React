import React from 'react'
import { ImgUrl } from '../config'
import React from 'react'

const RestrontCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
  return (
     <div className="card">
          <img src={
           ImgUrl + cloudinaryImageId
           }/>
              <h3>{name}</h3>
              <h6>{cuisines[0]}</h6>
              <p>{lastMileTravelString}</p>
          </div>
  )
}

export default RestrontCard;
