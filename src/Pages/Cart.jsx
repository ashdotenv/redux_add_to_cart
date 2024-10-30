import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartSelector = useSelector(state => state.cart)
  const [quantity, setQuantity] = useState(0)
  return (
    <div>
      {cartSelector.map((p, key) => (
        <div style={{ display: "flex" }} key={key}>
          <div>
            <img style={{ height: "80px", width: "80px" }} src={p.image} alt="" />
            {p.title}
          </div>
          <div>
            Quantity :{quantity}
            <div>
              <button onClick={() => setQuantity(quantity + 1)} >+</button>
              <button onClick={() => setQuantity(quantity - 1)} >-</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart