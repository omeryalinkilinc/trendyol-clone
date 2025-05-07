import React from 'react'
import '../assets/styles/StarRating.css';
import star from '../assets/images/star.png';
const StarRating = ({rating, count}) => {

    const safeRating = typeof rating === "number" ? rating : 0;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >=0.5;

  return (
    <div className="StarRating">
    <span className='rating'>{safeRating.toFixed(1)}</span>
    {[...Array(5)].map((_, i) => {
      if (i < filledStars) {
        return <span key={i} style={{ color: "#f7c600" }}><img className='star_img' src={star} /></span>;
      } else if (i === filledStars && hasHalfStar) {
        return <span key={i} style={{ color: "#f7c600" }}><img className='star_img' src={star} /></span>; // Dilersen burada farklı ikon da kullanabiliriz
      } else {
        return <span key={i} style={{ color: "#ccc" }}><img className='star_img' src={star} /></span>;
      }
    })}
    <span style={{ marginLeft: 4, color: "#777" }}>({count})</span>
  </div>
  )
}

export default StarRating
