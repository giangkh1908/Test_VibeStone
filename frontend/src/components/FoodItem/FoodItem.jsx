import React, { useContext } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ image, name, price, desc, id }) => {

  const { addToCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <img src={image} alt="" />  {/* Direct use of Cloudinary URL */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <h4>{name}</h4>
        </div>
        <p>{desc}</p>
        <div className="food-item-price">
          <p className="food-item-price-figure">${price}</p>
          <button onClick={() => addToCart(id)} className='food-item-price-button'>Thêm</button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
