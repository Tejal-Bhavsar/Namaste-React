import React from 'react'


const ShimmerCard = () => {
  return(
    <div className="shimmer-card">
    <div className="shimmer-img stroke animate"></div>
    <div className="shimmer-title stroke animate"></div>
    <div className="shimmer-tags stroke animate "></div>
    <div className="shimmer-details stroke animate "></div>
  </div>
  )
}
export default function Shimmer() {

  let count = 15
  return (
    <div>
         {
    Array(count).map((ind) => {
      <ShimmerCard />
    })
   }
    </div>
  
      
    
  )
}
